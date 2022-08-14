<template>
  <el-row class="main-container">
    <el-row class="header-container">
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <h1 class="header-title">Employee Details</h1>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <el-button @click="handleDialog()" type="success" class="add-btn">Add Employee</el-button>
      </el-col>
    </el-row>
    <el-row class="table-container">
      <el-table :data="tableData" max-height="1000px">
        <el-table-column prop="_id" label="_id" width="260" align="center" fixed></el-table-column>
        <el-table-column label="Personal Information" align="center">
          <el-table-column prop="firstName" label="First Name" width="150"></el-table-column>
          <el-table-column prop="lastName" label="Last Name" width="150"></el-table-column>
          <el-table-column prop="dob" label="DOB" width="150"></el-table-column>
          <el-table-column prop="gender" label="Gender" width="150"></el-table-column>
          <el-table-column prop="mobile" label="Mobile" width="150"></el-table-column>
          <el-table-column prop="email" label="Email" width="150"></el-table-column>
          <el-table-column prop="address.current" label="Current Address" width="150"></el-table-column>
          <el-table-column prop="address.permanent" label="Permanent Address" width="150"></el-table-column>
          <el-table-column prop="city" label="City" width="150"></el-table-column>
          <el-table-column prop="state" label="State" width="150"></el-table-column>
        </el-table-column>
        <el-table-column label="Employee Information" align="center">
          <el-table-column prop="employeeDetails.department" label="Department" width="150"></el-table-column>
          <el-table-column prop="employeeDetails.position" label="Position" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.skills" label="Skills" width="150">
            <template slot-scope="scope">{{ scope.row.employeeDetails.skills.join(', ') }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.type" label="Employee Type" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.salary" label="Salary" width="150" align="right">
            <!-- <template slot-scope="scope">{{ scope.row.employeeDetails.salary.join('.00 PA') }}</template> -->
          </el-table-column>
          <el-table-column prop="employeeDetails.isContract" label="Is Contract" width="150">
            <template slot-scope="scope">{{ scope.row.employeeDetails.isContract }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.startDate" label="Start Date" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.endDate" label="End Date" width="150">
          </el-table-column>
        </el-table-column>
        <el-table-column label="Bank Details" align="center">
          <el-table-column prop="bankDetails.bank" label="Bank Name" width="150"></el-table-column>
          <el-table-column prop="bankDetails.branch" label="Branch Name" width="150">
          </el-table-column>
          <el-table-column prop="bankDetails.accountNumber" label="Account Number" width="150">
          </el-table-column>
          <el-table-column prop="bankDetails.ifsc" label="IFSC" width="150"></el-table-column>
        </el-table-column>
        <el-table-column label="Actions" fixed="right" width="180">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row._id)" size="mini">Edit</el-button>
            <el-button @click="handleDeleteClick(scope.row._id)" type="danger" size="mini">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="dialog-container">
      <el-dialog v-if="isDialog" :visible.sync="isDialog" :fullscreen="true">
        <employeeForm v-if="isDialog" :record="record" @update="handleUpdateClick($event)" @cancel="handleCancelClick"
          @save="handleSaveClick($event)">
        </employeeForm>
      </el-dialog>
    </el-row>
  </el-row>
</template>
<script>
import employeeForm from './employeeForm.vue'
export default {
  name: 'employeeList',
  components: {
    employeeForm
  },
  mounted() {
    this.tableData = JSON.parse(localStorage.getItem('employeeList')) || []
  },
  data() {
    return {
      isDialog: false,
      id: '',
      tableData: [],
      record: {}
    }
  },
  methods: {
    handleDialog() {
      this.isDialog = true
      this.record = {}
    },
    handleCancelClick() {
      this.isDialog = false
      this.record = {}
      this.$message({ type: 'info', message: 'Action was canceled' })
    },
    handleSaveClick(formData) {
      if (formData._id === this.tableData.find((item) => { item._id })) {
        this.$message({ type: 'employee information already exist' })
      }
      else {
        this.tableData.push(formData)
        localStorage.setItem('employeeList', JSON.stringify(this.tableData))
        this.isDialog = false
        this.$message({
          type: 'success', message: 'Employee information added successfully'
        })
      }
    },
    handleDeleteClick(id) {
      const index = this.tableData.findIndex(item => item._id === id)
      this.$confirm('This will delete employee information. Continue?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        localStorage.setItem('employeeList', JSON.stringify(this.tableData))
        this.$message({
          type: 'success',
          message: 'Employee information deleted'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      })
    },
    handleEditClick(id) {
      this.id = id
      this.tableData.forEach((item) => {
        if (item._id === this.id) {
          this.record = item
          this.isDialog = true
        }
      })
    },
    handleUpdateClick(formData) {
      const index = this.tableData.findIndex(item => item._id === this.id)
      this.tableData.splice(index, 1, formData)
      localStorage.setItem('employeeList', JSON.stringify(this.tableData))
      this.isDialog = false
      this.$message({ type: 'success', message: 'Employee information updated successfully' })
      this.record = {}
    }
  }
}
</script>

<style scoped>
.header-title {
  text-align: left;
}

.add-btn {
  float: right;
  margin-top: 22px !important;
}

.header-container {
  text-align: center;
}

.main-container {
  padding: 0 10px;
}
</style>