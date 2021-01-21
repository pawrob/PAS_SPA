<template>
  <div class="login-box">
    <form>
      <div class="user-box">
        <label>Pesel:</label><br/>
        <input type="text" v-model.lazy="admin.pesel" required>
      </div>
      <div class="user-box">
        <label>Name:</label><br/>
        <input type="text" v-model.lazy="admin.name" required>
      </div>
      <div class="user-box">
        <label>Surname:</label><br/>
        <input type="text" v-model.lazy="admin.surname" required>
      </div>
      <div class="user-box">
        <label>Date of birth (dd/mm/yyyy required):</label><br/>
        <input type="text" v-model.lazy="admin.birthDate" required>
      </div>
      <div class="user-box">
        <label>Phone number:</label><br/>
        <input type="text" v-model.lazy="admin.phoneNumber" required>
      </div>
      <div class="user-box">
        <label>Email:</label><br/>
        <input type="text" v-model.lazy="admin.email" required>
      </div>
      <div>
        <label>Male</label>
        <input type="radio" value="Male" v-model="admin.gender">
        <label>Female</label>
        <input type="radio" value="Female" v-model="admin.gender">
      </div>
    </form>
    <div v-if="submitted">
      <h2>Admin updated successfully!</h2>
    </div>
    <button  @click="post">Update Admin</button>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "updateAdmin",
    data() {
      return {
        admin: {
          pesel: "",
          name: "",
          surname: "",
          birthDate: "",
          phoneNumber: "",
          email: "",
          gender: "male",
          dateOfEmployment: "",
          password: ""
        },
        submitted: false
      }
    },

    created() {
      this.value = this.$route.query.email
      axios.get("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/admins/" + this.$route.query.email, {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': origin
      })
          .then(response => {
            this.admin = response.data

          })
          .catch(error => console.log(error))
    },
    methods: {
      redirect: function () {

      },
      post: function () {
        axios.put("https://localhost:8181/PAS_REST-1.0-SNAPSHOT/hr/admins/update/" + this.$route.query.email, {
          pesel: this.admin.pesel,
          name: this.admin.name,
          surname: this.admin.surname,
          birthDate: this.admin.birthDate,
          phoneNumber: this.admin.phoneNumber,
          email: this.admin.email,
          gender: this.admin.gender,
          password: this.admin.password,
          // active: true
        }, {
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Headers': origin
        }).then(this.submitted = true).catch(error => {
          this.submitted = false;
          this.errorMessage = error.message;
          console.log("There was an error!", this.errorMessage);
        });

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