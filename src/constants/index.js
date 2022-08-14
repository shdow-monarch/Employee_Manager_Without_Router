const CONSTANTS = {
  STATE_LIST: [
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
  SKILL_LIST: [
    { displayName: 'Java', name: 'java' },
    { displayName: 'Python', name: 'python' },
    { displayName: 'Javascript', name: 'javascript' },
    { displayName: 'Vue.js', name: 'vue.js' },
    { displayName: 'Node.js', name: 'node.js' },
    { displayName: 'Nuxt.js', name: 'nuxt.js' }
  ],
  DEPARTMENT_LIST: [
    'Quality Analyst',
    'Product Developer',
    'Bussiness Analyst',
    'DevOps',
    'Human Resources'
  ],
  POSITION_LIST: [
    'Manager',
    'Assistant Manager',
    'Team Leader',
    'Employee'
  ],
  EMPLOYEE_TYPE_LIST: [
    'Full Time',
    'Part Time'
  ],
  EMPLOYEE_DETAIL: {
    _id: '',
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
    employeeDetails: {
      department: '',
      position: '',
      type: '',
      skills: [],
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
}
export default CONSTANTS