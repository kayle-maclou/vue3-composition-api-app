<template>
  <section>
    <header>My First Vue 3 component</header>
    <div class="counter">{{ counter }}</div>
    <button @click="buttonClickHandler">Increment</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)
const buttonClickHandler = () => counter.value++
</script>

<style lang="scss" scoped>
.counter {
  color: darkgreen;
  font-size: 24pt;
}
</style>
