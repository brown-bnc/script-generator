<template>
  <fragment>
    <pre>
    #!/bin/bash
    <fragment v-if="sbatch[active_id].jobname">#SBATCH --job-name {{ sbatch[0].jobname }} </fragment>
    <fragment v-if="sbatch[0].partition">#SBATCH --partition {{ sbatch[0].partition }}</fragment>
    <fragment v-if="sbatch[0].nnodes">#SBATCH --nodes {{ sbatch[0].nnodes }} </fragment>
    <fragment v-if="sbatch[0].ncpus">#SBATCH --cpus-per-task {{ sbatch[0].ncpus }} </fragment>
    <fragment v-if="sbatch[0].memory">#SBATCH --mem {{ sbatch[0].memory }} </fragment>
    <!-- <fragment v-if="sbatch[0].time">#SBATCH --time {{ sbatch[0].timeString }} </fragment> -->
    <fragment v-if="sbatch[0].output">#SBATCH --output {{ sbatch[0].output }} </fragment>
    <!-- <fragment v-if="sbatch[0].emailevents.length > 0" -->
      <!-- >#SBATCH --mail-type {{ sbatch[0].emailEventString }} -->
    <!-- </fragment> -->
    <fragment v-if="sbatch[0].email">#SBATCH --mail-user {{ sbatch[0].email }} </fragment>
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
    // timeString() {
    //   return (
    //     String(this.time.hours) +
    //     ':' +
    //     String(this.time.minutes).padStart(2, '0') +
    //     ':' +
    //     String(this.time.seconds).padStart(2, '0')
    //   )
    // },
    // emailEventString() {
    //   console.log(this.emailevents)
    //   if (this.emailevents.includes('ALL')) {
    //     return 'ALL'
    //   } else {
    //     return this.emailevents.join(', ')
    //   }
    // },
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
