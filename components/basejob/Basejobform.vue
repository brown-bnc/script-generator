<template>
  <div>
    <vue-form-json-schema
      v-model="sbatchBaseVals[sbatchIndex]"
      :schema="schema"
      :ui-schema="uiSchema"
    ></vue-form-json-schema>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import VueFormJsonSchema from 'vue-form-json-schema/dist/vue-form-json-schema.esm.js'
import baseJobUISchema from '~/data/basejob_ui_schema.json'
import baseJobSchema from '~/data/basejob_schema.json'

export default {
  components: {
    'vue-form-json-schema': VueFormJsonSchema,
  },
  props: {
    sbatchIndex: {
      type: Number,
      required: true,
      validator: (value) => [0, 1].includes(value),
    },
  },
  data() {
    return {
      allEmailEvents: 0,
      isOpen: 0,
      state: {},
      schema: baseJobSchema,
      uiSchema: baseJobUISchema,
    }
  },
  computed: {
    ...mapFields({ sbatchBaseVals: 'sbatch' }),
  },
}
</script>
