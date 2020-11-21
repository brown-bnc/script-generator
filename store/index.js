export const state = () => ({
  partition: 'CPU',
  jobname: 'test',
  email: null,
  emailevent: null,
  nnodes: 1,
  nprocesses: 1,
})

export const mutations = {
  SET_JOBNAME(state, payload) {
    state.jobname = payload
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

export const getters = {
  getJobName(state) {
    return state.jobname
  },
  getPartition(state) {
    return state.partition
  },
  getEmail(state) {
    return state.email
  },
  getEmailEvent(state) {
    return state.emailevent
  },
  getNNodes(state) {
    return state.nnodes
  },
  getNProcesses(state) {
    return state.nprocesses
  },
}
