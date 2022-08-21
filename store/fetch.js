import fetchServices from '~/services/fetchServices'

export const state = () => ({
  items: '',
  carousel: '',
})

export const getters = {
  items: (state) => state.items,
  carousel: (state) => state.carousel,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_CAROUSEL(state, items) {
    state.carousel = items
  },
}

export const actions = {
  getFetch(context, payload) {
    return new Promise((resolve, reject) => {
      fetchServices
        .getFetch(payload)
        .then((res) => {
          context.commit('SET_ITEMS', res)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getCarousel(context, payload) {
    return new Promise((resolve, reject) => {
      fetchServices
        .getCarousel(payload)
        .then((res) => {
          context.commit('SET_CAROUSEL', res)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
