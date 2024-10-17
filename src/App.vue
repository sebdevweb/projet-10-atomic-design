<template>
  <div class="pageApp">
    <aside>
      <Navbar />
    </aside>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>


<script setup>
  import Buttons from './components/molecules/Buttons.vue';
  import Form from './components/molecules/Form.vue';
import Navbar from './components/Navbar.vue';

</script>


<style scoped>

</style>
