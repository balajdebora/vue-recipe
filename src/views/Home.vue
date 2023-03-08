<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1>Cooking Adventures</h1>
        <p>Find your next culinary adventure with our recipe of the day!</p>
        <button @click="togglePopup">Add new recipe</button>
      </div>
    </div>

    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button>View Recipe</button>
        </router-link>
      </div>
    </div>

    <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <div class="close-btn"><button @click="togglePopup" type="button">X</button></div>
        <h2>Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="group">
            <label>Title</label>
            <input type="text" v-model="newRecipe.title" />
          </div>
          <div class="group">
            <label>Description</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>
          <div class="steps">
            <div class="group">
              <label>Ingredients</label>
              <div class="ingredient" v-for="item in newRecipe.ingredientRows" :key="item">
                <input type="text" v-model="newRecipe.ingredients[item - 1]" />
              </div>
              <button type="button" @click="addNewIngredient">Add ingredient</button>
            </div>

            <div class="group">
              <label>Method</label>
              <div v-for="item in newRecipe.methodRows" :key="item">
                <textarea v-model="newRecipe.method[item - 1]"></textarea>
              </div>
              <button type="button" @click="addNewStep">Add steps</button>
            </div>
          </div>
          <button class="add-btn" type="submit">Add recipe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",

  setup() {
    const newRecipe = ref({
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
    });
    const popupOpen = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };

    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };
    const addNewStep = () => {
      newRecipe.value.methodRows++;
    };

    const addNewRecipe = () => {
      newRecipe.value.slug = _.kebabCase(_.lowerCase(newRecipe.value.title));
      if (newRecipe.value.slug == "") {
        alert("Please enter a title!");
        return;
      }
      store.commit("ADD_RECIPE", { ...newRecipe.value });

      newRecipe.value = {
        title: "",
        description: "",
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1,
      };
      togglePopup();
    };

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewIngredient,
      addNewStep,
      addNewRecipe,
    };
  },
};
</script>
