import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  partition: 'BATCH',
  condo: null,
  jobname: 'xnat2bids',
  nnodes: 1,
  ncpus: 2,
  memory: 16,
  time: { hours: 1, minutes: 0, seconds: 0 },
  email: null,
  emailevents: [],
  output: '/gpfs/scratch/%u/xnat2bids-%j.out',
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
