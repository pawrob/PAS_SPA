<template>
  <div class="login-box">
    <form>
      <div class="user-box">
        <label>Pesel:</label><br/>
        <input type="text" v-model.lazy="person.pesel" required>
      </div>
      <div class="user-box">
        <label>Name:</label><br/>
        <input type="text"  v-model.lazy="person.name" required>
      </div>
      <div class="user-box">
        <label>Surname:</label><br/>
        <input type="text"  v-model.lazy="person.surname" required>
      </div>
      <div class="user-box">
        <label>Date of birth (dd/mm/yyyy required):</label><br/>
        <input type="text"  v-model.lazy="person.birthDate" required>
      </div>
      <div class="user-box">
        <label>Phone number:</label><br/>
        <input type="text"  v-model.lazy="person.phoneNumber" required>
      </div>
      <div class="user-box">
        <label>Email:</label><br/>
        <input type="text"  v-model.lazy="person.email" required>
      </div>
      <div>
        <label>Male</label>
        <input type="radio" value="Male" v-model="person.gender">
        <label>Female</label>
        <input type="radio" value="Female" v-model="person.gender">
      </div>
    </form>
    <div v-if="submitted">
      <h2>Reader updated successfully!</h2>
    </div>
    <button  @click="post">Update reader</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
name: "updatePerson",

  data() {
    return {
    value: "abcd",
      person: {
        pesel: "",
        name: "",
        surname: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        gender: "male",
        dateOfRegistration: "",
        balance: 0 ,
        password: ""
      },
      submitted: false
    }
  },

  created() {
    this.value =this.$route.query.email
    axios.get("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/readers/"+this.$route.query.email, {
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': origin
    })
        .then(response => {
          this.person = response.data

        })
        .catch(error => console.log(error))
  },
  methods: {
    redirect: function (){

    },
    post: function () {
      axios.put("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/readers/update/"+this.$route.query.email, {
        pesel: this.person.pesel,
        name: this.person.name,
        surname: this.person.surname,
        birthDate: this.person.birthDate,
        phoneNumber:this.person.phoneNumber,
        email: this.person.email,
        gender: this.person.gender,
        // dateOfRegistration: this.person.dateOfRegistration,
        balance: this.person.balance,
        password: this.person.password,
        // active: true
      }, {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': origin
      }).then(this.submitted=true).catch(error => {
        this.submitted = false;
        this.errorMessage = error.message;
        console.log("There was an error!", this.errorMessage);});

    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>