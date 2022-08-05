<template>
  <el-row class="form-container">
    <h1>Add New Employee Details</h1>
    <el-form v-model="pageData" ref="form">
      <el-row class="personal-information">
        <h4>Personal Information:</h4>
        <el-form-item label="First Name">
          <el-input type="text" v-model="pageData.firstName"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input type="text" v-model="pageData.lastName"></el-input>
        </el-form-item>
        <el-form-item label="Date Of Birth">
          <el-date-picker type="date" v-model="pageData.dob" placeholder="Date" value-format="dd/MM/yyyy"></el-date-picker>
        </el-form-item>
        <el-form-item label="Gender">
          <el-radio v-model="pageData.gender" label="male">Male</el-radio>
          <el-radio v-model="pageData.gender" label="female">Female</el-radio>
        </el-form-item>
        <el-form-item label="Mobile No.">
          <el-input type="text" v-model="pageData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input type="text" v-model="pageData.email"></el-input>
        </el-form-item>
        <el-form-item label="Current Address">
          <el-input type="textarea" v-model="pageData.address.current" placeholder="Address">
          </el-input>
        </el-form-item>
        <el-form-item label="Permanent Address">
          <el-input type="textarea" v-model="pageData.address.permanent" placeholder="Address">
          </el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input type="text" v-model="pageData.city"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-select placeholder="State" v-model="pageData.state" style="width:250px">
            <el-option v-for="(item, index) in states" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Zip Code">
          <el-input type="text" v-model="pageData.zipCode"></el-input>
        </el-form-item>
        <el-form-item label="Skills">
          <el-select v-model="pageData.skills" multiple placeholder="Select" style="width:250px">
            <el-option v-for="(item, index) in skills" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row class="employee-details">
        <h4>Employee Details:</h4>
        <el-form-item label="Department">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.department" style="width:250px">
            <el-option v-for="(item, index) in departments" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Position">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.position" style="width:250px">
            <el-option v-for="(item, index) in positions" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Employee Type">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.type" style="width:250px">
            <el-option v-for="(item, index) in types" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Salary">
          <!--pattern-->
          <el-input type="text" v-model="pageData.employeeDetails.salary"></el-input>
        </el-form-item>
        <el-form-item label="is Contract">
          <!--Start and End Date-->
          <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="pageData.employeeDetails.isContract">
          </el-switch>
        </el-form-item>
        <div class="is-contract" v-if="pageData.employeeDetails.isContract">
          {{ pageData.employeeDetails.contract.startDate }}
          <el-form-item label="From">
            <el-date-picker type="date" placeholder="Join Date" value-format="dd/MM/yyyy" style="width:250px"
              v-model="pageData.employeeDetails.contract.startDate"></el-date-picker>
          </el-form-item>
          {{ pageData.employeeDetails.contract.endDate }}
          <el-form-item label="To">
            <el-date-picker type="date" placeholder="End Date" value-format="dd/MM/yyyy" style="width:250px"
              v-model="pageData.employeeDetails.contract.endDate"></el-date-picker>
          </el-form-item>
        </div>
      </el-row>
      <el-row class="bank-details">
        <h4>Bank Details:</h4>
        <el-form-item label="Bank Name">
          <el-input type="text" v-model="pageData.bankDetails.bank"></el-input>
        </el-form-item>
        <el-form-item label=" Branch Name">
          <el-input type="text" v-model="pageData.bankDetails.branch"></el-input>
        </el-form-item>
        <el-form-item label="Account Number">
          <!--pattern-->
          <el-input type="text" v-model="pageData.bankDetails.accountNumber"></el-input>
        </el-form-item>
        <el-form-item label="IFSC Code">
          <el-input type="text" v-model="pageData.bankDetails.ifsc"></el-input>
        </el-form-item>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import Constants from '@/constants'
export default {
  name: 'EmployeeForm',
  data() {
    return {
      states: Constants.STATE_LIST,
      skills: Constants.SKILL_LIST,
      departments: Constants.DEPARTMENT_LIST,
      positions: Constants.POSITION_LIST,
      types: Constants.EMPLOYEE_TYPE_LIST,
      pageData: {
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        address: {
          current: '',
          permanent: ''
        },
        city: '',
        state: '',
        zipCode: '',
        mobile: '',
        email: '',
        skills: [],
        employeeDetails: {
          department: '',
          position: '',
          type: '',
          salary: '',
          isContract: false,
          contract: {
            startDate: '',
            endDate: ''
          }
        },
        bankDetails: {
          bank: '',
          branch: '',
          accountNumber: '',
          ifsc: ''
        }
      },
      storedEmployeeCollection: []
    }
  },
  methods: {
    clearForm() {
      this.$refs.form.reset()
    },
    handleSubmit() {
      // this.storedEmployeeCollection.push(this.employee)
      // this.clearForm()
      // this.employee = {
      //   firstName: "",
      //   lastName: "",
      //   dob: "",
      //   gender: "",
      //   address: {
      //     current: "",
      //     permanent: ""
      //   },

      //   city: "",
      //   state: "",
      //   zipCode: "",
      //   mobile: "",
      //   email: "",
      //   skills: [],
      //   employeeDetails: {
      //     department: "",
      //     position: "",
      //     type: "",
      //     salary: "",
      //     dateOfJoining: "",
      //     contract: {
      //       startDate: "",
      //       endDate: ""
      //     }
      //   },
      //   bankDetails: {
      //     bank: "",
      //     branch: "",
      //     accountNumber: "",
      //     ifsc: ""
      //   }
      // }
      // return console.log(JSON.stringify(this.storedEmployeeCollection))
    }
  }
}
</script>

<style>
.form-container {
  margin: auto;
  width: 40%;
  padding: 10px;
}

.el-button {
  display: flex;
  justify-content: center;
  align-items: center
}
</style>