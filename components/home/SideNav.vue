<template>
  <div class="list-group shadow-sm">
    <a href="#" class="list-group-item list-group-item-action active">CATEGORIES</a>
    <a v-for="category in categories.categories" :key="category.id" href="#" class="list-group-item list-group-item-action">
      {{ category.name }}
      <font-awesome-icon class="float-right text-muted" icon="chevron-right" />
      </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    categories: 'categories'
  })
}
</script>
