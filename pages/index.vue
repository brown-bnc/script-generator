<template>
  <div>
    <DNavbar variant="light">
      <template v-slot:brand>
        <a
          class="navbar-item"
          href="https://brown.edu"
          aria-label="Brown's Home"
        >
          <BrownLogo class="d-nav-brand" size="l" />
        </a>
        <a
          class="navbar-item navbar-header-end"
          href="https://ccv.brown.edu"
          aria-label="CCV's Home"
        >
          <CCVLogo class="d-nav-brand" size="m" />
        </a>
      </template>
      <template v-slot:start>
        <li tabindex="0" class="navbar-item page-name">
          <h2>OSCAR'S SBATCH SCRIPT GENERATOR</h2>
        </li>
      </template>
    </DNavbar>
    <Basejobform />
  </div>
</template>

<script>
import { DNavbar, BrownLogo, CCVLogo } from '@brown-ccv/disco-vue-components'
import Basejobform from '~/components/Basejobform.vue'
export default {
  components: {
    DNavbar,
    BrownLogo,
    CCVLogo,
    Basejobform,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-name {
  padding-left: 40px;
}
.navbar-header-end {
  padding-right: 40px;
  border-right: 1px solid grey;
}
</style>
