<template>
  <div id="app">
    <EmployeeForm />
  </div>
</template>
<script>
import mainComponent from './components/mainComponent.vue'
import EmployeeForm from './components/EmployeeForm.vue'
export default {
  name: 'App',
  components: {
    mainComponent,
    EmployeeForm
  }
}
</script>
