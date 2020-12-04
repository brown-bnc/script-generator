<template>
  <div>
    <div class="columns">
      <div class="column column-left">
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :key="1"
          :open="isOpen == 1"
          @open="isOpen = 1"
        >
          <div
            slot="trigger"
            class="panel-heading level"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong class="level-left">SBATCH Configuration</strong>
            <b-icon
              class="level-left"
              :icon="isOpen == 1 ? 'menu-down' : 'menu-up'"
            >
            </b-icon>
          </div>
          <Basejobform />
        </b-collapse>
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          :key="2"
          :open="isOpen == 2"
          @open="isOpen = 2"
        >
          <div
            slot="trigger"
            class="panel-heading level"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong class="level-left">XNAT2BIDS Configuration</strong>
            <b-icon
              class="level-left"
              :icon="isOpen == 2 ? 'menu-down' : 'menu-up'"
            >
            </b-icon>
          </div>
          <Xnat2bidsform />
        </b-collapse>
      </div>
      <div class="column column-right"><Sbatchscript /></div>
    </div>
  </div>
</template>

<script>
import Basejobform from '~/components/Basejobform.vue'
import Xnat2bidsform from '~/components/Xnat2bidsform.vue'
import Sbatchscript from '~/components/Sbatchscript.vue'

export default {
  components: {
    Basejobform,
    Sbatchscript,
    Xnat2bidsform,
  },
  data() {
    return {
      isOpen: 1,
      isSbatchOpen: false,
      isXnat2bidsOpen: false,
    }
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
