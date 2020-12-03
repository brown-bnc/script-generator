<template>
  <div>
    <Navbar />
    <Hero />
    <Overview />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Overview from '~/components/Overview.vue'

export default {
  components: {
    Navbar,
    Hero,
    Overview,
  },
}
</script>
