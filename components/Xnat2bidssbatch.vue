<template>
  <div>
    <div
      slot="trigger"
      class="panel-heading"
      role="button"
      aria-controls="contentIdForA11y2"
    >
      <strong>Oscar Sbatch Script</strong>
    </div>
    <div class="panel-block custom-pad">
      <prism :key="sbatchCodeKey" lang="bash" class="custom-pad">
        <Basejobfragment />
        <Xnat2bidsfragment />
      </prism>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Basejobfragment from '~/components/Basejobfragment.vue'
import Xnat2bidsfragment from '~/components/Xnat2bidsfragment.vue'

export default {
  components: {
    Xnat2bidsfragment,
    Basejobfragment,
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
