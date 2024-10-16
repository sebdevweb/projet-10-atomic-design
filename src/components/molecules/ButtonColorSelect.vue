<template>
  <div class="container__switch--color">
    <a href="#" class="select__color green"></a>
    <a href="#" class="select__color blue"></a>
    <a href="#" class="select__color red"></a>
    <a href="#" class="select__color orange"></a>
    <a href="#" class="select__color yellow"></a>
    <a href="#" class="select__color purple"></a>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const greenColor = ref('green')
  const blueColor = ref('blue')
  const redColor = ref('red')
  const orangeColor = ref('orange')
  const yellowColor = ref('yellow')
  const purpleColor = ref('purple')
  
</script>