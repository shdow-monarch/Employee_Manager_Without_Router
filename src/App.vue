<template>
  <el-row id="app">
<<<<<<< HEAD
    <employee-list></employee-list>
  </el-row>
</template>
<script>
import EmployeeList from './components/EmployeeList.vue'
export default {
  name: 'App',
  components: {
    EmployeeList
=======
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
>>>>>>> a7d438658fa8823a31e498d55b67da82d992d5ae
  }
}
</script>
