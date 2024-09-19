<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath; 
}
</script>

<template>
    <nav>
        <RouterLink to="/" :class="isActiveLink('/')">Home</RouterLink>
        <RouterLink to="/workouts" :class="isActiveLink('/workouts')">Workouts</RouterLink>
    </nav>
</template>

<style>

 nav {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }

</style>