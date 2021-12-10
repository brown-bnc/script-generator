import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'v1.5.9',
  bids_dir: null,
  ignore_warnings: false,
  ignore_nifti_headers: false,
  ignore_subject_consistency: false,
  json: false,
  verbose: false,
})

export const mutations = {
  updateField,
  // We'll use this mutation to
  // dynamically add new sessions.
  addSession(state) {
    state.sessions.push({
      participant_id: 135,
      xnat_id: 'XNAT3_E00013',
      i_series: [],
      s_series: [7, 15, 16, 17, 18],
    })
  },
  popSession(state) {
    state.sessions.pop()
  },
}

export const getters = {
  getField,
}
