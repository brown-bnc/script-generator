<template>
  <b-field grouped group-multiline>
    <template #label>
      {{ label }}
      <FInfoToolTip :info="info" />
    </template>
    <div v-for="(val, index) in value" :key="index" class="content">
      <b-numberinput
        :value="value[index]"
        :min="ranges[index][0]"
        :max="ranges[index][1]"
        class="mr-2"
        @input="updateValue(index, $event)"
      ></b-numberinput>
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
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    ranges: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateValue(index, val) {
      this.value[index] = val
      this.$emit('f-input', this.value)
    },
  },
}
</script>
