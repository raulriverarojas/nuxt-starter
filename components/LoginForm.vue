<template>
  <div class="flex justify-center items-center h-screen ">
    <form @submit.prevent="submitForm" class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-base-content">Login</h2>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">username</span>
          </label>
          <input type="username" v-model="username" required class="input input-bordered" placeholder="Enter your username" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" v-model="password" required class="input input-bordered" placeholder="Enter your password" />
        </div>

        <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>

        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Login</button>
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
const password = ref('');
const errorMessage = ref('');

const submitForm = () => {

  // Reset error message
  errorMessage.value = '';

  // Prepare data for submission
  const payload = {
    username: username.value,
    password: password.value,
  };

  // Make a POST request to your API endpoint
  useFetch(`${backend}/login`, {
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