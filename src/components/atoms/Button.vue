<template>
  <button :class="`${className}`">
    <component :is="props.leftIcon" class="middle" />
    {{ buttonText }}
    <component :is="props.rightIcon" class="right-middle"/>
  </button>
</template>

<script setup>

  const props = defineProps({
    buttonText: {
      type: String,
      default: 'Action button'
    },
    className: {
      type: String,
      required: true
    },
    
    leftIcon: Function,
    rightIcon: Function
  })
</script>