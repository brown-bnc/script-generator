<template>
  <prism lang="bash" :key="jobname">
    <pre>
     <fragment v-if="jobname">#SBATCH --jobname {{ jobname }}</fragment>
     <fragment v-if="partition">#SBATCH --partition {{ partition }}</fragment>
     <fragment v-if="email">#SBATCH --email {{ email }}</fragment>
     <fragment v-if="emailevent">#SBATCH --emailevent {{ emailevent }}</fragment>
     <fragment v-if="nnodes">#SBATCH --nnodes {{ nnodes }}</fragment>
     <fragment v-if="nprocesses">#SBATCH --nprocesses {{ nprocesses }}</fragment>
     <fragment v-if="memory">#SBATCH --memory {{ memory }}</fragment>
    </pre>
  </prism>
</template>

<script>
import { mapState } from 'vuex'
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment,
  },
  computed: mapState([
    'jobname',
    'partition',
    'email',
    'emailevent',
    'nnodes',
    'nprocesses',
    'memory',
  ]),
}
</script>
