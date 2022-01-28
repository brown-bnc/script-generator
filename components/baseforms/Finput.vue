<template>
  <b-field>
    <template #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <b-input :value="value" @input="$emit('input', $event)"></b-input>
    <!-- Not passing value initialy? -->
    <!-- <b-input v-bind="$attrs" v-on="$listeners"></b-input> -->
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'info'],
}
</script>
