import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  sbatchXnat2Bids: [
    {
      jobname: 'xnat2bids',
      partition: 'BATCH',
      walltime: [1, 0, 0],
      nnodes: 1,
      ncpus: 2,
      memory: 16,
    },
  ],
  sbatch: [
    {
      partition: 'BATCH',
      condo: null,
      jobname: 'xnat2bids',
      nnodes: 1,
      ncpus: 2,
      memory: 16,
      hours: 1,
      minutes: 0,
      seconds: 0,
      email: null,
      emailevents: [],
      output: '/gpfs/scratch/%u/xnat2bids-%j.out',
    },
    {
      partition: 'BATCH',
      condo: null,
      jobname: 'bids-validator',
      nnodes: 1,
      ncpus: 1,
      memory: 4,
      hours: 0,
      minutes: 30,
      seconds: 0,
      email: null,
      emailevents: [],
      output: '/gpfs/scratch/%u/bids-validator-%j.out',
    },
  ],
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
