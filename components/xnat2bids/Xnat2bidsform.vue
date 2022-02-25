<template>
  <div>
    <vue-form-json-schema
      v-model="xnat2bids2"
      :schema="schema"
      :ui-schema="uiSchema"
    ></vue-form-json-schema>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
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
    ...mapFields([
      'xnat2bids.version',
      'xnat2bids.output_path',
      'xnat2bids.needs_bidsmap',
      'xnat2bids.bidsmap_dir',
      'xnat2bids.bidsmap_file',
      'xnat2bids.i_series',
      'xnat2bids.s_series',
      'xnat2bids.overwrite',
      'xnat2bids.cleanup',
      'xnat2bids.verbose',
      'xnat2bids2',
    ]),
    ...mapMultiRowFields(['xnat2bids.sessions']),
  },
  methods: {
    ...mapMutations({
      addSession: 'xnat2bids/addSession',
      removeSession: 'xnat2bids/popSession',
      addSession2: 'xnat2bids2/addSession',
      removeSession2: 'xnat2bids2/popSession',
    }),
  },
}
</script>
