<template>
  <h1>Buttons Component</h1>
  <div class="buttons">
    <ButtonColorSelect />
    <h2>Buttons Large Size</h2>
    <!-- LARGE SIZE -->
    <div class="buttons__container">
      <h3>Size L</h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="large primary blue" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large secondary blue" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large tertiary blue" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size L <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="large primary red" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large secondary red" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large tertiary red" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size L <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="large primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="large primary" disabled :rightIcon="ArrowRightIcon" />
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
          <Button buttonText="Click on me" className="medium primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size M <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="medium primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size M <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="medium primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="medium primary" disabled :rightIcon="ArrowRightIcon" />
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
          <Button buttonText="Click on me" className="small primary" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small secondary" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small tertiary" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small primary" disabled />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size S <span>(with left icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="small primary" :leftIcon="PlusIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small secondary" :leftIcon="PlusIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small tertiary" :leftIcon="PlusIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small primary" disabled :leftIcon="PlusIcon" />
          <label>Disabled button</label>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <h3>Size S <span>(with right icon)</span></h3>
      <div class="buttons__container--line">
        <div class="buttons__container--line-group">
          <Button buttonText="Click on me" className="small primary" :rightIcon="ArrowRightIcon" />
          <label>Primary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small secondary" :rightIcon="ArrowRightIcon" />
          <label>Secondary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small tertiary" :rightIcon="ArrowRightIcon" />
          <label>Tertiary button</label>
        </div>
        <div class="buttons__container--line-group">
          <Button className="small primary" disabled :rightIcon="ArrowRightIcon" />
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
import ButtonColorSelect from '../molecules/ButtonColorSelect.vue';
</script>