<template>
  <div class="card p10 border-0">
    <img
      class="card-img-top rounded-0"
      src="https://res.cloudinary.com/anelda/image/upload/c_scale,w_489/v1550694584/suede-shoes-photo-1503009_ejasqt.jpg"
      alt="Card image cap"
    >
    <div class="card-body">
      <h5 class="card-title">
        {{ data.name }}
      </h5>
      <p class="card-text">
        <star-rating :value="data.rating" :disabled="true" />
        <small class="home-price-tag text-muted">{{ formatPrice(data.price) }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import StarRating from '../StarRating'
export default {
  components: {
    StarRating
  },
  props: {
    data: Object
  },
  data: function() {
    return {
      config: {
        isIndicatorActive: false,
        rating: 1,
        style: {
          fullStarColor: '#ed8a19',
          emptyStarColor: '#737373',
          starWidth: 50,
          starHeight: 50
        }
      }
    }
  },
  methods: {
    formatPrice(price) {
      return '₦' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style>
small.home-price-tag.text-muted {
  font-weight: 600;
  font-size: 17px;
}
</style>
