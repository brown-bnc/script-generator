import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  partition: 'BATCH',
  condo: null,
  jobname: 'test',
  nnodes: 1,
  ncpus: 1,
  memory: 16,
  time: { hours: 1, minutes: 0, seconds: 0 },
  email: null,
  emailevents: [],
  output: '/gpfs/scratch/%u/test-%j.out',
  //   active_nav: 'overview',
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
