<template>
  <div class="app">
    <h1>Remote Vue App (Standalone)</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>

<style scoped>
.app {
  padding: 40px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}
</style>