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
  import Buttons from './pages/Buttons.vue';
  import ButtonsIcons from './pages/ButtonsIcons.vue';
  import FormInputText from './pages/FormInputText.vue';
  import Navbar from './components/Navbar.vue';

</script>
