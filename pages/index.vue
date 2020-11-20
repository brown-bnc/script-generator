<template>
  <div>
    <Navbar />
    <main class="container mt-6">
      <Basejobform />
      <Sbatchscript :partition="partition" :jobname="job_name" />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState(['job_name', 'partition']),
  },
}
</script>
