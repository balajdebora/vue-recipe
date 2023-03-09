<template>
  <div class="home">
    <Hero isHome :togglePopup="togglePopup" />
    <RecipeList />
    <RecipeForm :togglePopup="togglePopup" v-if="popupOpen" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Hero from "@/components/Hero.vue";
import RecipeList from "@/components/RecipeList.vue";
import RecipeForm from "@/components/RecipeForm.vue";

const popupOpen = ref(false);

const togglePopup = () => {
  popupOpen.value = !popupOpen.value;
};
</script>
