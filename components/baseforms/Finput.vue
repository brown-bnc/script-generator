<template>
  <b-field>
    <template v-if="label" #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <b-input
      v-bind="optionalProps"
      :value="value"
      @input="$emit('input', $event)"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'info', 'placeholder', 'type', 'icon'],
  computed: {
    optionalProps() {
      const optProps = {}
      this.placeholder && (optProps.placeholder = this.placeholder)
      this.type && (optProps.type = this.type)
      this.icon && (optProps.icon = this.icon)
      return optProps
    },
  },
}
</script>
