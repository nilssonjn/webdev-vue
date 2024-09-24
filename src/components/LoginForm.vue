<script setup>
import { reactive } from 'vue';

const MIN_CHARS = 3;
const MAX_CHARS = 15;

const validUsername = new RegExp (`^[a-z0-9]{${MIN_CHARS},${MAX_CHARS}}$`,'i');
const validPassword = new RegExp (`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&_])[A-Za-z\\d$@$!%*?&_]{${MIN_CHARS},${MAX_CHARS}}$`);

const form = reactive({
    username:"",
    password:"",
    errors: {
      username: "",
      password: ""
    },
    loggedInUser: null,
});

const handleSubmit = () => {
    form.errors.username = "";
    form.errors.password = "";

    if (!validUsername.test(form.username)) {
      form.errors.username = `Username must be ${MIN_CHARS}-${MAX_CHARS} characters long and contain only letters and numbers.`;
    }

    if (!validPassword.test(form.password)) {
      form.errors.password = `Password must be ${MIN_CHARS}-${MAX_CHARS} characters long. It must contain at least one lowercase letter,
      uppercase letter, one digit and a special character`;
    }

    if (!form.errors.username && !form.errors.password) {
      form.loggedInUser = form.username;
    }
};

</script>

<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="form.username" required />
          <span v-if="form.errors.username" class="error"> {{ form.errors.username }}</span>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required />
          <span v-if="form.errors.password" class="error"> {{ form.errors.password }}</span>
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="form.loggedInUser" class="loggedInUser">
        Logged in as: {{ form.loggedInUser }}
      </div>
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

.login-form button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
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

.error {
  color: red;
  font-size: 1rem;
}
</style>