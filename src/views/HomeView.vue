<script setup>
import { ref } from 'vue';

const title = ref("Welcome to MyWorkoutsApp");
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<style>
h1 {
    text-align: center;
}
</style>