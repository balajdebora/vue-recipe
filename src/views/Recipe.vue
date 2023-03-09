<template>
  <router-link to="/"><img class="back-btn" src="../assets/images/back.png" alt="back-btn" /></router-link>
  <Hero :title="recipe.title" :description="recipe.description" />
  <div class="recipe-details custom-container">
    <RecipeIngredients :recipe="recipe" />
    <RecipeMethods :recipe="recipe" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import Hero from "@/components/Hero.vue";
import RecipeIngredients from "@/components/RecipeIngredients.vue";
import RecipeMethods from "@/components/RecipeMethods.vue";

const store = useStore();
const route = useRoute();

const recipe = computed(() => {
  return store.state.recipes.find((recipe) => recipe.slug === route.params.slug);
});
</script>
