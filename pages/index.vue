<template>
  <section class="container-main mt-5">
    <div class="row mb-4">
      <div class="col-6 col-md-3 pr-3">
        <side-nav />
      </div>
      <div class="col">
        {{ popularCategories }}
        <carousel />
      </div>
    </div>

    <!-- <item-section v-for="categorya in categories" :key="categorya.id" title="EXPLORE POPULAR CATEGORY"/> -->
    <item-section :data="[]" title="EXPLORE POPULAR CATEGORY" />

    <item-section :data="newProducts" title="EXPLORE NEW STUFFS" />
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import SideNav from '../components/home/SideNav.vue'
import Carousel from '../components/home/Carousel.vue'
import ItemSection from '../components/home/ItemSection.vue'

export default {
  components: {
    SideNav,
    Carousel,
    ItemSection
  },
  data: function() {
    return {
      popularCategories: []
    }
  },
  computed: {
    ...mapState({
      categories: 'categories'
    }),
    ...mapGetters({
      newPopularCategory: 'categories/newPopularCategory',
      newProducts: 'products/newProducts'
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('categories/getCategories')
    await store.dispatch('products/getProducts')
  },
  mounted: function() {
    this.getPopularCategories()
  },
  methods: {
    ...mapActions({}),
    ...mapMutations({
      toggle: 'categories/toggleMenuState'
    }),
    getPopularCategories() {
      this.popularCategories = this.newPopularCategory.map(category => {
        return {
          ...category,
          top_product: [
            this.newProducts.find(
              product => product.categoryid === category.id
            )
            // .sort((a, b) => b.rating - a.rating)
            // .slice(-1)[0]
          ]
        }
      })
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
