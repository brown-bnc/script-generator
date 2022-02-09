<template>
  <b-tooltip type="is-light" :label="info">
    <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
  </b-tooltip>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
