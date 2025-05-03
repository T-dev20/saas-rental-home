<template>
  <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh; text-align: center;">
    <v-img 
      src="/path-to-your-404-image.svg" 
      alt="Page not found"
      max-height="300"
    />
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <v-btn color="primary" @click="goHome">Go to Homepage</v-btn>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
  h1 {
    margin-top: 20px;
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    margin: 10px 0;
    color: #757575;
  }
</style>
