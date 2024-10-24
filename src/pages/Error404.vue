<template>
  <div class="error">
    <h1>💥 Page <span>not found</span> 💥</h1>
      <img :src="ErrorImg" alt="404 Not found" class="error__img">
  
    <p>Return to
      <RouterLink to="/" >Homepage</RouterLink>
    </p>
  </div>
</template>

<script setup>
  import ErrorImg from '../assets/imgs/404-errors-ga4.webp'
</script>