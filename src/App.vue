<template>
  <el-row id="app">
    <employeeList />
    <!-- <EmployeeDetailsManager /> -->
  </el-row>
</template>
<script>
import employeeList from './components/employeeList.vue'
// import EmployeeDetailsManager from './components/EmployeeDetailsManager.vue'
export default {
  name: 'App',
  components: {
    // EmployeeDetailsManager,
    employeeList
  }
}
</script>
