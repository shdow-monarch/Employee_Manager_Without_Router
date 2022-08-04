<template>
  <div class="form-container">
    <h1>Add New Employee Details</h1>
    <el-form ref="form" label-width="150px">
      <div class="personal-information">
        <h4>Personal Information:</h4>
        <el-form-item label="First Name">
          <el-input type="text" style="width:250px" v-model="employeeList.firstName"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input type="text" style="width:250px" v-model="employeeList.lastName"></el-input>
        </el-form-item>
        <el-form-item label="Date Of Birth">
          <el-date-picker type="date" placeholder="Date" style="width:250px" v-model="employeeList.dob">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Gender">
          <el-radio label="male" v-model="employeeList.gender">Male</el-radio>
          <el-radio label="female" v-model="employeeList.gender">Female</el-radio>
        </el-form-item>
        <el-form-item label="Mobile No.">
          <!--pattern-->
          <el-input type="text" style="width:250px" v-model="employeeList.mobile"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <!--pattern-->
          <el-input type="text" style="width:250px" v-model="employeeList.email"></el-input>
        </el-form-item>
        <el-form-item label="Current Address">
          <el-input type="textarea" placeholder="Address" style="width:250px" v-model="employeeList.address.current">
          </el-input>
        </el-form-item>
        <el-form-item label="Permanent Address">
          <el-input type="textarea" placeholder="Address" style="width:250px" v-model="employeeList.address.permanent">
          </el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input type="text" style="width:250px" v-model="employeeList.city"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-select placeholder="State" v-model="employeeList.selectedState" style="width:250px">
            <el-option v-for="(item, index) in stateList" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Zip Code">
          <el-input type="text" style="width:250px" v-model="employeeList.zipCode"></el-input>
        </el-form-item>
        <el-form-item label="Skills">
          <el-select v-model="employeeList.selectedSkills" multiple placeholder="Select" style="width:250px">
            <el-option v-for="(item, index) in skills" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="employee-details">
        <h4>Employee Details:</h4>
        <el-form-item label="Department">
          <el-select placeholder="Select" v-model="employeeList.employeeDetails.selctedDepartment" style="width:250px">
            <el-option v-for="(item, index) in department" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Position">
          <el-select placeholder="Select" v-model="employeeList.employeeDetails.selectedPosition" style="width:250px">
            <el-option v-for="(item, index) in position" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Employee Type">
          <el-select placeholder="Select" v-model="employeeList.employeeDetails.selectedEmployeeType"
            style="width:250px">
            <el-option v-for="(item, index) in employeeType" :key="index" :value="item" :label="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Salary">
          <!--pattern-->
          <el-input type="text" style="width:250px" v-model="employeeList.employeeDetails.salary"></el-input>
        </el-form-item>
        <el-form-item label="is Contract">
          <!--Start and End Date-->
          <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="isContract">
          </el-switch>
        </el-form-item>
        <div class="is-contract" v-if="isContract">
          <el-form-item label="From">
            <el-date-picker type="date" placeholder="Join Date" style="width:250px"
              v-model="employeeList.employeeDetails.contract.startDate"></el-date-picker>
          </el-form-item>
          <el-form-item label="To">
            <el-date-picker type="date" placeholder="End Date" style="width:250px"
              v-model="employeeList.employeeDetails.contract.endDate"></el-date-picker>
          </el-form-item>
        </div>
      </div>
      <div class="bank-details">
        <h4>Bank Details:</h4>
        <el-form-item label="Bank Name">
          <el-input type="text" style="width:250px" v-model="employeeList.bankDetails.bank"></el-input>
        </el-form-item>
        <el-form-item label=" Branch Name">
          <el-input type="text" style="width:250px" v-model="employeeList.bankDetails.branch"></el-input>
        </el-form-item>
        <el-form-item label="Account Number">
          <!--pattern-->
          <el-input type="text" style="width:250px" v-model="employeeList.bankDetails.accountNumber"></el-input>
        </el-form-item>
        <el-form-item label="IFSC Code">
          <el-input type="text" style="width:250px" v-model="employeeList.bankDetails.ifsc"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'formComponent',
  data() {
    return {
      stateList: [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
      ],
      skills: ['Java', 'Python', 'JavaScript', 'Vue.js', 'Node.js', 'Nuxt.js'],
      department: [
        'Quality Analyst',
        'Product Developer',
        'Bussiness Analyst',
        'DevOps',
        'Human Resources'
      ],
      position: ['Manager', 'Assistant Manager', 'Team Leader', 'Employee'],
      employeeType: ['Full Time', 'Part Time'],
      isContract: false,
      employeeList: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        address: {
          current: "",
          permanent: ""
        },
        city: "",
        selectedState: "",
        zipCode: "",
        mobile: "",
        email: "",
        selectedSkills: [],
        employeeDetails: {
          selectedDepartment: "",
          selectedPosition: "",
          selectedEmployeeType: "",
          salary: "",
          dateOfJoining: "",
          isContract: false,
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
      },
      storedEmployeeCollection: []
    }
  },
  methods: {
    clearForm() {       //Doubt
      this.$refs.form.reset()
    },
    handleSubmit() {
      this.storedEmployeeCollection.push(this.employeeList)
      this.employeeList = {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        address: {
          current: "",
          permanent: ""
        },

        city: "",
        selectedState: "",
        zipCode: "",
        mobile: "",
        email: "",
        selectedSkills: [],
        employeeDetails: {
          selectedDepartment: "",
          selectedPosition: "",
          selectedEmployeeType: "",
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
</style>