<script setup>
import { ref } from 'vue';

const newExercise = ref("");
const exercises = ref([]);

const addExercise = () => {
    if(newExercise.value.trim()) {
        exercises.value.push(newExercise.value.trim());
        newExercise.value = "";
    }
};

const removeExercise = (index) => {
    exercises.value.splice(index, 1);
};

</script>

<template>
    <section>
      <h2>Your Workout Plan</h2>
      <form @submit.prevent="addExercise">
        <input v-model="newExercise" placeholder="Add a new exercise" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <li v-for="(exercise, index) in exercises" :key="index">
          {{ exercise }}
          <button @click="removeExercise(index)">Remove</button>
        </li>
      </ul>
    </section>
  </template>

<style scoped>
section, form, input {
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
}

button {
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>