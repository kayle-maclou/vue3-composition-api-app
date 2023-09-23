<template>
  <section>
    <header>My Second Vue 3 component</header>
    <ChildComponent
      messageFromParent="this is a message passed in from my parent component"
      @myEvent="MyEventHandler"
    ></ChildComponent>
  </section>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'

const MyEventHandler = (data) => {
  alert(`Recieved myEvent with data: ${data} `)
}
</script>

<style lang="scss" scoped></style>
