<template>
  <h1>Form Input Text component</h1>
  <div class="form">
    <div class="form__container">
      <h3>Input type text</h3>
      <form action="">
        <div class="form__container--item">
          <InputText class-name="default" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="error" input-placeholder="error" readonly/>
          <label>Error input</label>
        </div>
        
        <div class="form__container--item">
          <InputText class-name="success" input-placeholder="Successfull" readonly />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="disabled" input-placeholder="Disabled" readonly/>
          <label>Disabled input</label>
        </div>
      </form>
      <hr>
      <h3>Input type password <span>(with right icon)</span></h3>
      <form action="">
        <div class="form__container--item">
          <InputText class-name="default right-icon" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="error" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Error input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="success" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="disabled" input-type="password" value="password" :rightIcon="EyeSlashIcon" />
          <label>Disabled input</label>
        </div>
      </form>
      <hr>
      <h3>Input type text <span>(with left box icon)</span></h3>
      <form action="">
        <div class="form__container--item">
          <InputText class-name="default left-icon" input-type="text" value="" :leftIcon="LockClosedIcon" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="error left-icon" input-type="text" value="" :leftIcon="LockClosedIcon" />
          <label>Error input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="success left-icon" input-type="text" value="" :leftIcon="LockClosedIcon" />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="disabled left-icon" input-type="text" value="" :leftIcon="LockClosedIcon" />
          <label>Disabled input</label>
        </div>
      </form>
      <hr>
      <h3>Input type password <span>(with left box icon & right icon)</span></h3>
      <form action="">
        <div class="form__container--item">
          <InputText class-name="default left-icon right-icon" input-type="password" value="password" :leftIcon="LockClosedIcon" :rightIcon="EyeSlashIcon" />
          <label>Default input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="error left-icon right-icon" input-type="password" value="password" :leftIcon="LockClosedIcon" :rightIcon="EyeSlashIcon" />
          <label>Error input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="success left-icon right-icon" input-type="password" value="password" :leftIcon="LockClosedIcon" :rightIcon="EyeSlashIcon" />
          <label>Success input</label>
        </div>
        <div class="form__container--item">
          <InputText class-name="disabled left-icon right-icon" input-type="password" value="password" :leftIcon="LockClosedIcon" :rightIcon="EyeSlashIcon" />
          <label>Disabled input</label>
        </div>
      </form>
      
    </div>
  </div>
</template>
  
  
<script setup>
  import InputText from '../components/atoms/InputText.vue';
  import { EyeSlashIcon } from '@heroicons/vue/20/solid'
  import { EyeIcon } from '@heroicons/vue/20/solid'
  import { LockClosedIcon } from '@heroicons/vue/20/solid'
</script>