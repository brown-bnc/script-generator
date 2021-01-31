<template>
  <fragment>
    <pre>
    <fragment>
    # Tell bash to complaint if we have undefined variables 
    set -u 
    
    # Version of bids-validator being used
    version={{ version }}
    # Path to Singularity Image for xnat-tools (maintained by bnc)
    simg=/gpfs/data/bnc/simgs/bids/bids-validator-${version}.sif
    
    #--------- directories ---------
    bids_directory={{ bids_dir }}
    #--------- Run bids-validator ---------
    # Runs singularity command to 
    # execute bids-validator. 
    # It will test if the directory is BIDS compliant.
    # The command tells singularity to launch 
    # validator-${version}.sif image,
    # execute the bids-validator command. 
    # The bids validator expects the a directory as an input, 
    # which in this case corresponds to ${bids_directory}. 
    # The -B ${bids_dir} makes the bids directory available 
    # to the singularity container.  
    # The file system inside your container is not the same as in Oscar, 
    # unless you bind the paths. 
    # We are binding the bids directory as read only
    # Singularity by default also binds your home and /tmp

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
      'bidsvalidator.version',
      'bidsvalidator.bids_dir',
      'bidsvalidator.ignore_warnings',
      'bidsvalidator.ignore_nifti_headers',
      'bidsvalidator.ignore_subject_consistency',
      'bidsvalidator.json',
      'bidsvalidator.verbose',
    ]),

    ...mapMultiRowFields(['xnat2bids.sessions']),

    sessionDictString() {
      let key = this.sessions[0].participant_id
      let val = this.sessions[0].xnat_id
      const lines = [`declare -A sessions=([${key}]="${val}"`]
      for (let i = 1; i < this.sessions.length; i++) {
        key = this.sessions[i].participant_id
        val = this.sessions[i].xnat_id
        lines.push(`                       [${key}]="${val}"`)
      }
      const dictLine = lines.join(' \\\n')
      return dictLine + ')'
    },

    singularityString() {
      const lines = ['singularity exec']
      lines.push(`    -B \${bids_directory}:\${bids_directory}:ro`)
      lines.push(`    \${simg}`)
      lines.push(`    bids-validator \${bids_directory}`)
      if (this.ignore_warnings) {
        lines.push(`    --ignoreWarnings`)
      }
      if (this.ignore_nifti_headers) {
        lines.push(`    --ignoreNiftiHeaders`)
      }
      if (this.ignore_subject_consistency) {
        lines.push(`    --ignoreSubjectConsistency`)
      }
      if (this.verbose) {
        lines.push(`    --verbose`)
      }
      if (this.json) {
        lines.push(`    --json`)
      }
      return lines.join(' \\\n')
    },
  },
}
</script>
