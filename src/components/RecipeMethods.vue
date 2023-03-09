<template>
  <UICard class="method">
    <h3>Method</h3>
    <ol>
      <li v-for="(step, item) in props.recipe.method" :key="item">
        <span v-html="cleanText(step)"> </span>
        <hr />
      </li>
    </ol>
  </UICard>
</template>

<script setup>
import _ from "lodash";
import { defineProps } from "vue";

import UICard from "./UICard.vue";

const props = defineProps({
  recipe: {
    type: Object,
  },
});

const cleanText = (text) => {
  return _.replace(text, /\n/g, "<br/>");
};
</script>
