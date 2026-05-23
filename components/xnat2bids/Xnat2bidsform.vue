<template>
  <div>
    <vue-form-json-schema
      v-model="xnat2bids"
      :schema="schema"
      :ui-schema="uiSchema"
    ></vue-form-json-schema>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import VueFormJsonSchema from 'vue-form-json-schema'
import Xnat2BidsUISchema from '~/data/xnat2bids_ui_schema.json'
import Xnat2BidsSchema from '~/data/basejob_schema.json'

export default {
  components: {
    'vue-form-json-schema': VueFormJsonSchema,
  },
  data() {
    return {
      isOpen: 0,
      schema: Xnat2BidsSchema,
      uiSchema: Xnat2BidsUISchema,
    }
  },
  computed: {
    ...mapFields(['xnat2bids']),
  },
}
</script>
