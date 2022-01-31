<template>
  <b-field grouped group-multiline>
    <template #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <div v-for="(val, index) in value" :key="index" class="content">
      <b-numberinput
        :value="value[index]"
        @input="updateValue(index, $event)"
        :min="ranges[index][0]"
        :max="ranges[index][1]"
        class="mr-2"
      ></b-numberinput>
    </div>
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'info', 'ranges'],
  methods: {
    updateValue(index, val) {
      this.value[index] = val
      this.$emit('input', this.value)
    },
  },
}
</script>
