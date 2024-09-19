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

  nav a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
  }

</style>