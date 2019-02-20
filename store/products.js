export const state = () => ({
  product: {},
  products: []
})

export const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },
  setCurrentProduct: (state, product) => {
    state.product = product
  }
}
export const getters = {
  newProducts: state => {
    let prods = [...state.products]
    prods = prods.slice(prods.length - 4, prods.length)
    return prods
  }
}
export const actions = {
  async getProducts({ commit }) {
    const data = await this.$axios.$get(`products`)
    commit('setProducts', data)
  },
  async getProduct({ commit, store }, id) {
    const { data } = await this.$axios.$get(`products/${id}`)
    commit('setCurrentProduct', data)
  }
}
