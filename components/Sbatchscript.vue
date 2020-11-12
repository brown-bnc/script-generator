<template>
  <pre>
    <code v-highlight class="bash">#SBATCH {{partition}} {{jobName}}</code>
  </pre>
</template>

<script>
export default {
  props: {
    partition: {
      type: String,
      required: true,
    },
    jobName: {
      type: String,
      required: true,
    },
  },
}
</script>
