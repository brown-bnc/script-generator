<template>
  <b-field>
    <template #label>
      {{ label }}
      <b-tooltip type="is-light" :label="info">
        <b-icon size="is-small" pack="fa" icon="info-circle"></b-icon>
      </b-tooltip>
    </template>
    <div v-for="(item, index) in items" :key="index" class="content">
      <b-radio-button
        :value="value"
        @input="$emit('input', $event)"
        :native-value="item"
        type="is-link"
      >
        <span>{{ item }}</span>
      </b-radio-button>
    </div>
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'info', 'items'],
}
</script>
