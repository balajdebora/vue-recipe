<template>
  <div class="add-recipe-popup">
    <UICard class="popup-content">
      <div class="close-btn"><button @click="props.togglePopup" type="button">X</button></div>
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
    </UICard>
  </div>
</template>

<script setup>
import _ from "lodash";
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

import UICard from "./UICard.vue";

const props = defineProps({
  togglePopup: {
    type: Function,
  },
});

const store = useStore();

const newRecipe = ref({
  title: "",
  description: "",
  ingredients: [],
  method: [],
  ingredientRows: 1,
  methodRows: 1,
});

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
  props.togglePopup();
};
</script>
