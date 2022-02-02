<template>
  <b-field label="Email Event">
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
  props: ['value', 'label', 'info', 'items'],
  methods: {
    updateValue(index) {
      const i = this.value.indexOf(this.items[index])
      console.log(i)
      console.log(index)
      if (i > -1) {
        console.log('splicing')
        this.$emit(
          'input',
          this.value.filter((item) => item !== this.items[index])
        )
        console.log(this.value)
      } else {
        console.log('concat')
        this.$emit('input', this.value.concat(this.items[index]))
        console.log(this.value)
      }
    },
  },
}
</script>
