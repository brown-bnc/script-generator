<template>
  <div>
    <DNavbar variant="light">
      <template v-slot:brand>
        <a
          class="navbar-item navbar-header-end"
          href="https://brown.edu"
          aria-label="Brown's Home"
        >
          <BrownLogo class="d-nav-brand" size="l" />
        </a>
      </template>
      <template v-slot:start>
        <b-navbar-item size="large">
          <p class="custom-size">Behavioral Neuroimaging Core</p>
        </b-navbar-item>
      </template>
      <template v-slot:end>
        <b-navbar-item>
          <a href="https://www.brown.edu/carney/mri">MRF Facility</a>
        </b-navbar-item>
        <b-navbar-item>
          <a href="https://www.brown.edu/carney">Carney</a>
        </b-navbar-item>
      </template>
    </DNavbar>
  </div>
</template>

<script>
import { DNavbar, BrownLogo } from '@brown-ccv/disco-vue-components'

export default {
  components: {
    DNavbar,
    BrownLogo,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-name {
  padding-left: 40px;
}
.navbar-header-end {
  padding-right: 20px;
  border-right: 1px solid grey;
}
.custom-size {
  font-size: 20px;
  padding-left: 10px;
}
</style>
