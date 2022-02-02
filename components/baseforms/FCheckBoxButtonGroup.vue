<template>
  <b-field>
    <template v-if="label" #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <div v-for="(item, index) in items" :key="index">
      <b-checkbox-button
        :value="value"
        :native-value="item"
        type="is-link"
        @input="updateValue(index)"
      >
        <span>{{ item }}</span>
      </b-checkbox-button>
    </div>
  </b-field>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
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
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateValue(index) {
      const i = this.value.indexOf(this.items[index])
      if (i > -1) {
        this.$emit(
          'input',
          this.value.filter((item) => item !== this.items[index])
        )
      } else {
        this.$emit('input', this.value.concat(this.items[index]))
      }
    },
  },
}
</script>
