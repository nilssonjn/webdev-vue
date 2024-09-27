<script setup>
import { ref } from 'vue';

defineProps ({
  title: {
    type: String,
    default: "Your Workout Plan"
  }
});

const exercises = ref([
  {
    id: 1,
    title: "Barbell Bench Press",
    target: "Chest",
  },
  {
    id: 2,
    title: "Barbell Shoulder Press",
    target: "Shoulders"
  }
]);

const newExercise = ref("");
const newTarget = ref("");

const addExercise = () => {
  if (newExercise.value && newTarget.value) {
    exercises.value.push(
      {
        id: exercises.value.length +1,
        title: newExercise.value,
        target: newTarget.value
      });
      newExercise.value = "";
      newTarget.value = "";
    }
};

const removeExercise = (index) => {
    exercises.value.splice(index, 1);
};

</script>

<template>
    <section class="container">
      <h2>{{ title }}</h2>
      <form class="exercise-form" @submit.prevent="addExercise">
        <input v-model.trim="newExercise" placeholder="Exercise name" />
        <input v-model.trim="newTarget" placeholder="Target muscle group" />
        <button type="submit" class="btn-add">Add</button>
      </form>
      <p v-if="exercises.length === 0">No exercises yet.</p>
      <ul v-else class="exercise-list">
        <li v-for="(exercise, index) in exercises" :key="exercise.id" class="exercise-items">
          <div>
            {{ exercise.title }}
            <p class="exercise-target">Target muscle group: {{ exercise.target }}</p>
          </div>
          <button @click="removeExercise(index)" class="btn-remove">Remove</button>
        </li>
      </ul>
    </section>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

h2 {
  text-align: center;
}

.exercise-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.exercise-form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.exercise-list {
  list-style-type: none;
  padding: 0;
}

.exercise-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.exercise-item div {
  display: flex;
  flex-direction: column;
}

.exercise-target {
  margin: 5px 0 0 0;
  font-size: 0.9em;
  color: #666;
}
</style>