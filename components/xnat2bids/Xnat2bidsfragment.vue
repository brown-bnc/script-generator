<template>
  <fragment>
    <pre>
    <fragment>
    # Tell bash to complaint if we have undefined variables 
    set -u 
    # Read variables from an .env file in current directory 
    # This will read: # XNAT_USER, XNAT_PASSWORD 
    set -a 
    [ -f .env ] && . .env 
    set +a

    # Version of xnat2bids being used
    version={{ version }}
    # Path to Singularity Image for xnat-tools (maintained by bnc)
    simg=/gpfs/data/bnc/simgs/brownbnc/xnat-tools-${version}.sif
    
    #--------- directories ---------

    # Output directory
    output_dir="{{ output_path_validated }}"
    mkdir -m 775 ${output_dir} || echo "Output directory already exists"
    </fragment>

    <fragment>
    #----------- Dictionaries for subject specific variables -----
    # Dictionary of sessions to subject
    {{ sessionDictString }}

    # Dictionary of series to skip/include per subject
    {{ seriesDictString }}
    
    # Use the task array ID to get the right value for this job
    XNAT_SESSION=${sessions[${SLURM_ARRAY_TASK_ID}]}
    INCLUDE_SKIP_STRING=${series_map[${SLURM_ARRAY_TASK_ID}]}

    echo "Processing session:"
    echo ${XNAT_SESSION}
    echo "Series to skip:"
    echo ${INCLUDE_SKIP_STRING}

    #--------- Run xnat2bids ---------
    # Runs singularity command to extract DICOMs 
    # from xnat and export to BIDS.
    # This command tells singularity to launch
    # xnat-tools-${version}.sif image
    # and execute the xnat2bids command with the given inputs.
    # The `-B` flag, binds a path. 
    # i.e, makes that directory available to the singularity container
    # The file system inside your container is not the same as in Oscar, 
    # unless you bind the paths. 
    # We are binding the ouput directory and the bidsmap directory
    # Singularyty by default also binds your home and /tmp
    # The -i passes a series to download, 
    # without any -i all sequences will be processed
    # The -s passes a series to skip, 

    <fragment v-if=needs_bidsmap>
    # The bidsmap file
    # It needs to live under ${bidsmap_dir}/${bidsmap_file}
    bidsmap_dir={{ bidsmap_dir }}
    bidsmap_file={{ bidsmap_file }}
    </fragment>

    {{ singularityString }}
    </fragment>



    </pre>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'

export default {
  components: {
    Fragment,
  },
  computed: {
    ...mapFields([
      'xnat2bids.version',
      'xnat2bids.output_path',
      'xnat2bids.needs_bidsmap',
      'xnat2bids.bidsmap_dir',
      'xnat2bids.bidsmap_file',
      'xnat2bids.overwrite',
      'xnat2bids.cleanup',
      'xnat2bids.verbose',
    ]),

    ...mapMultiRowFields(['xnat2bids.sessions']),

    output_path_validated() {
      if (this.output_path) {
        return this.output_path
      } else {
        return 'MUST ENTER PATH IN FORM'
      }
    },

    sessionDictString() {
      let key = this.sessions[0].participant_id
      if (!key) {
        key = 'MUST ENTER IN FORM'
      }
      let val = this.sessions[0].xnat_id
      if (!val) {
        val = 'MUST ENTER IN FORM'
      }
      const lines = [`declare -A sessions=([${key}]="${val}"`]
      for (let i = 1; i < this.sessions.length; i++) {
        key = this.sessions[i].participant_id
        val = this.sessions[i].xnat_id
        lines.push(`                       [${key}]="${val}"`)
      }
      const dictLine = lines.join(' \\\n')
      return dictLine + ')'
    },

    seriesDictString() {
      let key = this.sessions[0].participant_id
      if (!key) {
        key = 'MUST ENTER IN FORM'
      }
      let sval = this.sessions[0].s_series.join(' -s ')
      sval = sval.length > 0 ? '-s ' + sval : sval

      let ival = this.sessions[0].i_series.join(' -i ')
      ival = ival.length > 0 ? ' -i ' + ival : ival

      const lines = [`declare -A series_map=([${key}]="${sval + ival}"`]
      for (let i = 1; i < this.sessions.length; i++) {
        key = this.sessions[i].participant_id
        sval = this.sessions[i].s_series.join(' -s ')
        sval = sval.length > 0 ? '-s ' + sval : sval
        ival = this.sessions[i].i_series.join(' -i ')
        ival = ival.length > 0 ? ' -i ' + ival : ival
        lines.push(`                         [${key}]="${sval + ival}"`)
      }
      const dictLine = lines.join(' \\\n')
      return dictLine + ')'
    },

    singularityString() {
      const lines = ['singularity exec']
      lines.push(`    -B \${output_dir}`)
      if (this.needs_bidsmap) {
        lines.push(`    -B \${bidsmap_dir}:/bidsmaps:ro`)
      }
      lines.push(`    \${simg}`)
      lines.push(`    xnat2bids \${XNAT_SESSION} \${output_dir}`)
      lines.push(`    -u \${XNAT_USER}}`)
      lines.push(`    -p \${XNAT_PASSWORD}`)
      if (this.needs_bidsmap) {
        lines.push(`    -f /bidsmaps/\${bidsmap_file}`)
      }
      if (this.overwrite) {
        lines.push(`    --overwrite`)
      }
      if (this.verbose) {
        lines.push(`    -v -v`)
      }
      if (this.cleanup) {
        lines.push(`    --cleanup`)
      }
      if (this.seriesDictString.split('=')[2] !== `"")`) {
        console.log(this.seriesDictString.split('='))
        console.log(this.seriesDictString)

        lines.push(`    \${INCLUDE_SKIP_STRING}`)
      }
      return lines.join(' \\\n')
    },
  },
}
</script>
