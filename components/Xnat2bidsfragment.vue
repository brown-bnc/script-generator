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
    simg=/gpfs/data/bnc/simgs/brownbnc/xnat-tools-{{ version }}.sif
    
    #--------- directories ---------

    # Output directory
    output_dir={{output_path}}
    mkdir -m 775 ${output_dir} || echo "Output directory already exists"
    </fragment>
    <fragment v-if=needs_bidsmap>
    # The bidsmap file for your study lives under ${bidsmap_dir}/${bidsmap_file}
    bidsmap_dir={{ bidsmapdirectory }}
    bidsmap_file={ bidsmapfile }
    tmp_dir=/gpfs/scratch/$USER/xnat2bids

    mkdir -m 775 ${tmp_dir} || echo "Temp directory already exists"
    </fragment>
    <fragment>
    #----------- Dictionaries for subject specific variables -----
    # Dictionary of sessions to subject
    declare -A sessions=([137]="XNAT3_E00035" \
                        [135]="XNAT3_E00013")

    # Dictionary of series to skip per subject
    declare -A skip_map=([137]="-s 6 -s 15 -s 16 -s 17 -s 18" \
                        [135]="-s 6 -s 8 -s 15 -s 16 -s 17 -s 18")

    # Use the task array ID to get the right value for this job
    XNAT_SESSION=${sessions[${SLURM_ARRAY_TASK_ID}]}
    SKIP_STRING=${skip_map[${SLURM_ARRAY_TASK_ID}]}

    echo "Processing session:"
    echo ${XNAT_SESSION}
    echo "Series to skip:"
    echo ${SKIP_STRING}
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
      'xnat2bids.bidsmap_directory',
      'xnat2bids.bidsmap_file',
      'xnat2bids.overwrite',
      'xnat2bids.cleanup',
    ]),
    ...mapMultiRowFields(['xnat2bids.session']),
  },
}
</script>
