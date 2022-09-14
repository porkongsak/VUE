<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Update goes here -->
      <h1>Edit Product</h1>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="name">NameProduct</label>
          <input
            type="text"
            class="form-control"
            v-model="data.product_name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Price</label>
          <input
            type="text"
            class="form-control"
            v-model="data.price"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Amount</label>
          <input
            type="text"
            class="form-control"
            v-model="data.amount"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
   this.getdata()
  },
  methods: {
    async handleUpdateForm() {
      let apiURL = `http://localhost:3000/product/${this.$route.params.id}`;
      let dataup = axios.put(apiURL, this.data);
      if (dataup) {
        await this.$swal.fire({
          imageUrl:
            "https://i2.ytimg.com/vi/-Z4rOU-HTFw/hqdefault.jpg",
          icon: "success",
          title: "Delete Successfully",
        });
        this.$router.push("/product");
      }
      // .then((res) => {
      //     console.log(res);
      //     this.$router.push('/product')
      // }).catch(error => {
      //     console.log(error)
      // })
    },
    getdata(){
       let apiURL = `http://localhost:3000/product/${this.$route.params.id}`;
    axios.get(apiURL)
    .then((res) => {
      console.log(res);
      this.data = res.data.data;
    });
    }
  },
};
</script>
