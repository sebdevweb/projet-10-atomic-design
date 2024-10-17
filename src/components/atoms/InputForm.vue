<template>
  <input 
    :type="inputType" 
    :placeholder="inputPlaceholder"
    :class="`${className}`"
  >
  
</template>


<script setup>

  const props = defineProps({
    inputPlaceholder: {
      type: String,
      default: 'input text'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    className: {
      type: String
    }
  })
</script>