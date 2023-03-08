<template>
  <router-link to="/"><img class="back-btn" src="../assets/images/back.png" alt="back-btn" /></router-link>
  <div class="hero">
    <div class="hero-content">
      <h1>{{ recipe.title }}</h1>
      <p class="desc">{{ recipe.description }}</p>
    </div>
  </div>
  <div class="recipe">
    <div class="ingredients">
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(ingredient, item) in recipe.ingredients" :key="item">
          {{ ingredient }}
          <hr />
        </li>
      </ul>
    </div>
    <div class="method">
      <h3>Method</h3>
      <ol>
        <li v-for="(step, item) in recipe.method" :key="item">
          <span v-html="cleanText(step)"> </span>
          <hr />
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipeView",
  computed: {
    recipe() {
      return this.$store.state.recipes.find((recipe) => recipe.slug === this.$route.params.slug);
    },
  },
  methods: {
    cleanText(text) {
      return text.replace(/\n/g, "<br/>");
    },
  },
};
</script>
