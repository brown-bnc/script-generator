<template>
  <div>
    <pre>
    <code>
        <fragment v-if="jobname">1. Array {{jobname}}</fragment>
        <fragment>2. Extra tag method</fragment>
        <fragment>3. fragments</fragment>
    </code>
  </pre>
    <prism lang="bash"> a=1 </prism>
  </div>
</template>

<script>
// import { component as VueCodeHighlight } from 'vue-code-highlight'
import { Fragment } from 'vue-fragment'

export default {
  components: {
    Fragment,
    // VueCodeHighlight,
  },
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
