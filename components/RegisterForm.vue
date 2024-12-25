<template>
  <div class="flex justify-center items-center h-screen ">
    <form @submit.prevent="submitForm" class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-base-content">Register</h2>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="username" v-model="username" required class="input input-bordered" placeholder="Enter your username" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" v-model="password1" required class="input input-bordered" placeholder="Enter your password" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input type="password" v-model="password2" required class="input input-bordered" placeholder="Confirm your password" />
        </div>

        <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>

        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const config = useRuntimeConfig();
const backend = config.public.backend;

const username = ref('');
const password1 = ref('');
const password2 = ref('');
const errorMessage = ref('');

const patterns = {
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  number: /\d/,
  special_char: /[ -\/:-@\[-`{-\xFF]/,
};

const validatePassword = (password: string): boolean => {
  return Object.values(patterns).every((regex) => regex.test(password));
};

const submitForm = () => {
  if (password1.value !== password2.value) {
    errorMessage.value = "Passwords do not match.";
    return;
  }

  if (!validatePassword(password1.value)) {
    errorMessage.value = "Password must include lowercase, uppercase, number, and special character.";
    return;
  }

  // Reset error message
  errorMessage.value = '';

  // Prepare data for submission
  const payload = {
    username: username.value,
    password: password1.value,
  };

  // Make a POST request to your API endpoint
  useFetch(`${backend}/register`, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    // Handle response
    console.log(response);
  }).catch(error => {
    console.error('Error:', error);
    errorMessage.value = "An error occurred while logging in.";
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>