import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  partition: 'BATCH',
  condo: null,
  jobname: 'test',
  nnodes: 1,
  ncpus: 1,
  memory: 16,
  time: '1:00:00',
  email: null,
  emailevent: null,
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
