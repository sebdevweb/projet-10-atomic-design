<template>
  <h1>Buttons Icons Component</h1>
  <div class="buttonsIcons" :class="currentTheme">
    <hr>
    <div class="container__switch--color">
      <a href="#" class="select__color green" :class="{'active': currentTheme === 'green'}" @click="switchTheme('green')"></a>
      <a href="#" class="select__color blue" :class="{'active': currentTheme === 'blue'}" @click="switchTheme('blue')"></a>
      <a href="#" class="select__color red" :class="{'active': currentTheme === 'red'}" @click="switchTheme('red')"></a>
      <a href="#" class="select__color orange" :class="{'active': currentTheme === 'orange'}" @click="switchTheme('orange')"></a>
      <a href="#" class="select__color purple" :class="{'active': currentTheme === 'purple'}" @click="switchTheme('purple')"></a>
      <a href="#" class="select__color black" :class="{'active': currentTheme === 'black'}" @click="switchTheme('black')"></a>
    </div>
    <h2>Buttons Large Size</h2>
    <!-- LARGE SIZE -->
    <div class="buttonsIcons__container">
      <h3>Size L</h3>
      <div class="buttonsIcons__container--line">
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary" :iconButton="StarIcon" />
          <label for="">Primary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon secondary " :iconButton="StarIcon" />
          <label for="">Secondary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon tertiary " :iconButton="StarIcon" />
          <label for="">Tertiary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary " :iconButton="StarIcon" disabled />
          <label for="">Disabled button icon</label>
        </div>
      </div>
    </div>
    <hr>
    <!-- MEDIUM SIZE -->
    <h2>Buttons Medium Size</h2>
    <div class="buttonsIcons__container">
      <h3>Size M</h3>
      <div class="buttonsIcons__container--line">
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary medium" :iconButton="StarIcon" />
          <label for="">Primary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon secondary medium" :iconButton="StarIcon" />
          <label for="">Secondary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon tertiary medium" :iconButton="StarIcon" />
          <label for="">Tertiary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary medium" :iconButton="StarIcon" disabled />
          <label for="">Disabled button icon</label>
        </div>
      </div>
    </div>
    <hr>
    <!-- SMALL SIZE -->
    <h2>Buttons Small Size</h2>
    <div class="buttonsIcons__container">
      <h3>Size S</h3>
      <div class="buttonsIcons__container--line">
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary small" :iconButton="StarIcon" />
          <label for="">Primary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon secondary small" :iconButton="StarIcon" />
          <label for="">Secondary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon tertiary small" :iconButton="StarIcon" />
          <label for="">Tertiary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary small" :iconButton="StarIcon" disabled />
          <label for="">Disabled button icon</label>
        </div>
      </div>
    </div>
    <hr>
    <!-- EXTRA SMALL SIZE -->
    <h2>Buttons XSmall Size</h2>
    <div class="buttonsIcons__container">
      <h3>Size XS</h3>
      <div class="buttonsIcons__container--line">
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary xsmall" :iconButton="StarIcon" />
          <label for="">Primary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon secondary xsmall" :iconButton="StarIcon" />
          <label for="">Secondary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon tertiary xsmall" :iconButton="StarIcon" />
          <label for="">Tertiary button icon</label>
        </div>
        <div class="buttonsIcons__container--line-group">
          <ButtonIcon class-name="button-icon primary xsmall" :iconButton="StarIcon" disabled />
          <label for="">Disabled button icon</label>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  import ButtonIcon from '../components/atoms/ButtonIcon.vue'
  import { StarIcon } from '@heroicons/vue/20/solid'

  const currentTheme = ref('theme-color')

  function switchTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.currentTheme = localStorage.getItem('theme-color')
  }

  
</script>