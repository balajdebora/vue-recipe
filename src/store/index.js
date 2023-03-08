import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        slug: "katsu-curry",
        title: "Chicken Chow Mein",
        description: "A classic Chinese noodle dish that is quick and easy to make at home.",
        ingredients: [
          "8 ounces chow mein noodles, uncooked",
          "1 tablespoon avocado oil",
          "1 small yellow onion, sliced",
          "1 medium carrot, thinly sliced",
          "1 medium red bell pepper, thinly sliced",
          "1 head bok choy, sliced",
          "2 cups broccoli florets",
          "1 cup cooked chicken breast, sliced into 1-inch strips",
          "1/2 teaspoon fresh ginger, grated",
          "2 tablespoons soy sauce",
          "1/2 tablespoon rice vinegar",
          "1 teaspoon sesame oil",
          "1/2 teaspoon ground black pepper (or to taste)",
          "white sesame seeds (optional, for garnish)",
        ],
        method: [
          "Soak noodles. Soak the dry noodles in a large mixing bowl filled with hot water for 1 minute, or according to the package instructions. Drain well and set aside.",
          "Sauté veggies. Heat oil in a large skillet over medium-high heat until sizzling hot, about 1 minute. Add onion and sauté until fragrant, about 1 minute. Add carrot, bell pepper, bok choy, and broccoli, and cook until tender, about 2-3 minutes.",
          "Add chicken. Add cooked chicken and ginger. Use a spatula to mix well until evenly distributed.",
          "Add noodles. Stir in the soaked and drained noodles, and cook for 1 minute.",
          "Add sauce. Add soy sauce, vinegar, sesame oil, and black pepper. Toss well and cook for another 1-2 minutes until evenly coated.",
          "Serve. Garnish with sesame seeds and serve immediately.",
        ],
      },
      {
        slug: "ramen-nooodle-soup",
        title: "Chicken Marsala",
        description:
          "A creamy mushroom sauce is a quick and easy 30-minute chicken dinner that is pure comfort food goals.",
        ingredients: [
          "2 chicken breasts",
          "1/2 teaspoon salt",
          "ground black pepper",
          "1/4 cup all-purpose flour",
          "2 tablespoons olive oil ",
          "2 tablespoons butter, unsalted",
          "2 cups brown mushrooms",
          "1 teaspoon all-purpose flour",
          "1/2 teaspoon Italian seasoning",
          "1 tablespoon garlic, minced",
          "½ cup dry marsala wine",
          "1 cup chicken broth",
          "1/3 cup heavy cream",
          "1 tablespoon fresh parsley",
        ],
        method: [
          "Prepare the chicken. Slice each chicken breast carefully in half .",
          "Sear the chicken. Heat oil in a large skillet over medium-high for 2 minutes until the hot oil sizzles. Sear the chicken for about 5 minutes per side until golden brown and fully cooked through..",
          "Make the creamy mushroom sauce. In the same skillet, melt butter and sauté mushrooms until golden brown on both sides, about 5 minutes. Add a little more olive oil, if needed. Stir in flour, Italian seasoning and garlic and sauté until fragrant, about 1 minute. Pour in marsala wine, chicken broth, and cream and whisk well until the sauce is smooth and uniform. Reduce heat to medium and bring the sauce to a simmer until thickened to a desired consistency, about 4-5 minutes.",
          "Assemble and serve. Return the chicken to skillet and toss well to coat, allowing the chicken to cook and soak in the sauce for 1-2 minutes. Garnish with parsley and serve immediately with pasta, rice, or over mashed potatoes.",
        ],
      },
    ],
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
});
