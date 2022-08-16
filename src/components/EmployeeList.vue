<template>
  <el-row class="main-container">
    <el-row class="header-container">
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <h1 class="header-title">{{$t('listTitle')}}</h1>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <el-button @click="handleAddClick()" type="success" class="add-btn">{{$t('listAddButton')}}</el-button>
      </el-col>
    </el-row>
    <el-row class="table-container">
      <el-table :data="tableData" max-height="1000px">
        <el-table-column prop="id" :label="$t('idLabel')" width="260" align="center" fixed></el-table-column>
        <el-table-column :label="$t('personalInformationTitle')" align="center">
          <el-table-column prop="firstName" :label="$t('firstNameLabel')" width="150"></el-table-column>
          <el-table-column prop="lastName" :label="$t('lastNameLabel')" width="150"></el-table-column>
          <el-table-column prop="dob" :label="$t('dobLabel')" width="150"></el-table-column>
          <el-table-column prop="gender" :label="$t('genderLabel')" width="150"></el-table-column>
          <el-table-column prop="mobile" :label="$t('mobileLabel')" width="150"></el-table-column>
          <el-table-column prop="email" :label="$t('emailLabel')" width="150"></el-table-column>
          <el-table-column prop="address.current" :label="$t('currentAddressLabel')" width="150"></el-table-column>
          <el-table-column prop="address.permanent" :label="$t('permanentAddressLabel')" width="150"></el-table-column>
          <el-table-column prop="city" :label="$t('cityLabel')" width="150"></el-table-column>
          <el-table-column prop="state" :label="$t('stateLabel')" width="150"></el-table-column>
          <el-table-column prop="zipCode" :label="$t('zipCodeLabel')" width="150"></el-table-column>
        </el-table-column>
        <el-table-column :label="$t('employeeDetailsTitle')" align="center">
          <el-table-column prop="employeeDetails.department" :label="$t('departmentLabel')" width="150"></el-table-column>
          <el-table-column prop="employeeDetails.position" :label="$t('positionLabel')" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.skills" :label="$t('skillsLabel')" width="150">
            <template slot-scope="scope">{{ scope.row.employeeDetails.skills.join(', ') }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.type" :label="$t('typeLabel')" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.salary" :label="$t('salaryLabel')" width="150" align="right">
            <template slot-scope="scope">{{ scope.row.employeeDetails.salary }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.isContract" :label="$t('contractLabel')" width="150">
            <template slot-scope="scope">{{ scope.row.employeeDetails.isContract }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.startDate" :label="$t('contractStartLabel')" width="150">
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.endDate" :label="$t('contractEndLabel')" width="150">
          </el-table-column>
        </el-table-column>
        <el-table-column :label="$t('bankDetailsTitle')" align="center">
          <el-table-column prop="bankDetails.bank" :label="$t('bankNameLabel')" width="150"></el-table-column>
          <el-table-column prop="bankDetails.branch" :label="$t('branchNameLabel')" width="150">
          </el-table-column>
          <el-table-column prop="bankDetails.accountNumber" :label="$t('accountNumberLabel')" width="150">
          </el-table-column>
          <el-table-column prop="bankDetails.ifsc" :label="$t('ifscLabel')" width="150"></el-table-column>
        </el-table-column>
        <el-table-column :label="$t('tableActionsLabel')" fixed="right" width="180" align="center">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" size="mini">{{$t('editButton')}}</el-button>
            <el-button @click="handleDeleteClick(scope.row.id)" type="danger" size="mini">{{$t('deleteButton')}}</el-button>
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
          this.$message({ type: 'success', message: this.$t('deleteMessage') })
        }).catch(() => {
          this.$message({ type: 'info', message: this.$t('deleteCancelMessage') })
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
      this.$message({ type: 'success', message: this.$t('saveMessageStart')+  ` ` + `${dataIndex !== -1 ? this.$t('updateMessage') : this.$t('addMessage')}` + ` ` + this.$t('saveMessageEnd') })
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