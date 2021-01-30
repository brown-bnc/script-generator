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
    ...mapState({
      sbatch: 'sbatch',
      xnat2bids: 'xnat2bids',
    }),
    batchKey() {
      let finalString = JSON.stringify(this.sbatch[0])
      finalString += JSON.stringify(this.xnat2bids)
      return finalString
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
      console.log(this.sbatchCodeKey)
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
