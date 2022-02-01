<template v-for="(slotName, index) in slotNames" :key="slotName">
  <Fcollabsablecard :title="titles[0]" :index="0" :openidx="0" :key="slotName">
    <slot name="content" />
  </Fcollabsablecard>
</template>

<script>
export default {
  props: ['slotNames', 'titles'],
  data() {
    return {
      isOpen: 0,
    }
  },
}
</script>
