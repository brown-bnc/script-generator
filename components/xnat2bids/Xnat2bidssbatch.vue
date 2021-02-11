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
      <prism :key="sbatchCodeKey" lang="bash">
        <Basejobfragment
          sbatch-index="0"
          v-bind:array-job-string="arrayJobString"
        />
        <Xnat2bidsfragment />
      </prism>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields'
import Basejobfragment from '~/components/basejob/Basejobfragment.vue'
import Xnat2bidsfragment from '~/components/xnat2bids/Xnat2bidsfragment.vue'

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
    ...mapState({
      sbatch: 'sbatch',
      xnat2bids: 'xnat2bids',
    }),
    batchKey() {
      let finalString = JSON.stringify(this.sbatch[0])
      finalString += JSON.stringify(this.xnat2bids)
      return finalString
    },
    ...mapMultiRowFields(['xnat2bids.sessions']),

    arrayJobString() {
      const key = this.sessions[0].participant_id
      const jobArray = []
      if (!key) {
        return null
      }
      jobArray.push(key)

      for (let i = 1; i < this.sessions.length; i++) {
        jobArray.push(this.sessions[i].participant_id)
      }
      return jobArray.join(',')
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
