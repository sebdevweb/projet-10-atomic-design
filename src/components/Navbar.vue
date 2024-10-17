<template>
  <div class="nav__container">
    <RouterLink to="/" class="logo">Vue.js <span>components</span></RouterLink>
    <nav>
      <ul>
        <RouterLink to="/">Button</RouterLink>
        <RouterLink to="/input">Input field</RouterLink>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const active = ref('active')

</script>