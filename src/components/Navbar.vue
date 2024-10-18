<template>
  <div class="nav__container">
    <RouterLink to="/" class="logo">Vue.js <span>components</span></RouterLink>
    <hr>
    <nav>
      <h3>ATOMS</h3>
      <ul>
        <li>Buttons components</li>
        <RouterLink to="/button">Button</RouterLink>
        <RouterLink to="/button-icon">Button Icon</RouterLink>
      </ul>
      <ul>
        <li>Form fields components</li>
        <RouterLink to="/input">Input field</RouterLink>
      </ul>
      <h3>MOLECULES</h3>
    </nav>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const active = ref('active')

</script>