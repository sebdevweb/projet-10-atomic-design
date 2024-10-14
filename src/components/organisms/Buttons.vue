<template>
  <div class="buttons">
    <h2>Buttons</h2>
    <!-- LARGE SIZE -->
    <div class="buttons_container">
      <h3>Size L</h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons_container">
      <h3>Size L <span>(with left icon)</span></h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons_container">
      <h3>Size L <span>(with right icon)</span></h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="large primary" disabled :rightIcon="ArrowRightIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <!-- MEDIUM SIZE -->
    <div class="buttons_container">
      <h3>Size M</h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons_container">
      <h3>Size M <span>(with left icon)</span></h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons_container">
      <h3>Size M <span>(with right icon)</span></h3>
      <div class="buttons_container-line">
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons_container-line--group">
          <Button buttonText="Click on me" className="medium primary" disabled :rightIcon="ArrowRightIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import Button from '../molecules/Button.vue'
  import { PlusIcon } from '@heroicons/vue/20/solid'
  import { ArrowRightIcon } from '@heroicons/vue/20/solid'
</script>