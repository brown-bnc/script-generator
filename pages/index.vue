<template>
  <div>
    <Navbar />
    <Hero />
    <div v-if="this.active_nav == 'overview'" class="container">
      <Overview />
    </div>
    <div v-if="this.active_nav == 'xnat2bids'" class="container">
      <Xnat2bids />
    </div>
    <div class="extrapad has-text-centered">
      <p>Made with love by <a href="ccv.brown.edu"> CCV </a></p>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Overview from '~/components/Overview.vue'
import Xnat2bids from '~/components/Xnat2bids.vue'
import 'vue-made-with-love'
import 'vue-made-with-love/dist/vue-made-with-love.css'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.extrapad {
  padding-top: 50px;
}
</style>
