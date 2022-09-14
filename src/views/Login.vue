<template>
  <div id="login">
    <div class="container" id="home-e">
      <div class="children1">
        <img
          :src="require('../assets/img/animation_640_l7vpz0yd.gif')"
          class="my-3"
          contain
          height="500"
        />
      </div>

      <div class="line"></div>

      <div class="children2">
        <div>
          <p>Email</p>
          <br />
          <input type="text" v-model="form.email" placeholder="Email" />
          <br />
          <br /><br />
          <p>Password</p>
          <br />

          <input type="text" v-model="form.password" placeholder="Password" />

          <br />
          <br />
          <div class="btn">
            <button @click="handleSubmit()"><h4>Login</h4></button>
          </div>

          <div class="link">
            <router-link to="/regis"><a>Register</a></router-link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p>Email: {{ form.email }}</p>
        <br />
        <p>Password: {{ form.password }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      try {
        let form = {
          email: this.form.email,
          password: this.form.password,
        };
        axios
          .post("http://localhost:3000/users/login", form)
          .then((res) => {
            console.log(res);
            this.$swal.fire({
              icon: "success",
              title: "Login Successfully",
            });
          })
          .catch((err) => {
            console.log(err);
            this.$swal.fire({
              icon: "error",
              title: "Login Error",
            });
          });
        console.log(form);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
*{
    font-family: Lucida Sans Typewriter;
    margin:0;
    padding:0;
}
children2 input {
  background: #b721ff;
}
.btn button {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#21d4fd, #b721ff);
  width: 250px;
  height: 50px;

  font-size: 20px;
  color: #ffff;
  line-height: 1.2;
  border-radius: 10px;
}

.link {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin-left: 100px;
  background: #eee;
  margin-top: 1rem;
  width: 1500px;
  height: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-color: black;
  border-radius: 60px;
  box-shadow: 5px 5px 5px 5px #888888;
}
.children2 {
  position: absolute;

  left: 63%;
  padding: 20px;

  border-color: rgb(237, 233, 233);
  border-radius: 60px;
  width: 300px;
}
.children2 h1 {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
}

.line {
  border-color: black;
  position: absolute;
  border: 1px solid;
  width: 0.1px;
  left: 50%;
  height: 600px;
  margin: 0;
}
</style>
