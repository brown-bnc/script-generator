import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  sbatch: [
    {
      partition: 'BATCH',
      condo: null,
      jobname: 'xnat2bids',
      nnodes: 1,
      ncpus: 2,
      memory: 16,
      time: { hours: 1, minutes: 0, seconds: 0 },
      email: null,
      emailevents: [],
      output: '/gpfs/scratch/%u/test-%j.out',
    },
    {
      partition: 'BATCH',
      condo: null,
      jobname: 'bids-validator',
      nnodes: 1,
      ncpus: 1,
      memory: 16,
      time: { hours: 1, minutes: 0, seconds: 0 },
      email: null,
      emailevents: [],
      output: '/gpfs/scratch/%u/test-%j.out',
    },
  ],
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
