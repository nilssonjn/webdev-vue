import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import WorkoutList from "@/components/WorkoutList.vue";

test("removeExercise removes the correct exercise", async () => {
  const wrapper = mount(WorkoutList, {
    props: {
      title: "Test Workout Plan",
    },
  });

  const exercisesBefore = wrapper.findAll("li");
  expect(exercisesBefore.length).toBe(2);

  const removeButton = exercisesBefore[1].find("button");

  await removeButton.trigger("click");

  const exercisesAfter = wrapper.findAll("li");
  expect(exercisesAfter.length).toBe(1);
  expect(exercisesAfter[0].text()).toContain("Barbell Bench Press");

});
