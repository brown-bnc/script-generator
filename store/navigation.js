import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  active_nav: 'overview',
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
