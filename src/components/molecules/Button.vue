<template>
  <button
    :class="`${className}
      ${large ? 'large' : ''}
      ${medium ? 'medium' : ''}
      ${small ? 'small' : ''}
      ${primary ? 'primary' : ''}
      ${secondary ? 'secondary' : ''}
      ${tertiary ? 'tertiary' : ''}
    `"
  >
    <component :is="props.leftIcon" class="middle" />
    {{ buttonText }}
    <component :is="props.rightIcon" class="right-middle"/>
  </button>
</template>

<script setup>

  const props = defineProps({
    buttonText: {
      type: String,
      required: true,
      default: 'Action button'
    },
    className: {
      type: String,
      required: true
    },
    leftIcon: Object,
    rightIcon: Object
  })
</script>