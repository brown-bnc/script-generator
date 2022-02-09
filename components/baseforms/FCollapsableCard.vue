<template>
  <b-collapse
    :key="index"
    class="card"
    animation="slide"
    :open="isOpen == index"
    @open="isOpen = index"
  >
    <div slot="trigger" slot-scope="props" class="card-header" role="button">
      <p class="card-header-title">{{ title }}</p>
      <a class="card-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
      </a>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </b-collapse>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    openidx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isOpen: this.openidx,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  background-color: rgba(89, 203, 232, 0.3);
}
</style>
