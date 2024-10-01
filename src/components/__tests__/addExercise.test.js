import { expect, it, test } from "vitest";
import { ref } from "vue";
import WorkoutList from "../WorkoutList.vue";

test("Remove exercise on array index", () => {
  const exercises = ref([
    {
      id: 1,
      title: "Barbell Bench Press",
      target: "Chest",
    },
    {
      id: 2,
      title: "Barbell Shoulder Press",
      target: "Shoulders",
    },
  ]);

  const removeExercise = (index) => {
    exercises.value.splice(index, 1);
  };

  removeExercise(1);
  expect(exercises.value).toEqual([
    {
      id: 1,
      title: "Barbell Bench Press",
      target: "Chest",
    },
  ]);
});
