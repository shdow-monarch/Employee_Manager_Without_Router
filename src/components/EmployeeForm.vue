<template>
  <el-row class="form-container">
    <h1>Add New Employee Details</h1>
    <el-form :model="pageData" ref="pageData">
      <!-- Should add :rules="rules" for validation-->
      <el-row class="personal-information">
        <h4>Personal Information:</h4>
        <el-form-item label="First Name" prop="firstName">
          <el-input type="text" v-model="pageData.firstName"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="lastName">
          <el-input type="text" v-model="pageData.lastName"></el-input>
        </el-form-item>
        <el-form-item label="Date Of Birth" prop="dob">
          <el-date-picker type="date" v-model="pageData.dob" placeholder="Date" value-format="dd/MM/yyyy">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Gender" prop="gender">
          <el-radio-group v-model="pageData.gender">
            <el-radio label="male">Male</el-radio>
            <el-radio label="female">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Mobile No." prop="mobile">
          <el-input type="text" v-model.number="pageData.mobile" maxlength="10">
            <template slot="prepend">+91</template>
          </el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input type="text" v-model="pageData.email"></el-input>
        </el-form-item>
        <el-form-item label="Current Address" prop="currentAddress">
          <el-input type="textarea" v-model="pageData.address.current" placeholder="Address">
          </el-input>
        </el-form-item>
        <el-form-item label="Permanent Address" prop="permanentAddress">
          <el-input type="textarea" v-model="pageData.address.permanent" placeholder="Address">
          </el-input>
        </el-form-item>
        <el-form-item label="City" prop="city">
          <el-input type="text" v-model="pageData.city"></el-input>
        </el-form-item>
        <el-form-item label="State" prop="state">
          <el-select placeholder="State" v-model="pageData.state">
            <el-option v-for="(item, index) in states" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Zip Code" prop="zipCode">
          <el-input type="text" v-model.number="pageData.zipCode"></el-input>
        </el-form-item>
        <el-form-item label="Skills" prop="skills">
          <el-select v-model="pageData.skills" multiple placeholder="Select">
            <el-option v-for="(item, index) in skills" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row class="employee-details">
        <h4>Employee Details:</h4>
        <el-form-item label="Department">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.department">
            <el-option v-for="(item, index) in departments" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Position" prop="position">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.position">
            <el-option v-for="(item, index) in positions" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Employee Type" prop="type">
          <el-select placeholder="Select" v-model="pageData.employeeDetails.type">
            <el-option v-for="(item, index) in types" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Salary" prop="salary">
          <el-input type="text" v-model.number="pageData.employeeDetails.salary">
            <template slot="append">PA</template>
          </el-input>
        </el-form-item>
        <el-form-item label="is Contract">
          <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="pageData.employeeDetails.isContract">
          </el-switch>
        </el-form-item>
        <el-row class="is-contract" v-if="pageData.employeeDetails.isContract">
          <el-form-item label="From">
            <el-date-picker type="date" v-model="pageData.employeeDetails.contract.startDate" placeholder="Join Date"
              value-format="dd/MM/yyyy"></el-date-picker>
          </el-form-item>
          <el-form-item label="To">
            <el-date-picker type="date" placeholder="End Date" value-format="dd/MM/yyyy" style="width:250px"
              v-model="pageData.employeeDetails.contract.endDate"></el-date-picker>
          </el-form-item>
        </el-row>
      </el-row>
      <el-row class="bank-details">
        <h4>Bank Details:</h4>
        <el-form-item label="Bank Name" prop="bank">
          <el-input type="text" v-model="pageData.bankDetails.bank"></el-input>
        </el-form-item>
        <el-form-item label=" Branch Name" prop="branch">
          <el-input type="text" v-model="pageData.bankDetails.branch"></el-input>
        </el-form-item>
        <el-form-item label="Account Number" prop="accountNumber">
          <el-input type="text" v-model.number="pageData.bankDetails.accountNumber" maxlength="18"></el-input>
        </el-form-item>
        <el-form-item label="IFSC Code" prop="ifsc">
          <el-input type="text" v-model="pageData.bankDetails.ifsc" maxlength="11"></el-input>
        </el-form-item>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit()">Submit</el-button>
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
      skillsList: Constants.SKILL_LIST,
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
      // rules: {
      //   firstName: [
      //     { required: true, message: 'First Name is Required', trigger: 'blur' }
      //   ],
      //   lastName: [
      //     { required: true, message: 'Last Name is Required', trigger: 'blur' }
      //   ],
      //   dob: [
      //     { required: true, type: 'date', message: 'Date of Birth is Required', trigger: 'change' }
      //   ],
      //   gender: [
      //     { required: true, message: 'Gender is Required', trigger: 'change' }
      //   ],
      //   currentAddress: [
      //     { required: true, message: 'Current Address is Required', trigger: 'blur' }
      //   ],
      //   permanentAddress: [
      //     { required: true, message: 'Permanent Address is Required', trigger: 'blur' }
      //   ],
      //   city: [
      //     { required: true, message: 'City is Required', trigger: 'blur' }
      //   ],
      //   state: [
      //     { required: true, message: 'State is Required', trigger: 'change' }
      //   ],
      //   zipCode: [
      //     { required: true, message: 'Zipcode is Required', trigger: 'blur' },
      //     { type: 'number', message: 'Zipcode must be a number', trigger: 'blur' },
      //   ],
      //   mobile: [
      //     { required: true, message: 'Mobile number is required', trigger: 'blur' },
      //     { type: 'number', min: 10, message: 'Mobile number should atleast be 10 digits', trigger: 'blur' },
      //     { type: 'number', message: 'Mobile number should be a number', trigger: 'blur' },
      //   ],
      //   email: [
      //     { required: true, message: 'Email is Required', trigger: 'blur' },
      //     { type: 'email', message: 'Enter a Valid Email {for example abc@gmail.com}', trigger: 'blur' }
      //   ],
      //   skills: [
      //     { required: true, type: 'array', message: 'Atleast select one skill', trigger: 'change' }
      //   ],
      //   department: [
      //     { required: true, message: 'Department is Required', trigger: 'change' }
      //   ],
      //   position: [
      //     { required: true, message: 'Position is Required', trigger: 'change' }
      //   ],
      //   type: [
      //     { required: true, message: 'Employee Type is Required', trigger: 'change' }
      //   ],
      //   salary: {
      //     required: true, type: 'number', message: 'Salary is Required', trigger: 'blur'
      //   },
      //   bank: [
      //     { required: true, message: 'Bank Name is Required', trigger: 'blur' }
      //   ],
      //   branch: [
      //     { required: true, message: 'Branch Name is Required', trigger: 'blur' }
      //   ],
      //   accountNumber: [
      //     { required: true, type: 'number', message: 'Account Number is Required', trigger: 'blur' },
      //     { type: 'number', message: 'Account number must be a number', trigger: 'blur' }
      //   ],
      //   ifsc: [
      //     { required: true, message: 'IFSC Code is Required', trigger: 'blur' }
      //   ]
      // },
      storedEmployeeCollection: []
    }
  },
  methods: {
    clearForm() {
      this.$refs.pageData.resetFields()
    },
    handleSubmit() {
      this.storedEmployeeCollection.push(this.pageData)
      // this.clearForm()
      this.pageData = {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        address: {
          current: "",
          permanent: ""
        },
        city: "",
        state: "",
        zipCode: "",
        mobile: "",
        email: "",
        skills: [],
        employeeDetails: {
          department: "",
          position: "",
          type: "",
          salary: "",
          dateOfJoining: "",
          contract: {
            startDate: "",
            endDate: ""
          }
        },
        bankDetails: {
          bank: "",
          branch: "",
          accountNumber: "",
          ifsc: ""
        }
      }
      return console.log(JSON.stringify(this.storedEmployeeCollection))
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

.el-date-picker,
.el-input {
  width: 250px
}
</style>