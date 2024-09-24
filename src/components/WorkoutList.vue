<script setup>
import { ref } from 'vue';

const newExercise = ref("");
const exercises = ref({
  exercise: []
});

const addExercise = () => {
    if(newExercise.value.trim()) {
        exercises.value.exercise.push(newExercise.value.trim());
        newExercise.value = "";
    }
};

const removeExercise = (index) => {
    exercises.value.exercise.splice(index, 1);
};

defineProps ({
  title: {
    type: String,
    default: "Your Workout Plan"
  }
});

</script>

<template>
    <section>
      <h2>{{ title }}</h2>
      <form @submit.prevent="addExercise">
        <input v-model="newExercise" placeholder="Add a new exercise" />
        <button type="submit">Add</button>
      </form>
      <p v-if="exercises.exercise.length === 0">No exercises yet.</p>
      <ul v-else>
        <li v-for="(exercise, index) in exercises.exercise" :key="index">
          {{ exercise }}
          <button @click="removeExercise(index)">Remove</button>
        </li>
      </ul>
    </section>
</template>

<style scoped>
section {
  padding: 10px;
  margin-bottom: 20px;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  flex-grow: 1;
}

button {
  padding: 8px 12px;
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