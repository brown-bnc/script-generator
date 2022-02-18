import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'v1.0.4',
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
