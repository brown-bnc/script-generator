export const state = () => ({
  partition: 'BATCH',
  condo: null,
  jobname: 'test',
  nnodes: 1,
  ncpus: 1,
  memory: 16,
  time: '1:00:00',
  email: null,
  emailevent: null,
})

export const mutations = {
  SET_JOBNAME(state, payload) {
    state.jobname = payload
  },
  SET_PARTITION(state, payload) {
    state.partition = payload
  },
  SET_CONDO(state, payload) {
    state.condo = payload
  },
  SET_NNODES(state, payload) {
    state.nnodes = payload
  },
  SET_NCPUS(state, payload) {
    state.ncpus = payload
  },
  SET_TIME(state, payload) {
    state.time = payload
  },
  SET_OUTPUT(state, payload) {
    state.output = payload
  },
  SET_EMAIL(state, payload) {
    state.email = payload
  },
  SET_EMAILEVENT(state, payload) {
    state.emailevent = payload
  },
}

export const actions = {
  setJobName({ commit }, payload) {
    commit('SET_JOBNAME', payload)
  },
  setPartition({ commit }, payload) {
    commit('SET_PARTITION', payload)
  },
  setCondo({ commit }, payload) {
    commit('SET_CONDO', payload)
  },
  setNNodes({ commit }, payload) {
    commit('SET_NNODES', payload)
  },
  setNCPUs({ commit }, payload) {
    commit('SET_NCPUS', payload)
  },
  setTime({ commit }, payload) {
    commit('SET_TIME', payload)
  },
  setOutput({ commit }, payload) {
    commit('SET_OUTPUT', payload)
  },
  setEmail({ commit }, payload) {
    commit('SET_EMAIL', payload)
  },
  setEmailEvent({ commit }, payload) {
    commit('SET_EMAILEVENT', payload)
  },
}
