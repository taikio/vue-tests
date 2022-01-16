<template>
  <div id="app">
   <h1>introdução ao vue test utils</h1>
   <div class="component-box">
    <search-input v-model="search" />
   </div>

   <div class="component-box">
     <toggle-button label="Deseja habilitar esta opção?" v-model="toggle" />
   </div>
  </div>
</template>

<script>
import SearchInput from './components/search-input/index.vue'
import ToggleButton from './components/toggle-button/index.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
    ToggleButton
  },
  data() {
    return {
      search: '',
      toggle: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.component-box {
  width: 30%;
  margin-top: 16px;
}
</style>
