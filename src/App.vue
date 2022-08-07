<template>
  <div id="app">
    <EmployeeDetailsManager />
    <!--  <EmployeeForm />  -->
  </div>
</template>
<script>
import EmployeeDetailsManager from './components/EmployeeDetailsManager.vue'
import EmployeeForm from './components/EmployeeForm.vue'
export default {
  name: 'App',
  components: {
    EmployeeDetailsManager,
    EmployeeForm
  }
}
</script>
