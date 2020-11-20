<template>
  <div>
    <code>
      <pre class="language-bash">
      <fragment v-if="jobname">#SBATCH --jobname {{ jobname }}</fragment>
      <fragment v-if="partition">#SBATCH --partition {{ partition }}</fragment>
    </pre>
    </code>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'
export default {
  components: {
    Fragment,
  },
  props: {
    partition: {
      type: String,
      required: true,
    },
    jobname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      default: null,
    },
    emailevent: {
      type: String,
      required: false,
      default: null,
    },
    nnodes: {
      type: Number,
      required: false,
      default: null,
    },
    nprocesses: {
      type: Number,
      required: false,
      default: null,
    },
    memory: {
      type: Number,
      required: false,
      default: null,
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
