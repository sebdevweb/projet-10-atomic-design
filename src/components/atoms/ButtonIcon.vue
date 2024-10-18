<template>
  <button :class="`${className}`">
    <component :is="props.iconButton"/>
  </button>
</template>



<script setup>

  const props = defineProps({
    iconButton: Function,
    className: {
      type: String,
      required: true,
    }
  })

</script>