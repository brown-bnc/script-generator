<template>
  <b-field>
    <template #label>
      {{ label }}
      <FInfoToolTip :info="info" />
    </template>
    <div v-for="(item, index) in items" :key="index">
      <b-radio-button
        :value="value"
        :native-value="item"
        type="is-link"
        @input="$emit('f-input', $event)"
      >
        <span>{{ item }}</span>
      </b-radio-button>
    </div>
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
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
