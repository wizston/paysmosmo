export const state = () => ({
  menuIsActive: false,
  post: {},
  posts: []
})

// plugins: [createPersistedState()],
export const mutations = {
  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },
  setPosts: (state, posts) => {
    state.posts = posts
  },
  setCurrentPost: (state, post) => {
    state.post = post
  }
}

export const actions = {
  async getPosts({ commit }) {
    const { data } = await this.$axios.$get(`posts`)
    commit('setPosts', data)
  },
  async getPost({ commit, store }, id) {
    const { data } = await this.$axios.$get(`posts/${id}`)
    commit('setCurrentPost', data)
  },
  async nuxtServerInit(
    { commit },
    { store, isClient, isServer, route, params }
  ) {
    if (isServer && route.name === 'postsView') {
      const { data } = await this.$axios.$get('posts')
      commit('setPosts', data)
    }
    if (isServer && params.id) {
      const { data } = await this.$axios.$get(`posts/${params.id}`)
      commit('setCurrentPost', data)
    }
  }
}
