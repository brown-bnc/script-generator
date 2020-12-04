import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'latest',
  output_path: null,
  needs_bidsmap: false,
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
