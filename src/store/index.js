import {createStore} from "vuex";

export default createStore({
    state: {
        recipes: []
    },
    mutations: {
        addRecipe(state, recipe) {
            state.recipes.push(recipe);
        },
        setRecipesOfSaved(state, recipes) {
            state.recipes = recipes;
        },
    },
})