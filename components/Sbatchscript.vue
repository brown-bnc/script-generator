<template>
  <prism :key="sbatchCodeKey" lang="bash" class="custom-pad">
    <pre>
    #!/bin/bash
    <fragment v-if="jobname">#SBATCH --job-name {{ jobname }} </fragment>
    <fragment v-if="partition">#SBATCH --partition {{ partition }}</fragment>
    <fragment v-if="nnodes">#SBATCH --nodes {{ nnodes }} </fragment>
    <fragment v-if="ncpus">#SBATCH --cpus-per-task {{ ncpus }} </fragment>
    <fragment v-if="memory">#SBATCH --mem {{ memory }} </fragment>
    <fragment v-if="time">#SBATCH --time {{ timeString }} </fragment>
    <fragment v-if="output">#SBATCH --output {{ output }} </fragment>
    <fragment v-if="emailevents.length>0">#SBATCH --mail-type {{ emailEventString }} </fragment>
    <fragment v-if="email">#SBATCH --mail-user {{ email }} </fragment>
  </pre>
  </prism>
</template>

<script>
import { mapState } from 'vuex'
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment,
  },
  data() {
    return {
      sbatchCodeKey: 'prism',
    }
  },
  computed: {
    ...mapState([
      'jobname',
      'partition',
      'nnodes',
      'ncpus',
      'memory',
      'time',
      'output',
      'email',
      'emailevents',
    ]),
    batchKey() {
      return (
        this.jobname +
        this.partition +
        this.nnodes +
        this.ncpus +
        this.memory +
        this.timeString +
        this.output +
        this.email +
        this.emailevents
      )
    },
    timeString() {
      return (
        String(this.time.hours) +
        ':' +
        String(this.time.minutes).padStart(2, '0') +
        ':' +
        String(this.time.seconds).padStart(2, '0')
      )
    },
    emailEventString() {
      console.log(this.emailevents)
      if (this.emailevents.includes('ALL')) {
        return 'ALL'
      } else {
        return this.emailevents.join(', ')
      }
    },
  },
  watch: {
    batchKey() {
      this.updateKey()
    },
  },
  methods: {
    updateKey() {
      this.sbatchCodeKey = 'sbatch_code_' + Math.floor(Math.random() * 100 + 1)
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
