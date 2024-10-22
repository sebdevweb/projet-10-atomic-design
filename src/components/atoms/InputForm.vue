<template>
  <div class="container__input">
    <div class="box__icon" v-if="props.leftIcon">
      <component :is="props.leftIcon" class="left" />
    </div>
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
      default: 'Your text'
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
    },
    leftIcon: {
      type: Function
    }
  })
</script>