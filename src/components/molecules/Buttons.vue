<template>
  <h1>Button Component</h1>
  <div class="buttons" :class="currentTheme">
    <hr>
    <div class="container__switch--color">
      <a href="#" class="select__color green" :class="{'active': currentTheme === 'green'}" @click="switchTheme('green')"></a>
      <a href="#" class="select__color blue" :class="{'active': currentTheme === 'blue'}" @click="switchTheme('blue')"></a>
      <a href="#" class="select__color red" :class="{'active': currentTheme === 'red'}" @click="switchTheme('red')"></a>
      <a href="#" class="select__color orange" :class="{'active': currentTheme === 'orange'}" @click="switchTheme('orange')"></a>
      <a href="#" class="select__color yellow" :class="{'active': currentTheme === 'yellow'}" @click="switchTheme('yellow')"></a>
      <a href="#" class="select__color purple" :class="{'active': currentTheme === 'purple'}" @click="switchTheme('purple')"></a>
      <a href="#" class="select__color black" :class="{'active': currentTheme === 'black'}" @click="switchTheme('black')"></a>
    </div>
    <h2>Buttons Large Size</h2>
    <!-- LARGE SIZE -->
    <div class="buttons__container">
      <h3>Size L</h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button  buttonText="Click on me" class-name="primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="secondary " />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="tertiary " />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size L <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="primary " :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="secondary " :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="tertiary " :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size L <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="primary" disabled :rightIcon="ArrowRightIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <hr>
    <!-- MEDIUM SIZE -->
    <h2>Buttons Medium Size</h2>
    <div class="buttons__container">
      <h3>Size M</h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="medium primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size M <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="medium primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size M <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="medium primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="medium primary" disabled :rightIcon="ArrowRightIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <hr>
    <!-- MEDIUM SMALL -->
    <h2>Buttons Small Size</h2>
    <div class="buttons__container">
      <h3>Size S</h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="small primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size S <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="small primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size S <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" class-name="small primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button class-name="small primary" disabled :rightIcon="ArrowRightIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
  import Button from '../atoms/Button.vue'
  import { PlusIcon } from '@heroicons/vue/20/solid'
  import { ArrowRightIcon } from '@heroicons/vue/20/solid'

  const currentTheme = ref('theme-color')

  function switchTheme(theme) {
    localStorage.setItem('theme-color', theme);
    this.currentTheme = localStorage.getItem('theme-color')
  }
</script>