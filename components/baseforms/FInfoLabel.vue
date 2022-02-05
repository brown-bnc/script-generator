<template>
  <!-- <template #label>
    {{ label }} -->
  <b-tooltip type="is-light" :label="info">
    <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
  </b-tooltip>
  <!-- </template> -->
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    info: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
