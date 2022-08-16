<template>
  <el-row id="app">
    <employee-list></employee-list>
  </el-row>
</template>
<script>
import EmployeeList from './components/EmployeeList.vue'
export default {
  name: 'App',
  components: {
    EmployeeList
  }
}
</script>
