<template>
  <div>
    <Navbar />
    <Basejobform />
    <Sbatchscript partition="CPU" :jobname="jobname" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({ jobname: 'getJobName' }),
  },
}
</script>
