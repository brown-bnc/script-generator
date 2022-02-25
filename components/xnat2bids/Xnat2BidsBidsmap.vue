<template>
  <fragment>
    <b-field>
      <b-switch
        v-model="value.required"
        type="is-info"
        @input="updateValue('required', $event)"
        >Needs bidsmap file</b-switch
      >
    </b-field>
    <b-field
      v-if="value.required"
      label="Directory containing the bidsmap file"
    >
      <b-input
        v-model="value.dir"
        @input="updateValue('dir', $event)"
      ></b-input>
    </b-field>
    <b-field v-if="value.required" label="Bidsmap file">
      <b-input
        v-model="value.file"
        @input="updateValue('file', $event)"
      ></b-input>
    </b-field>
  </fragment>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateValue(key, val) {
      this.value[key] = val
      this.$emit('f-bidsmap', this.value)
    },
  },
}
</script>
