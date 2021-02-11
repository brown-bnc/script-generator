<template>
  <fragment>
    <pre>
    #!/bin/bash
    <fragment v-if="sbatch[sbatchIndex].jobname">#SBATCH --job-name {{ sbatch[sbatchIndex].jobname }} </fragment>
    <fragment v-if="sbatch[sbatchIndex].partition">#SBATCH --partition {{ sbatch[sbatchIndex].partition }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].condo">#SBATCH --account {{ sbatch[sbatchIndex].condo }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].nnodes">#SBATCH --nodes {{ sbatch[sbatchIndex].nnodes }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].ncpus">#SBATCH --cpus-per-task {{ sbatch[sbatchIndex].ncpus }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].memory">#SBATCH --mem {{ sbatch[sbatchIndex].memory }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].time">#SBATCH --time {{ timeString }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].output">#SBATCH --output {{ sbatch[sbatchIndex].output }}</fragment>
    <fragment v-if="sbatch[sbatchIndex].emailevents.length > 0">
    #SBATCH --mail-type {{ emailEventString }} 
    </fragment>
    <fragment v-if="sbatch[sbatchIndex].email">#SBATCH --mail-user {{ sbatch[sbatchIndex].email }}</fragment>
    <fragment v-if="arrayJobString">#SBATCH --array={{arrayJobString}}</fragment>
    </pre>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapState } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  props: {
    sbatchIndex: {
      type: Number,
      required: true,
      validator: (value) => [0, 1].includes(value),
    },
    arrayJobString: {
      type: String,
      required: false,
      default: null,
    },
  },
  components: {
    Fragment,
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
        String(this.sbatch[this.sbatchIndex].time.hours) +
        ':' +
        String(this.sbatch[this.sbatchIndex].time.minutes).padStart(2, '0') +
        ':' +
        String(this.sbatch[this.sbatchIndex].time.seconds).padStart(2, '0')
      )
    },
    emailEventString() {
      console.log(this.sbatch[this.sbatchIndex].emailevents)
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
