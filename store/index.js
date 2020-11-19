export const state = () => ({
  partition: 'CPU',
  job_name: 'test',
})

export const mutations = {
  SET_PARTITION(state, payload) {
    state.partition = payload
  },
  SET_JOBNAME(state, payload) {
    state.job_name = payload
  },
}

export const actions = {
  setSummary({ commit }, payload) {
    commit('SET_SUMMARY', payload)
  },
  setJobName({ commit }, payload) {
    commit('SET_JOBNAME', payload)
  },
}

export const getters = {
  getJobName(state) {
    return state.job_name
  },
}
