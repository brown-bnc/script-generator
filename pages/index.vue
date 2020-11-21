<template>
  <div>
    <Navbar />
    <Basejobform />
    <Sbatchscript />
  </div>
</template>

<script>
import Basejobform from '~/components/Basejobform.vue'
import Navbar from '~/components/Navbar.vue'
import Sbatchscript from '~/components/Sbatchscript.vue'

export default {
  components: {
    Navbar,
    Basejobform,
    Sbatchscript,
  },
}
</script>
