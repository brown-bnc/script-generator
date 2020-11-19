<template>
  <pre>
    <code v-highlight>#SBATCH {{partition}} {{jobname}} {{this.jobname2}}</code>
    <h1> {{jobname}} </h1>
  </pre>
</template>

<script>
export default {
  data() {
    return {
      jobname2: 'hi',
    }
  },
  props: {
    partition: {
      type: String,
      required: true,
    },
    jobname: {
      required: true,
    },
  },
  watch: {
    // This would be called anytime the value of title changes
    jobname(newValue, oldValue) {
      console.log(newValue)
      this.jobname2 = newValue
      // you can do anything here with the new value or old/previous value
    },
  },
}
</script>
