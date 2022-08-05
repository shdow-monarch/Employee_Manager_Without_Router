<template>
    <div class="main-conatiner">
        <div class="header-container">
            <h1>Employee Details Manager</h1>
        </div>
        <div class="add-button">
            <el-button type="success">Add Employee</el-button>
        </div>
        <div class="table-container">
            <el-table :data="tableData" max-height="250" style="width:100%">
                <el-table-column label="Personal Information">
                    <el-table-column label="First Name" prop="firstName" width="180" fixed></el-table-column>
                    <el-table-column label="Email" prop="empdata.email" width="180" fixed></el-table-column>
                    <el-table-column label="Gender" prop="empdata.gender" width="180"></el-table-column>
                    <!---  <el-table-column label="Last Name" prop="email" width="180"></el-table-column>
                    <el-table-column label="DOB" prop="address" width="180"></el-table-column>
                    <el-table-column label="Gender" prop="gender" width="180"></el-table-column>
                    <el-table-column label="Mobile" width="180"></el-table-column>
                    <el-table-column label="Email" width="180"></el-table-column>
                    <el-table-column label="Current Address" prop="city" width="180"></el-table-column>
                    <el-table-column label="Permanent Address" prop="state" width="180"></el-table-column>
                    <el-table-column label="City" width="180"></el-table-column>
                    <el-table-column label="State" width="180"></el-table-column>
                    <el-table-column label="Skills" width="180"></el-table-column>
                </el-table-column>
                <el-table-column label="Employee Information">
                    <el-table-column label="Department" width="180"></el-table-column>
                    <el-table-column label="Position" width="180"></el-table-column>
                    <el-table-column label="Employee Type" width="180"></el-table-column>
                    <el-table-column label="Salary" width="180"></el-table-column>
                    <el-table-column label="Start Date" width="180"></el-table-column>
                    <el-table-column label="End Date" width="180"></el-table-column>
                </el-table-column>
                <el-table-column label="Bank Details">
                    <el-table-column label="Bank Name" width="180"></el-table-column>
                    <el-table-column label="Branch Name" width="180"></el-table-column>
                    <el-table-column label="Account Number" width="180"></el-table-column>
                    <el-table-column label="IFSC" width="180"></el-table-column>                    ---->
                </el-table-column>
                <el-table-column label="mobile" prop="mobile" width="180" fixed="right"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mainComponent',




    data() {
        return {
            tableData: [
                {
                    firstName: 'Bharath',
                    empdata: {
                        email: 'bharathganesh2001@gmail.com',
                        gender: 'Male'

                    },
                    address: '16th Ward, Mettur Dam-2',
                    city: 'Salem',
                    state: 'Tamil Nadu',
                    mobile: '9498432466'
                }
            ]
        }
    }




}
</script>
<style>
.add-button {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 50px
}

.header-container {
    text-align: center;
}
</style>