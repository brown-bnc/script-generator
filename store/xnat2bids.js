import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'latest',
  output_path: null,
  needs_bidsmap: false,
  bidsmap_dir: '/gpfs/data/bnc/sanes_sadlum/preprocessing/xnat2bids',
  bidsmap_file: 'bidsmap.json',
  sessions: [
    {
      participant_id: 135,
      xnat_id: 'XNAT3_E00013',
      i_series: [],
      s_series: [7, 15, 16, 17, 18],
    },
  ],
  overwrite: false,
  cleanup: false,
})

export const mutations = {
  updateField,
  // We'll use this mutation to
  // dynamically add new sessions.
  sayHello(state) {
    console.log('hello')
  },
  addSession(state) {
    console.log('here')
    state.sessions.push({
      participant_id: 135,
      xnat_id: 'XNAT3_E00013',
      i_series: [],
      s_series: [7, 15, 16, 17, 18],
    })
  },
}

export const getters = {
  getField,
}
