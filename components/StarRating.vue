<template>
  <div class="star-rating">
    <label
      v-for="rating in ratings"
      :key="rating" 
      class="star-rating__star" 
      :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
      @click="set(rating)"
      @mouseover="star_over(rating)"
      @mouseout="star_out"
    >
      <input
        v-model="value"
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :name="name"
        :disabled="disabled"
      >★</label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: null,
    id: String,
    disabled: Boolean,
    required: Boolean
  },
  /*
   * Initial state of the component's data.
   */
  data: function() {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over: function(index) {
      if (!this.disabled) {
        this.temp_value = this.value
        return (this.value = index)
      }
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out: function() {
      if (!this.disabled) {
        return (this.value = this.temp_value)
      }
    },

    /*
     * Set the rating.
     */
    set: function(value) {
      if (!this.disabled) {
        this.temp_value = value
        return (this.value = value)
      }
    }
  }
}
</script>
