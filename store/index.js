export const state = () => ({
  partition: 'CPU',
  job_name: 'test',
  email: null,
  emailevent: null,
  nnodes: 1,
  nprocesses: 1,
})

export const mutations = {
  SET_JOBNAME(state, payload) {
    state.job_name = payload
  },
  SET_PARTITION(state, payload) {
    state.partition = payload
  },
  SET_EMAIL(state, payload) {
    state.email = payload
  },
  SET_EMAILEVENT(state, payload) {
    state.emailevent = payload
  },
  SET_NNODES(state, payload) {
    state.nnodes = payload
  },
  SET_NPROCESSES(state, payload) {
    state.nprocesses = payload
  },
}

export const actions = {
  setJobName({ commit }, payload) {
    commit('SET_JOBNAME', payload)
  },
  setPartition({ commit }, payload) {
    commit('SET_PARTITION', payload)
  },
  setEmail({ commit }, payload) {
    commit('SET_EMAIL', payload)
  },
  setEmailEvent({ commit }, payload) {
    commit('SET_EMAILEVENT', payload)
  },
  setNNodes({ commit }, payload) {
    commit('SET_NNodes', payload)
  },
  setNProcesses({ commit }, payload) {
    commit('SET_NProcesses', payload)
  },
}
