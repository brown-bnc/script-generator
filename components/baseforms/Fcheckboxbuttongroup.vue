<template>
  <b-field label="Email Event">
    <div v-for="(item, index) in items" :key="index">
      <b-checkbox-button
        :value="value[index]"
        @input="updateValue(index, $event)"
        native-value="item"
        type="is-link"
      >
        <span>{{ item }}</span>
      </b-checkbox-button>
    </div>
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'info', 'items'],
  methods: {
    updateValue(index, val) {
      if (val) {
        this.$emit('input', this.value.concat(this.items[index]))
      } else {
        const i = this.value.indexOf(this.items[index])
        if (i > -1) {
          this.value.splice(i, 1)
        }
      }
    },
  },
}
</script>
