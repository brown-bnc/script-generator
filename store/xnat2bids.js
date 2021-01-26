import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'latest',
  output_path: null,
  needs_bidsmap: false,
  bidsmap_file: null,
  i_series: null,
  s_series: null,
  overwrite: false,
  cleanup: false,
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
