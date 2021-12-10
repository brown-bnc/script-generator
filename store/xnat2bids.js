import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'v1.0.4',
  output_path: null,
  needs_bidsmap: false,
  bidsmap_dir: '/gpfs/data/bnc/sanes_sadlum/preprocessing/xnat2bids',
  bidsmap_file: 'bidsmap.json',
  sessions: [
    {
      participant_id: null,
      xnat_id: null,
      i_series: [],
      s_series: [7, 15, 16, 17, 18],
    },
  ],
  overwrite: false,
  cleanup: false,
  verbose: false,
})

export const mutations = {
  updateField,
  // We'll use these mutation to
  // dynamically add/pop sessions.
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
