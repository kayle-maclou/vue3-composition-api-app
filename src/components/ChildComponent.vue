<template>
  <br />
  <header>I am a child component:</header>
  <div>
    {{ messageFromParent }}
  </div>

  <div>
    <button @click="buttonClickHandler">Send event to parent component</button>
  </div>
</template>

<script setup>
defineProps({
  messageFromParent: String
})

const myEventEmitter = defineEmits(['myEvent'])

const buttonClickHandler = () => myEventEmitter('myEvent', 'some data')
</script>

<style lang="scss" scoped></style>
