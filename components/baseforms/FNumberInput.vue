<template>
  <b-field grouped group-multiline>
    <template #label>
      {{ label }}
      <FInfoToolTip :info="info" />
    </template>
    <b-numberinput
      :value="value"
      :min="range[0]"
      :max="range[1]"
      class="mr-2"
      @input="$emit('f-input', $event)"
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
