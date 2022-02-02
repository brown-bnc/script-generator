<template>
  <b-field grouped group-multiline>
    <template #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <b-numberinput
      :value="value"
      :min="range[0]"
      :max="range[1]"
      class="mr-2"
      @input="$emit('input', $event)"
    ></b-numberinput>
  </b-field>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    range: {
      type: Array,
      required: true,
    },
  },
}
</script>
