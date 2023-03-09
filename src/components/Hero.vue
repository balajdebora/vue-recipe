<template>
  <div class="hero">
    <div class="hero-content">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
      <button v-if="isHome" @click="props.togglePopup">Add new recipe</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  togglePopup: {
    type: Function,
  },
  title: {
    type: String,
    default: "Cooking Adventures",
  },
  description: {
    type: String,
    default: "Find your next culinary adventure with our recipe of the day!",
  },
  isHome: {
    type: Boolean,
  },
});
</script>
