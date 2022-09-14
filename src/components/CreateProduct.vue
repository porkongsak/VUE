<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Content goes here -->
      <h1>Create Student</h1>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label for="name">NameProduct</label>
          <input
            type="text"
            class="form-control"
            v-model="from.product_name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Price</label>
          <input
            type="text"
            class="form-control"
            v-model="from.price"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Amount</label>
          <input
            type="text"
            class="form-control"
            v-model="from.amount"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Create</button>
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
      from: {
        product_name: "",
        price: "",
        amount: "",
      },
    };
  },
  methods: {
   async handleSubmitForm() {
      let apiURL = "http://localhost:3000/product/";
      let data = axios.post(apiURL, this.from)
      if (data){
        await this.$swal.fire({
            imageUrl:
              "data:image/jpeg;base64,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",
            icon: "success",
            title: "Delete Successfully",
          });
          this.$router.push("/product");
          this.from = {
            product_name: "",
            price: "",
            amount: "",
          };
        
      }
        // .then(() => {
        //   this.$router.push("/product");
        //   this.from = {
        //     product_name: "",
        //     price: "",
        //     amount: "",
        //   };
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    },
  },
};
</script>
