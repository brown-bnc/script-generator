<template>
  <b-field v-bind="fieldProps">
    <template v-if="label" #label>
      {{ label }}
      <FInfoToolTip :info="info" />
    </template>
    <b-input
      v-bind="optionalProps"
      :value="value"
      @input="$emit('f-input', $event)"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
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
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    fieldType: {
      type: String,
      required: false,
      default: null,
    },
    fieldMessage: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    optionalProps() {
      const optProps = {}
      this.placeholder && (optProps.placeholder = this.placeholder)
      this.type && (optProps.type = this.type)
      this.icon && (optProps.icon = this.icon)
      return optProps
    },
    fieldProps() {
      const optProps = {}
      this.fieldType && (optProps.type = this.fieldType)
      this.fieldMessage && (optProps.message = this.fieldMessage)
      return optProps
    },
  },
}
</script>
