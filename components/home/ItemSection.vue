<template>
  <div class="row mt-5">
    <div class="col">
      <div class="card rounded-0 shadow-sm">
        <div class="card-header">
          {{ title }}
        </div>
        <div class="card-body">
          <div class="card-deck">
            <item v-for="datum in data" :key="datum.id" :data="datum"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: {
    title: String,
    data: Array
  },
  components: {
    Item
  }
}
</script>
