<template>
  <el-row form-main-container>
    <el-row class="form-container">
      <el-row class="form-header">
        <h1>{{ isSubmit ? 'Add New Employee' : 'Edit Employee Details' }}</h1>
      </el-row>
      <el-form ref="formData" :rules="formRules" :model="formData">
        <el-row class="personal-information">
          <h4>Personal Information:</h4>
          <el-form-item prop="firstName" label="First Name">
            <el-input v-model="formData.firstName" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="lastName" label="Last Name">
            <el-input v-model="formData.lastName" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="dob" label="Date Of Birth">
            <el-date-picker v-model="formData.dob" type="date" placeholder="Date" value-format="dd/MM/yyyy">
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="gender" label="Gender">
            <el-radio-group v-model="formData.gender">
              <el-radio label="male">Male</el-radio>
              <el-radio label="female">Female</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="mobile" label="Mobile No.">
            <el-input v-model.number="formData.mobile" type="text">
              <template slot="prepend">+91</template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email" label="Email">
            <el-input v-model="formData.email" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="address.current" label="Current Address">
            <el-input v-model="formData.address.current" type="textarea" placeholder="Address">
            </el-input>
          </el-form-item>
          <el-form-item prop="address.permanent" label="Permanent Address">
            <el-input v-model="formData.address.permanent" type="textarea" placeholder="Address">
            </el-input>
          </el-form-item>
          <el-form-item prop="city" label="City">
            <el-input v-model="formData.city" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="state" label="State">
            <el-select v-model="formData.state" placeholder="State">
              <el-option v-for="(item, index) in states" :key="index" :value="item" :label="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="zipCode" label="Zip Code">
            <el-input v-model="formData.zipCode" type="text"></el-input>
          </el-form-item>
        </el-row>
        <el-row class="employee-details">
          <h4>Employee Details:</h4>
          <el-form-item prop="employeeDetails.department" label="Department">
            <el-select v-model="formData.employeeDetails.department" placeholder="Select">
              <el-option v-for="(item, index) in departments" :key="index" :value="item" :label="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="employeeDetails.position" label="Position">
            <el-select v-model="formData.employeeDetails.position" placeholder="Select">
              <el-option v-for="(item, index) in positions" :key="index" :value="item" :label="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="employeeDetails.type" label="Employee Type">
            <el-select v-model="formData.employeeDetails.type" placeholder="Select">
              <el-option v-for="(item, index) in types" :key="index" :value="item" :label="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="employeeDetails.skills" label="Skills">
            <el-select v-model="formData.employeeDetails.skills" multiple placeholder=" Select">
              <el-option v-for="(item, index) in skillsList" :key="index" :value="item.name" :label="item.displayName">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="employeeDetails.salary" label="Salary">
            <el-input v-model.number="formData.employeeDetails.salary" type="text">
              <template slot="append">PA</template>
            </el-input>
          </el-form-item>
          <el-form-item label="is Contract">
            <el-switch v-model="formData.employeeDetails.isContract" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-row v-if="formData.employeeDetails.isContract" class="is-contract">
            <el-form-item label="From">
              <el-date-picker v-model="formData.employeeDetails.contract.startDate" type="date" placeholder="Join Date"
                value-format="dd/MM/yyyy">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="To">
              <el-date-picker type="date" v-model="formData.employeeDetails.contract.endDate" placeholder="End Date"
                value-format="dd/MM/yyyy">
              </el-date-picker>
            </el-form-item>
          </el-row>
        </el-row>
        <el-row class="bank-details">
          <h4>Bank Details:</h4>
          <el-form-item prop="bankDetails.bank" label="Bank Name">
            <el-input v-model="formData.bankDetails.bank" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="bankDetails.branch" label="Branch Name">
            <el-input v-model="formData.bankDetails.branch" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="bankDetails.accountNumber" label="Account Number">
            <el-input v-model.number="formData.bankDetails.accountNumber" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="bankDetails.ifsc" label="IFSC Code">
            <el-input v-model="formData.bankDetails.ifsc" type="text"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-row class="form-footer">
            <el-button @click="handleCancelClick">Cancel</el-button>
            <el-button @click="isSubmit == true ? handleSaveClick() : handleUpdateClick()" type="success">
              {{ isSubmit ? 'Submit' : 'Update' }}
            </el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </el-row>
  </el-row>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import Constants from '@/constants'
export default {
  name: 'employeeForm',
  props: {
    record: {
      required: true,
      type: Object
    }
  },
  mounted() {
    if (!_.isEmpty(this.record._id)) { this.formData = this.record }
  },
  data() {
    return {
      isSubmit: (_.isEmpty(this.record._id)) ? true : false,
      states: Constants.STATE_LIST,
      skillsList: Constants.SKILL_LIST,
      departments: Constants.DEPARTMENT_LIST,
      positions: Constants.POSITION_LIST,
      types: Constants.EMPLOYEE_TYPE_LIST,
      formData: Constants.EMPLOYEE_DETAIL,
      formRules: Constants.EMPLOYEE_FORM_RULES
    }
  },
  methods: {
    handleCancelClick() {
      this.$emit('cancel')
    },
    handleSaveClick() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.formData._id = uuidv4()
          const tempObj = _.cloneDeep(this.formData)
          this.$emit('save', tempObj)
          this.$refs.formData.resetFields()
        }
        else {
          this.$message({ type: 'error', message: 'Please enter required fields' })
        }
      })
    },
    handleUpdateClick() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.$emit('update', this.formData)
        }
        else {
          this.$message({ type: 'error', message: 'Please enter required fields' })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-text-input {
  width: 500px;
}

.el-button.el-button--default {
  margin-left: 320px;
}
</style>