<template>
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

    <div class="containerer">
      <router-link to="/product">
        <div class="children3">
          <h4>Product</h4>
        </div>
      </router-link>
      <router-link to="/profile">
        <div class="children2">
          <h4>Profile</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "home-e",
  data: () => ({}),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
  display: flex;
  position: relative;
  text-decoration: none;
  left: -50%;
  padding: 10px;
  background-color: aquamarine;
  
  border-color: rgb(237, 233, 233);
  border-radius: 60px;
  width: 300px;
}
.children3 {
  display: flex;
  margin-bottom: 50px;
  position: relative;
  left: -50%;
  padding: 10px;
  background-color: aquamarine;
  border-color: rgb(237, 233, 233);
  border-radius: 60px;
  width: 300px;
}
.children2 h4 {
  text-decoration: none;
  
  color:#888888;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
}
.children3 h4 {
  text-decoration: none;
   color:#888888;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
 
}
.children2 :hover {
  cursor: pointer;
  color: #fff;
}


.children3 :hover {
  cursor: pointer;
  color: #fff;
}

.containerer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
