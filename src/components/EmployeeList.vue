<template>
  <el-row class="main-container">
    <el-row class="header-container">
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <h1 class="header-title">{{$t('listTitle')}}</h1>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <el-button @click="handleAddClick()" type="success" class="add-btn">Add Employee</el-button>
      </el-col>
    </el-row>
    <el-row class="table-container">
      <el-table :data="tableData" max-height="1000px">
        <el-table-column prop="id" label="id" width="260" align="center" fixed></el-table-column>
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
            <template slot-scope="scope">{{ scope.row.employeeDetails.salary }}</template>
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
        <el-table-column label="Actions" fixed="right" width="180" align="center">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" size="mini">Edit</el-button>
            <el-button @click="handleDeleteClick(scope.row.id)" type="danger" size="mini">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="dialog-container">
      <el-dialog v-if="isShowDialog" :visible.sync="isShowDialog" :fullscreen="true">
        <employee-form
          v-if="isShowDialog"
          :record="record"
          @save="handleSaveClick($event)"
          @cancel="handleCancelClick">
        </employee-form>
      </el-dialog>
    </el-row>
  </el-row>
</template>
<script>
import EmployeeForm from './EmployeeForm.vue'
export default {
  name: 'EmployeeList',
  data() {
    return {
      tableData: [],
      record: {},
      isShowDialog: false,
    }
  },
  components: {
    EmployeeForm
  },
  mounted() {
    this.tableData = JSON.parse(localStorage.getItem('employeeList')) || []
  },
  methods: {
    handleAddClick () {
      this.isShowDialog = true
    },
    handleEditClick (row) {
      this.record = row
      this.isShowDialog = true
    },
    handleDeleteClick (rowId) {
      this.$confirm('This will delete employee information. Continue?',
        'Warning', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          const index = this.tableData.findIndex(item => item.id === rowId)
          this.tableData.splice(index, 1)
          localStorage.setItem('employeeList', JSON.stringify(this.tableData))
          this.$message({ type: 'success', message: 'Employee information deleted' })
        }).catch(() => {
          this.$message({ type: 'info', message: 'Delete canceled' })
        })
    },
    handleSaveClick (formData) {
      const dataIndex = this.tableData.findIndex(item => item.id === formData.id)
      if (dataIndex !== -1) {
        this.tableData.splice(dataIndex, 1, formData)
      } else {
        this.tableData.push(formData)
      }
      localStorage.setItem('employeeList', JSON.stringify(this.tableData))
      this.isShowDialog = false
      this.$message({ type: 'success', message: `Employee information ${dataIndex !== -1 ? 'updated' : 'added'} successfully` })
    },
    handleCancelClick () {
      this.isShowDialog = false
      this.record = {}
    }
  }
}
</script>

<style>
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

.el-dialog.is-fullscreen {
  display: flex;
  margin: auto;
  place-content: center;
}
</style>