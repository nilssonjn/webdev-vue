import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import WorkoutList from "@/components/WorkoutList.vue";

test("removeExercise removes the correct exercise", async () => {
  const wrapper = mount(WorkoutList);

  const exercisesBefore = wrapper.findAll("li");
  expect(exercisesBefore.length).toBe(2);

  const removeButton = exercisesBefore[1].find("button");
  await removeButton.trigger("click");

  const exercisesAfter = wrapper.findAll("li");
  expect(exercisesAfter.length).toBe(1);
  expect(exercisesAfter[0].text()).toContain("Barbell Bench Press");

});

test("addExercise adds a new exercise", async () => {
  const wrapper = mount(WorkoutList);

  const exerciseInput = wrapper.find("input[id='NewExercise']");
  const targetInput = wrapper.find("input[id='NewTarget']");
  const addButton = wrapper.find("button[type='submit']");

  let exercises = wrapper.findAll("li");
  const initialLength = exercises.length;

  await exerciseInput.setValue("Squats");
  await targetInput.setValue("Legs");

  await addButton.trigger("submit");

  //show the updated array in the tests
  console.log(wrapper.vm.exercises);

  exercises = wrapper.findAll("li");
  
  expect(exercises.length).toBe(initialLength + 1);
  expect(exercises[initialLength].text()).toContain("Squats");
  expect(exercises[initialLength].text()).toContain("Target muscle group: Legs");

});
