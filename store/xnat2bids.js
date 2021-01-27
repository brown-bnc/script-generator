import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  version: 'latest',
  output_path: null,
  needs_bidsmap: false,
  bidsmap_directory: '/gpfs/data/bnc/sanes_sadlum/preprocessing/xnat2bids',
  bidsmap_file: 'bidsmap.json',
  session: [
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
}

export const getters = {
  getField,
}
