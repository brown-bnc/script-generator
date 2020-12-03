<template>
  <div>
    <Navbar />
    <Hero />
    <Overview v-if="this.active_nav == 'overview'" />
    <Xnat2bids v-if="this.active_nav == 'xnat2bids'" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Overview from '~/components/Overview.vue'
import Xnat2bids from '~/components/Xnat2bids.vue'

export default {
  components: {
    Navbar,
    Hero,
    Overview,
    Xnat2bids,
  },
  computed: {
    active_nav() {
      return this.$store.state.navigation.active_nav
    },
  },
}
</script>
