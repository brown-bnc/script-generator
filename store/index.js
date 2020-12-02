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
  mutate(state, payload) {
    console.log(payload.property)
    console.log(payload.with)
    state[payload.property] = payload.with
  },
}

export const actions = {
  setStateProperty({ commit }, payload) {
    commit('mutate', {
      property: payload.property,
      with: payload.value,
    })
  },
}
