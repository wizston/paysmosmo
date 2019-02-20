export const state = () => ({
  menuIsActive: false,
  category: {},
  categories: []
})

export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },
  setCategories: (state, categories) => {
    state.categories = categories
  },
  setCurrentCategory: (state, category) => {
    state.category = category
  }
}
export const getters = {
  newPopularCategory: (state, rootState) => {
    // console.log('rootState.products', state.products)
    let popularCategory = [...state.categories]
    // console.log('popularCategory', popularCategory)
    popularCategory = popularCategory.map(category => {
      return {
        ...category,
        top_product: [state.products]
      }
    })

    return popularCategory
  }
}
export const actions = {
  async getCategories({ commit }) {
    const data = await this.$axios.$get(`categories`)
    commit('setCategories', data)
  },
  async getCategory({ commit, store }, id) {
    const { data } = await this.$axios.$get(`categories/${id}`)
    commit('setCurrentCategory', data)
  }
}
