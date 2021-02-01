<template>
  <div>
    <div class="columns">
      <div class="column column-left">
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :key="1"
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
          <Basejobform sbatch-index="1" />
        </b-collapse>
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :key="2"
          :open="true"
        >
          <div
            slot="trigger"
            class="panel-heading level"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong class="level-left">BIDS Validator Configuration</strong>
          </div>
          <Bidsvalidatorform />
        </b-collapse>
      </div>
      <div class="column column-right"><Bidsvalidatorsbatch /></div>
    </div>
  </div>
</template>

<script>
import Basejobform from '~/components/basejob/Basejobform.vue'
import Bidsvalidatorsbatch from '~/components/bidsvalidator/Bidsvalidatorsbatch.vue'
import Bidsvalidatorform from '~/components/bidsvalidator/Bidsvalidatorform.vue'

export default {
  components: {
    Basejobform,
    Bidsvalidatorsbatch,
    Bidsvalidatorform,
  },
}
</script>

<!-- Add ",
    Bidsvalidatorformscoped" attribute to limit CSS to this component only -->
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
