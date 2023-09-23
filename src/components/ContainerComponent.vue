<template>
  <div>
    <header>CONTAINER Component:</header>
    <Suspense>
      <DataLoadingComponent></DataLoadingComponent>
      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup>
import DataLoadingComponent from './DataLoadingComponent.vue'
</script>

<style lang="scss" scoped></style>
