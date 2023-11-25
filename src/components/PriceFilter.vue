<!-- PriceFilter.vue -->
<template>
    <div class="price-filter">
      <label for="priceRange">Price Range:</label>
      <input
        type="range"
        id="priceRange"
        v-model="selectedPriceRange"
        @input="updateFilter"
        min="0"
        :max="maxPrice"
      />
      <p>Selected Range: ${{ selectedPriceRange[0] }} - ${{ selectedPriceRange[1] }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPriceRange: [0, 100], // Initial selected range
        maxPrice: 100, // Set your maximum price here
      };
    },
    methods: {
      updateFilter() {
        // Emit an event to notify the parent component of the selected range
        this.$emit('update-filter', this.selectedPriceRange);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .price-filter {
    margin-top: 20px;
  }
  </style>
  