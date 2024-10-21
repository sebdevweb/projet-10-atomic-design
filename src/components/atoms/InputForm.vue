<template>
  <div class="container__input">
    <input 
      :type="inputType" 
      :placeholder="inputPlaceholder"
      :class="`${className}`"
      :value="inputValue"
    >
  
    <component :is="props.rightIcon" class="right" />
  </div>
</template>


<script setup>

  defineOptions({
    inheritAttrs: false
  })  

  const props = defineProps({
    inputPlaceholder: {
      type: String,
      default: 'input text'
    },
    inputValue: {
      type: String,
      default: 'Your texte'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    className: {
      type: String
    },
    rightIcon: {
      type: Function
    }
  })
</script>