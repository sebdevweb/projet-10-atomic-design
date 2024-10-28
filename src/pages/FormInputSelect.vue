<template>
  <h1>Input Select component</h1>
  <div class="form">
    <div class="form__container">
      <h3>Select simple option</h3>
      <form action="" class="select__items">
        <div class="form__container--item">
          <label>Default select</label>
          <InputSelect 
          :options="options"
          />
        </div>
        <div class="form__container--item">
          <label>Default select</label>
          <InputSelect 
            :options="options2"
          />
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
  import InputSelect from '../components/atoms/InputSelect.vue'

  const options = ref([
    {
      name: 'One',
      value: 1
    },
    {
      name: 'Two',
      value: 2
    },
    {
      name: 'Three',
      value: 3
    },
    {
      name: 'Four',
      value: 4
    }
  ])

  const options2 = ref([
    {
      name: 'One',
      value: 1
    },
    {
      name: 'Two',
      value: 2
    },
    {
      name: 'Three',
      value: 3
    },
    {
      name: 'Four',
      value: 4
    }
  ])
</script>