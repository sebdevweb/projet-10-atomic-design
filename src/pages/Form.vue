<template>
  <h1>Form Input component</h1>
  <div class="form">
    <div class="form__container">
      <h3>Input type text</h3>
      <form action="">
        <div class="form__container--item">
          <InputForm class-name="default" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputForm class-name="error" input-placeholder="error" readonly/>
          <label>Error input</label>
        </div>
        
        <div class="form__container--item">
          <InputForm class-name="success" input-placeholder="Successfull" readonly />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputForm class-name="disabled" input-placeholder="Disabled" readonly/>
          <label>Disabled input</label>
        </div>
      </form>
      <h3>Input type password <span>(with right icon)</span></h3>
      <form action="">
        <div class="form__container--item">
          <InputForm class-name="default right-icon" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputForm class-name="error" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Error input</label>
        </div>
        <div class="form__container--item">
          <InputForm class-name="success" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputForm class-name="disabled" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Disabled input</label>
        </div>
      </form>
      
    </div>
  </div>
</template>
  
  
<script setup>
  import InputForm from '../components/atoms/InputForm.vue';
  import { EyeSlashIcon } from '@heroicons/vue/20/solid'
  import { EyeIcon } from '@heroicons/vue/20/solid'
</script>