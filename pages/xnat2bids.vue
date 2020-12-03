<template>
  <div>
    <Navbar />
    <Hero />
    <div class="columns">
      <div class="column">
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
      <div class="column"><Sbatchscript /></div>
    </div>
  </div>
</template>

<script>
import Basejobform from '~/components/Basejobform.vue'
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'

import Sbatchscript from '~/components/Sbatchscript.vue'

export default {
  components: {
    Navbar,
    Hero,
    Basejobform,
    Sbatchscript,
  },
}
</script>
