<template>
  <div>
    <BrownLogo role="img" aria-hidden="true" :class="size" />
  </div>
</template>

<script>
import BrownLogo from '@/assets/brown-logo.vue'

export default {
  components: {
    BrownLogo,
  },
  props: {
    size: {
      type: String,
      default: 'l',
      validator(value) {
        // The value must match one of these strings
        return ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value)
      },
    },
  },
}
</script>

<style lang="sass" scoped>
.brown-logo
    margin-left: 1rem
    padding: 0.2rem
    height: 3rem
    .st0
        display: none
    .st1
        display: inline
        stroke: #000
        stroke-width: 0.75
        stroke-miterlimit: 10
    .st2
        stroke: #000
        stroke-width: 0.75
        stroke-miterlimit: 10
    .st3
        fill: #FFF
    .st4
        fill: #ED1C24
</style>
