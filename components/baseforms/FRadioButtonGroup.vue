<template>
  <b-field>
    <template #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <div v-for="(item, index) in items" :key="index">
      <b-radio-button
        :value="value"
        :native-value="item"
        type="is-link"
        @input="$emit('input', $event)"
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
