<template>
  <div id="app">
    <formComponent />
  </div>
</template>
<script>
import mainComponent from './components/mainComponent.vue'
import formComponent from './components/formComponent.vue'
export default {
  name: 'App',
  components: {
    mainComponent,
    formComponent
  }
}
</script>
