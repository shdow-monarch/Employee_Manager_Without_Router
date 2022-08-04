<template>
  <div class="form-container">
    <h1>Add New Employee Details</h1>
    <el-form ref="form" label-width="150px">
      <div class="personal-information">
        <h4>Personal Information:</h4>
        <el-form-item label="First Name">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Date Of Birth">
          <el-date-picker type="date" placeholder="Date" style="width:250px"></el-date-picker>
        </el-form-item>
        <el-form-item label="Gender">
          <el-radio label="male">Male</el-radio>
          <el-radio label="female">Female</el-radio>
        </el-form-item>
        <el-form-item label="Mobile No.">
          <!--pattern-->
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <!--pattern-->
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Current Address">
          <el-input type="textarea" placeholder="Address" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Permanent Address">
          <el-input type="textarea" placeholder="Address" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-select placeholder="State" style="width:250px">
            <el-option>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Zip Code">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Skills">
          <el-select multiple placeholder="Select" style="width:250px">
            <el-option>
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="employee-details">
        <h4>Employee Details:</h4>
        <el-form-item label="Department">
          <el-select placeholder="Select" style="width:250px">
            <el-option>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Position">
          <el-select placeholder="Select" style="width:250px">
            <el-option>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Salary">
          <!--pattern-->
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="is Contract">
          <!--Start and End Date-->
          <el-switch active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <div class="is-contarct">
          <el-form-item label="From">
            <el-date-picker type="date" placeholder="Join Date" style="width:250px"></el-date-picker>
          </el-form-item>
          <el-form-item label="To">
            <el-date-picker type="date" placeholder="End Date" style="width:250px"></el-date-picker>
          </el-form-item>
        </div>
      </div>
      <div class="bank-details">
        <h4>Bank Details:</h4>
        <el-form-item label="Bank Name">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Branch Name">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="Account Number">
          <!--pattern-->
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="IFSC Code">
          <el-input type="text" style="width:250px"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'formComponent',
  data() {

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
  align-items: center;
}
</style>