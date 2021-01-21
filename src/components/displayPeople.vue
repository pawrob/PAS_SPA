<template>
<div  id="show_resource">
  <div>
    <h3>Select role to display people</h3>
    <select v-model="role">
      <option v-for="role in roles" v-bind:key="role">{{role}}</option>
    </select>
  </div>
  <div v-if="this.role ==='reader'">
  <h3>Readers:</h3>
  <div v-for="person in people" v-bind:key="person" class="single_res">
    <h2>PESEL: {{ person.pesel }}</h2>
    <p>{{ person.name }} {{person.surname}}</p>
    <p>Date of birth: {{person.birthDate}}</p>
    <p>Phone number: {{person.phoneNumber}}</p>
    <p>Email: {{person.email}}</p>
    <p>Gender: {{person.gender}}</p>
    <p>Is active: {{person.active}}</p>
    <p>Role: {{person.role}}</p>
    <p>Date of Registration: {{person.dateOfRegistration}}</p>
    <p>Balance: {{person.balance}}</p>
    <button @click="redirectReader(person)">Update</button>
  </div>
  </div>
  <div v-if="this.role ==='employee'">
    <h3>Employees:</h3>
    <div v-for="employee in employees" v-bind:key="employee" class="single_res">
      <h2>PESEL: {{ employee.pesel }}</h2>
      <p>{{ employee.name }} {{employee.surname}}</p>
      <p>Date of birth: {{employee.birthDate}}</p>
      <p>Phone number: {{employee.phoneNumber}}</p>
      <p>Email: {{employee.email}}</p>
      <p>Gender: {{employee.gender}}</p>
      <p>Is active: {{employee.active}}</p>
      <p>Role: {{employee.role}}</p>
      <p>Date of Registration: {{employee.dateOfEmployment}}</p>
      <button @click="redirectEmployee(employee)">Update</button>

    </div>

  </div>
  <div v-if="this.role ==='admin'">
    <h3>Employees:</h3>
    <div v-for="admin in admins" v-bind:key="admin" class="single_res">
      <h2>PESEL: {{ admin.pesel }}</h2>
      <p>{{ admin.name }} {{admin.surname}}</p>
      <p>Date of birth: {{admin.birthDate}}</p>
      <p>Phone number: {{admin.phoneNumber}}</p>
      <p>Email: {{admin.email}}</p>
      <p>Gender: {{admin.gender}}</p>
      <p>Is active: {{admin.active}}</p>
      <p>Role: {{admin.role}}</p>
      <p>Date of Registration: {{admin.dateOfEmployment}}</p>
      <button @click="redirectAdmin(admin)">Update</button>

    </div>

  </div>
</div>
</template>

<script>

import axios from "axios";

export default {
  name: "displayPeople",

  data(){
  return {
    role: "reader",
    roles: ['admin','employee','reader'],
    people: [],
    employees: [],
    admins: [],
  }
  },
  methods: {
    redirectReader: function (person) {
      this.$router.push('/updatePreviewOnly/?email='+person.email);
      },
    redirectEmployee: function (person) {
      this.$router.push('/updateEmployees/?email='+person.email);
    },
    redirectAdmin: function (person) {
      this.$router.push('/updateAdmins?email='+person.email);
    }

  },
  created() {
    this.$http.get("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/readers").then(function (data) {
      this.people = data.body.slice(0, 10);
    }),
        axios.all([axios.get("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/employees", {
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Headers': origin
        }).then(response => {
          this.employees = response.data
        }).catch(error => console.log(error)),
        axios.get("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/admins", {
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Headers': origin
        }).then(response => {
          this.admins = response.data
        }).catch(error => console.log(error))])
  }
}
</script>

<style scoped>
#show_resource{
  max-width: 800px;
  margin: 0px auto;
}
.single_res{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>