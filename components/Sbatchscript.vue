<template>
  <div>
    <prism :key="prismKey" lang="bash">
      {{ batchScpript }}
    </prism>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      prismKey: 'prism',
    }
  },
  computed: {
    batchScpript() {
      const script = ['##### SBATCH SCRIPT ######']
      if (this.jobname) script.push(`#SBATCH --jobname ${this.jobname}`)
      if (this.partition) script.push(`#SBATCH --partition ${this.partition}`)
      // TODO: Add other lines here
      return script.join('\n')
    },
  },
  watch: {
    batchScpript() {
      this.updateKey()
    },
  },
  methods: {
    updateKey() {
      this.prismKey = 'prism' + Math.floor(Math.random() * 100 + 1)
    },
  },
}
</script>
