<template>
  <div>
    <div class="columns">
      <div class="column column-left">
        <b-collapse
          :key="1"
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :open="true"
        >
          <div
            slot="trigger"
            class="panel-heading level"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong class="level-left">SBATCH Configuration</strong>
          </div>
          <Basejobform :sbatch-index="0" />
        </b-collapse>
        <b-collapse
          :key="2"
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :open="true"
        >
          <div
            slot="trigger"
            class="panel-heading level"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong class="level-left">XNAT2BIDS Configuration</strong>
          </div>
          <Xnat2bidsform />
        </b-collapse>
      </div>
      <div class="column column-right"><Xnat2bidssbatch /></div>
    </div>
  </div>
</template>

<script>
import Basejobform from '~/components/basejob/Basejobform.vue'
import Xnat2bidsform from '~/components/xnat2bids/Xnat2bidsform.vue'
import Xnat2bidssbatch from '~/components/xnat2bids/Xnat2bidssbatch.vue'

export default {
  components: {
    Basejobform,
    Xnat2bidssbatch,
    Xnat2bidsform,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column-left {
  /* padding-right: 0; */
  padding-bottom: 0;
  padding-top: 40;
}
.column-right {
  /* padding-left: 0; */
  padding-bottom: 0;
  padding-top: 40;
}
</style>
