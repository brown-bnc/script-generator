<template>
  <fragment>
    <pre>
    #!/bin/bash
    <fragment v-if="sbatch[sbatchIndex].jobname">#SBATCH --job-name {{ sbatch[sbatchIndex].jobname }} </fragment>
    <fragment >#SBATCH --partition {{ sbatch[sbatchIndex].partition }}</fragment>
    <fragment >#SBATCH --nodes {{ sbatch[sbatchIndex].nnodes }} </fragment>
    <fragment >#SBATCH --cpus-per-task {{ sbatch[sbatchIndex].ncpus }} </fragment>
    <fragment >#SBATCH --mem {{ sbatch[sbatchIndex].memory }} </fragment>
    <fragment >#SBATCH --time {{ timeString }} </fragment>
    <fragment v-if="sbatch[sbatchIndex].output">#SBATCH --output {{ sbatch[sbatchIndex].output }} </fragment>
    <fragment v-if="sbatch[sbatchIndex].emailevents.length > 0">
    #SBATCH --mail-type {{ emailEventString }} 
    </fragment>
    <fragment v-if="sbatch[sbatchIndex].email">#SBATCH --mail-user {{ sbatch[sbatchIndex].email }} </fragment>
    </pre>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapState } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  components: {
    Fragment,
  },
  props: {
    sbatchIndex: {
      type: Number,
      required: true,
      validator: (value) => [0, 1].includes(value),
    },
  },
  computed: {
    ...mapMultiRowFields(['sbatch']),
    ...mapState(['navigation.active_nav']),
    active_id() {
      if (this.active_nav === 'xnat2bids') {
        return 0
      }
      if (this.active_nav === 'bids-validator') {
        return 1
      }
      return 0
    },
    timeString() {
      return (
        String(this.sbatch[this.sbatchIndex].hours) +
        ':' +
        String(this.sbatch[this.sbatchIndex].minutes).padStart(2, '0') +
        ':' +
        String(this.sbatch[this.sbatchIndex].seconds).padStart(2, '0')
      )
    },
    emailEventString() {
      if (this.sbatch[this.sbatchIndex].emailevents.includes('ALL')) {
        return 'ALL'
      } else {
        return this.sbatch[this.sbatchIndex].emailevents.join(', ')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-pad {
  padding: 0;
  margin: 0 auto;
}
</style>
