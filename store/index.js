import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  sbatch: [
    {
      jobname: 'xnat2bids',
      partition: 'BATCH',
      walltime: [1, 0, 0],
      nnodes: 1,
      ncpus: 2,
      memory: 16,
      output: '/gpfs/scratch/%u/xnat2bids-%j.out',
      emailevents: [],
      email: null,
    },
    {
      jobname: 'bids-validator',
      partition: 'BATCH',
      walltime: [0, 30, 0],
      nnodes: 1,
      ncpus: 1,
      memory: 4,
      output: '/gpfs/scratch/%u/bids-validator-%j.out',
      emailevents: [],
      email: null,
    },
  ],
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
