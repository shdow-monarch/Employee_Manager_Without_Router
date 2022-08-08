<template>
    <el-row class="main-conatiner">
        <el-row class="table-section-conatainer">
            <el-row class="header-container">
                <h1>Employee Details Manager</h1>
            </el-row>
            <el-row class="add-button">
                <el-button type="success" @click="handleDialogBox()">ADD EMPLOYEE</el-button>
            </el-row>
            <el-row class="table-container">
                <el-table :data="tableData" max-height="1000px" style="width:100%">
                    <el-table-column label="Personal Information" align="center">
                        <el-table-column label="First Name" prop="firstName" width="180" fixed></el-table-column>
                        <el-table-column label="Last Name" prop="lastName" width="180"></el-table-column>
                        <el-table-column label="DOB" prop="dob" width="180"></el-table-column>
                        <el-table-column label="Gender" prop="gender" width="180"></el-table-column>
                        <el-table-column label="Mobile" prop="mobile" width="180"></el-table-column>
                        <el-table-column label="Email" prop="email" width="180"></el-table-column>
                        <el-table-column label="Current Address" prop="address.current" width="180">
                        </el-table-column>
                        <el-table-column label="Permanent Address" prop="address.permanent" width="180">
                        </el-table-column>
                        <el-table-column label="City" prop="city" width="180"></el-table-column>
                        <el-table-column label="State" prop="state" width="180"></el-table-column>
                        <el-table-column label="Skills" prop="skills" width="180"></el-table-column>
                    </el-table-column>
                    <el-table-column label="Employee Information" align="center">
                        <el-table-column label="Department" prop="employeeDetails.department" width="180">
                        </el-table-column>
                        <el-table-column label="Position" prop="employeeDetails.position" width="180">
                        </el-table-column>
                        <el-table-column label="Employee Type" prop="employeeDetails.type" width="180">
                        </el-table-column>
                        <el-table-column label="Salary" prop="employeeDetails.salary" width="180"></el-table-column>
                        <el-table-column label="Start Date" prop="employeeDetails.contract.startDate" width="180">
                        </el-table-column>
                        <el-table-column label="End Date" prop="employeeDetails.contract.endDate" width="180">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="Bank Details" align="center">
                        <el-table-column label="Bank Name" prop="bankDetails.bank" width="180"></el-table-column>
                        <el-table-column label="Branch Name" prop="bankDetails.branch" width="180">
                        </el-table-column>
                        <el-table-column label="Account Number" prop="bankDetails.accountNumber" width="180">
                        </el-table-column>
                        <el-table-column label="IFSC" prop="bankDetails.ifsc" width="180"></el-table-column>
                    </el-table-column>
                    <el-table-column label="Operations" fixed="right" width="180">
                        <template slot-scope="scope">
                            <el-button @click="handleEdit(scope.$index, tableData)" size="mini">EDIT</el-button>
                            <el-button type="danger" @click="handleDelete(scope.$index, tableData)" size="mini">DELETE
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </el-row>
        <el-row class="form-container">
            <el-dialog title="Add New Employee" :visible.sync="dialogVisible" center>
                <el-form ref="pageData" :rules="rules" :model="pageData">
                    <el-row class="personal-information">
                        <h4>Personal Information:</h4>
                        <el-form-item label="First Name" prop="firstName">
                            <el-input type="text" v-model="pageData.firstName"></el-input>
                        </el-form-item>
                        <el-form-item label="Last Name" prop="lastName">
                            <el-input type="text" v-model="pageData.lastName"></el-input>
                        </el-form-item>
                        <el-form-item label="Date Of Birth" prop="dob">
                            <el-date-picker type="date" v-model="pageData.dob" placeholder="Date"
                                value-format="dd/MM/yyyy">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="Gender" prop="gender">
                            <el-radio-group v-model="pageData.gender">
                                <el-radio label="male">Male</el-radio>
                                <el-radio label="female">Female</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="Mobile No." prop="mobile">
                            <el-input type="text" v-model.number="pageData.mobile">
                                <template slot="prepend">+91</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Email" prop="email">
                            <el-input type="text" v-model="pageData.email"></el-input>
                        </el-form-item>
                        <el-form ref="pageDataAddress" :rules="rules" :model="pageData.address">
                            <el-form-item label="Current Address" prop="current">
                                <el-input type="textarea" v-model="pageData.address.current" placeholder="Address">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Permanent Address" prop="permanent">
                                <el-input type="textarea" v-model="pageData.address.permanent" placeholder="Address">
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <el-form-item label="City" prop="city">
                            <el-input type="text" v-model="pageData.city"></el-input>
                        </el-form-item>
                        <el-form-item label="State" prop="state">
                            <el-select v-model="pageData.state" placeholder="State">
                                <el-option v-for="(item, index) in states" :key="index" :value="item" :label="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Zip Code" prop="zipCode">
                            <el-input type="text" v-model="pageData.zipCode"></el-input>
                        </el-form-item>
                        <el-form-item label="Skills" prop="skills">
                            <el-select v-model="pageData.skills" multiple placeholder=" Select">
                                <el-option v-for="(item, index) in skillsList" :key="index" :value="item" :label="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-row>
                    <el-form ref="pageDataEmployeeDetails" :rules="rules" :model="pageData.employeeDetails">
                        <el-row class="employee-details">
                            <h4>Employee Details:</h4>
                            <el-form-item label="Department" prop="department">
                                <el-select placeholder="Select" v-model="pageData.employeeDetails.department">
                                    <el-option v-for="(item, index) in departments" :key="index" :value="item"
                                        :label="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Position" prop="position">
                                <el-select v-model="pageData.employeeDetails.position" placeholder="Select">
                                    <el-option v-for="(item, index) in positions" :key="index" :value="item"
                                        :label="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Employee Type" prop="type">
                                <el-select v-model="pageData.employeeDetails.type" placeholder="Select">
                                    <el-option v-for="(item, index) in types" :key="index" :value="item" :label="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Salary" prop="salary">
                                <el-input v-model.number="pageData.employeeDetails.salary" type="text">
                                    <template slot="append">PA</template>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="is Contract">
                                <el-switch v-model="pageData.employeeDetails.isContract" active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </el-form-item>
                            <el-row v-if="pageData.employeeDetails.isContract" class="is-contract">
                                <el-form-item label="From">
                                    <el-date-picker type="date" v-model="pageData.employeeDetails.contract.startDate"
                                        placeholder="Join Date" value-format="dd/MM/yyyy">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="To">
                                    <el-date-picker type="date" v-model="pageData.employeeDetails.contract.endDate"
                                        placeholder="End Date" value-format="dd/MM/yyyy">
                                    </el-date-picker>
                                </el-form-item>
                            </el-row>
                        </el-row>
                    </el-form>
                    <el-form ref="pageDataBankDetails" :rules="rules" :model="pageData.bankDetails">
                        <el-row class="bank-details">
                            <h4>Bank Details:</h4>
                            <el-form-item label="Bank Name" prop="bank">
                                <el-input v-model="pageData.bankDetails.bank" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label=" Branch Name" prop="branch">
                                <el-input type="text" v-model="pageData.bankDetails.branch"></el-input>
                            </el-form-item>
                            <el-form-item label="Account Number" prop="accountNumber">
                                <el-input type="text" v-model.number="pageData.bankDetails.accountNumber"
                                    maxlength="18"></el-input>
                            </el-form-item>
                            <el-form-item label="IFSC Code" prop="ifsc">
                                <el-input type="text" v-model="pageData.bankDetails.ifsc"></el-input>
                            </el-form-item>
                        </el-row>
                    </el-form>
                    <el-form-item>
                        <el-button @click="handleCancel()">Cancel</el-button>
                        <el-button type="success" v-if="submitVisible" @click="handleSubmit()">Submit</el-button>
                        <el-button type="primary" v-if="updateVisible" @click="handleUpdate()">
                            Update
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </el-row>
    </el-row>
</template>
<script>
import Constants from '@/constants'
export default {
    name: 'EmployeeDetailsManager',
    data() {
        return {
            dialogVisible: false,
            deleteDialog: false,
            submitVisible: true,
            updateVisible: false,
            tableIndex: 0,
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
            rules: {
                firstName: [
                    { required: true, message: 'First Name is Required', trigger: 'blur' }
                ],
                lastName: [
                    { required: true, message: 'Last Name is Required', trigger: 'blur' }
                ],
                dob: [
                    { required: true, message: 'Date of Birth is Required', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Gender is Required', trigger: 'change' }
                ],
                current: [
                    { required: true, message: 'Current Address is Required', trigger: 'blur' }
                ],
                permanent: [
                    { required: true, message: 'Permanent Address is Required', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'City is Required', trigger: 'blur' }
                ],
                state: [
                    { required: true, message: 'State is Required', trigger: 'change' }
                ],
                zipCode: [
                    { required: true, message: 'Zipcode is Required', trigger: 'blur' },
                    { pattern: /^(\d{6})$/, message: 'Enter a valid zipcode', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: 'Mobile number is required', trigger: 'blur' },
                    { pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/, message: 'Enter a Valid Number', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: 'Email is Required', trigger: 'blur' },
                    { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Enter a Valid Email {for example abc@gmail.com}', trigger: 'blur' }
                ],
                skills: [
                    { required: true, type: 'array', message: 'Atleast select one skill', trigger: 'change' }
                ],
                department: [
                    { required: true, message: 'Department is Required', trigger: 'change' }
                ],
                position: [
                    { required: true, message: 'Position is Required', trigger: 'change' }
                ],
                type: [
                    { required: true, message: 'Employee Type is Required', trigger: 'change' }
                ],
                salary: {
                    required: true, type: 'number', message: 'Salary is Required', trigger: 'blur'
                },
                bank: [
                    { required: true, message: 'Bank Name is Required', trigger: 'blur' }
                ],
                branch: [
                    { required: true, message: 'Branch Name is Required', trigger: 'blur' }
                ],
                accountNumber: [
                    { required: true, message: 'Account Number is Required', trigger: 'blur' },
                    { type: 'number', minlength: 9, message: 'Enter a valid account number', trigger: 'blur' }
                ],
                ifsc: [
                    { required: true, message: 'IFSC Code is Required', trigger: 'blur' },
                    { pattern: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: 'Enter a valid IFSC Code' }
                ]
            },
            tableData: []
        }
    },
    methods: {
        clearForm() {
            // this.$refs['pageData'].resetFields()
            this.pageData = {
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
            }
        },
        handleDialogBox() {
            this.dialogVisible = true
            this.submitVisible = true
            this.updateVisible = false
        },
        handleEdit(index) {
            this.tableIndex = index
            this.submitVisible = false
            this.dialogVisible = true
            this.updateVisible = true
            let tempObj = JSON.parse(JSON.stringify(this.tableData[this.tableIndex]))
            this.pageData = Object.assign({}, tempObj)
        },
        handleUpdate() {
            this.tableData[this.tableIndex] = JSON.parse(JSON.stringify(this.pageData))

            let tempArray = []
            this.tableData.forEach(item => {
                tempArray.push(item)
            })
            this.tableData = []
            tempArray.forEach(item => {
                this.tableData.push(item)
            })
            this.dialogVisible = false
            this.clearForm()
            this.$message({
                type: 'info',
                message: 'Information Updated Successfully'
            })
        },
        handleCancel() {
            this.clearForm()
            return this.dialogVisible = false
        },
        handleDelete(index) {
            this.tableIndex = index
            this.$confirm('Are you sure you want to delete this Employee Information?', 'Warning', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning',
                center: true
            }).then(() => {
                this.tableData.splice(this.tableIndex, 1)
                this.clearForm()
                this.deleteDialog = false
                this.$message({
                    type: 'warning',
                    message: 'Information Deleted'
                })
            }).catch(() => {
                this.deleteDialog = false
                this.$message({
                    type: 'info',
                    message: 'Delete Canceled'
                })
            })
        },
        handleSubmit() {
            this.$refs['pageData'].validate((valid) => {
                if (valid) {
                    this.tableData.push(this.pageData)
                    this.handleCancel()
                    this.$message({
                        type: 'success',
                        message: 'Information Added Successfully'
                    })
                    return true
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
            this.clearForm()
        }
    }
}
</script>
<style>
.add-button {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 50px;
    margin-bottom: 20px
}

.header-container {
    text-align: center;
}
</style>