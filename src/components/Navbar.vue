<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 justify-center">
              <RouterLink
                to="/workouts"
                :class="[
                  isActiveLink('/workouts')
                    ? 'bg-gray-900'
                    : 'hover:bg-gray-700 hover:text-white',
                  'px-3',
                  'py-2',
                  'text-sm',
                  'font-medium',
                  'rounded-md',
                  'text-white',
                ]"
                >Workouts</RouterLink
              >
              <RouterLink
                to="/home"
                :class="[
                  isActiveLink('/home')
                    ? 'bg-gray-900'
                    : 'hover:bg-gray-700 hover:text-white',
                  'px-3',
                  'py-2',
                  'text-sm',
                  'font-medium',
                  'rounded-md',
                  'text-white',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/login"
                :class="[
                  isActiveLink('/login')
                    ? 'bg-gray-900'
                    : 'hover:bg-gray-700 hover:text-white',
                  'px-3',
                  'py-2',
                  'text-sm',
                  'font-medium',
                  'rounded-md',
                  'text-white',
                ]"
                >Login</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <RouterLink
          to="/home"
          :class="[
            isActiveLink('/home')
              ? 'bg-gray-900'
              : 'hover:bg-gray-700 hover:text-white',
            'px-3',
            'py-2',
            'text-sm',
            'font-medium',
            'rounded-md',
            'text-white',
          ]"
          >Home</RouterLink
        >
        <RouterLink
          to="/login"
          :class="[
            isActiveLink('/login')
              ? 'bg-gray-900'
              : 'hover:bg-gray-700 hover:text-white',
            'px-3',
            'py-2',
            'text-sm',
            'font-medium',
            'rounded-md',
            'text-white',
          ]"
          >Login</RouterLink
        >
        <RouterLink
          to="/workouts"
          :class="[
            isActiveLink('/workouts')
              ? 'bg-gray-900'
              : 'hover:bg-gray-700 hover:text-white',
            'px-3',
            'py-2',
            'text-sm',
            'font-medium',
            'rounded-md',
            'text-white',
          ]"
          >Workouts</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
