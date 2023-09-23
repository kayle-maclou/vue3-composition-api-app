<template>
  <br />
  <header>DataLoadingComponent:</header>
  <br />
  <header>TODOS:</header>
  <div v-for="todo in todos" :key="todo.id">
    {{ todo?.todo }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const todos = ref([{ todo: 'dummy todo', id: 1 }])
try {
  const fetchResponse = await fetch('https://dummyjson.com/todos')
  const data = await fetchResponse.json()
  todos.value = data.todos
  console.log('--------', data.todos)
} catch (error) {
  console.log(error.message)
}
</script>

<style lang="scss" scoped></style>
