<template>
  <prism :key="sbatchCodeKey" lang="bash">
    <pre>
    #!/bin/bash
    <fragment v-if="jobname">#SBATCH --job-name {{ jobname }} </fragment>
    <fragment v-if="partition">#SBATCH --partition {{ partition }}</fragment>
    <fragment v-if="nnodes">#SBATCH --nodes {{ nnodes }} </fragment>
    <fragment v-if="ncpus">#SBATCH --cpus-per-task {{ ncpus }} </fragment>
    <fragment v-if="memory">#SBATCH --mem {{ memory }} </fragment>
    <fragment v-if="time">#SBATCH --time {{ time }} </fragment>
    <fragment v-if="output">#SBATCH --output {{ output }} </fragment>
    <fragment v-if="email">#SBATCH --mail-user {{ email }} </fragment>
    <fragment v-if="emailevent">#SBATCH --mail-type {{ emailevent }} </fragment>
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
      'emailevent',
    ]),
    batchKey() {
      return (
        this.jobname +
        this.partition +
        this.nnodes +
        this.ncpus +
        this.memory +
        this.time +
        this.output +
        this.email +
        this.emailevent
      )
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
