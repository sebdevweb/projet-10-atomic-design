<template>
  <div class="custom-select">
    <select>
      <option>Open this select menu</option>
      <option>GitHub</option>
      <option>Instagram</option>
      <option>Facebook</option>
      <option>LinkedIn</option>
      <option>Twitter</option>
      <option>Reddit</option>
    </select>
  </div>
</template>


<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import { ChevronDownIcon }  from '@heroicons/vue/20/solid'

  const dropDown = ref(null)

  const selectedOption = ref(null)
  
  const mappedSelectedOption = computed(() => {
    return (selectedOption.value?.name || selectedOption.value || 'Please select something')
  })

  const toggleOptionSelect = (option) => {
    selectedOption.value = option
    setTimeout(() => {

      isDropDownVisisble.value = false
    }, 300)
  }

  const isDropDownVisisble = ref(false)
  
  const props = defineProps({
    options: {
      type: Array,
      required: true
    }
  })
  
  const closeDropDown = (element) => {
    if (!dropDown.value.contains(element.target)) {
      isDropDownVisisble.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('click', closeDropDown)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropDown)

  })

</script>