<template>
  <UICard class="ingredients">
    <h3>Ingredients</h3>
    <ul>
      <li v-for="(ingredient, item) in props.recipe.ingredients" :key="item">
        {{ ingredient }}
        <hr />
      </li>
    </ul>
  </UICard>
</template>

<script setup>
import { defineProps } from "vue";

import UICard from "./UICard.vue";

const props = defineProps({
  recipe: {
    type: Object,
  },
});
</script>
