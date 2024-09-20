<script setup>
import { reactive } from 'vue';

const form = reactive({
    username:"",
    password:""
});

const handleSubmit = () => {
    console.log("Username", form.username);
    console.log("Password", form.password);
}

</script>

<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="form.username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
}

.login-form h2 {
  text-align: center;
}

.login-form div {
  margin-bottom: 1rem;
}

.login-form label {
  display: block;
  margin-bottom: 0.5em;
}

.login-form input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

.login-form button {
  width: 100%;
  padding: 0.7em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>