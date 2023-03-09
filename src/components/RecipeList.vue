<template>
  <div class="recipes custom-container">
    <UICard v-for="recipe in $store.state.recipes" :key="recipe.slug">
      <h2>{{ recipe.title }}</h2>
      <p>{{ recipe.description }}</p>
      <router-link :to="`/recipe/${recipe.slug}`">
        <button>View Recipe</button>
      </router-link>
    </UICard>
  </div>
</template>

<script setup>
import UICard from "@/components/UICard.vue";
</script>
