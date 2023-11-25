<template>
  <link rel="stylesheet" href="styleshoppingcartview.css">
    <navbar logoimg="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" width="120" height="120"/>
    <h1 style="font-size: 70px; color: grey;margin-bottom: 70px;">Cart</h1>
    <div class="carttable mx-auto">
        <table class="tablestyle mx-auto">
            <thead>
                <tr>
                    <th></th>
                    <th >Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody class="cartItemsBody">
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>
            <button class="deletebtn" @click="deleteProduct(index)"><i class="fa-regular fa-circle-xmark"></i></button>
            <img :src="item.img" :alt="item.title" style="width: 50px; height: 50px;">
          </td>
          <td>{{ item.title }}</td>
          <td>${{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price * item.quantity }}</td>
        </tr>
      </tbody>
        </table>
        <div class="checkout">
            <h2 class="text-start">Cart totals</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Subtotal</th>
                        <td><span><span>$</span>{{ calculateSubtotal() }}</span></td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td><strong><span><span>$</span>{{ calculateTotal() }}</span></strong></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button class="bg-primary text-white" style="width: 100%; border:0px ;">Check Out</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style>


</style>


<script>
import navbar from '@/components/navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.populateCartItems();
  },
  methods: {
    populateCartItems() {
      this.cartItems = JSON.parse(localStorage.getItem("products")) || [];
    },
    deleteProduct(index) {
      this.cartItems.splice(index, 1);

      localStorage.setItem("products", JSON.stringify(this.cartItems));
      window.location.reload();
    },
    calculateSubtotal() {
      return this.cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0).toFixed(2);
    },
    calculateTotal() {
      return this.calculateSubtotal();
    },
  },
};
</script>




