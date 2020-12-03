<template>
  <div>
    <div class="columns">
      <div class="column column-left">
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          v-model="isOpen"
        >
          <div
            slot="trigger"
            class="panel-heading"
            role="button"
            aria-controls="contentIdForA11y2"
          >
            <strong>SBATCH Configuration</strong>
          </div>
          <Basejobform />
        </b-collapse>
      </div>
      <div class="column column-right"><Sbatchscript /></div>
    </div>
  </div>
</template>

<script>
import Basejobform from '~/components/Basejobform.vue'

import Sbatchscript from '~/components/Sbatchscript.vue'

export default {
  components: {
    Basejobform,
    Sbatchscript,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column-left {
  padding-right: 0;
}
.column-right {
  padding-left: 0;
}
</style>
