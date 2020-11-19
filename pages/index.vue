<template>
  <div>
    <Navbar />
    <Basejobform />
    <Sbatchscript partition="CPU" :jobname="jobname" />
    {{ jobname }}
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
  computed: {
    jobname() {
      return this.$store.getters.getJobName
    },
  },
}
</script>
