<template>
  <b-field :label="label">
    <b-input :value="value" @input="$emit('input', $event)"></b-input>
    <!-- <b-input v-bind="$attrs" v-on="$listeners"></b-input> -->
  </b-field>
</template>

<script>
export default {
  props: ['label', 'value'],
}
</script>
