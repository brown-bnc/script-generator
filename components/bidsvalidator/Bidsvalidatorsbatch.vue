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
        <Basejobfragment sbatch-index="1" />
        <Bidsvalidatorfragment />
      </prism>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Basejobfragment from '~/components/basejob/Basejobfragment.vue'
import Bidsvalidatorfragment from '~/components/bidsvalidator/Bidsvalidatorfragment.vue'

export default {
  components: {
    Bidsvalidatorfragment,
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
      bidsvalidator: 'bidsvalidator',
    }),
    batchKey() {
      let finalString = JSON.stringify(this.sbatch[1])
      finalString += JSON.stringify(this.bidsvalidator)
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
