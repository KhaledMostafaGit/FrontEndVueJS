<template>
    <nav class="navbar navbar-expand-lg  z-3 ">
  <div class="container-fluid">
    <router-link to="/"><a class="navbar-brand" href="#"><img :width="width" :height="height" :src="logoimg"  alt=""></a></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse p-3" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <router-link to="/everything"><a :class="['nav-link fw-bold ',linkcolor]"  href="">EVERYTHING</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Women"> <a :class="['nav-link fw-bold ',linkcolor]"   href="">WOMEN</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Men"> <a :class="['nav-link fw-bold',linkcolor]"   href="">MEN</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Accessories"> <a :class="['nav-link fw-bold',linkcolor]"  href="">ACCESSORIES</a></router-link>
        </li>
      </ul>
      <div class="d-flex ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/about"><a :class="['nav-link ',linkcolor]"   aria-current="page" href="">ABOUT</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact"><a :class="['nav-link ',linkcolor]"   href="">CONTACTUS</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart">
          <a :class="['nav-link fw-bold',linkcolor]"   href=""> 
            ${{ getTotalPrice() }}
            <a :class="['position-relative',linkcolor]">
              <i class="fa-solid fa-bag-shopping ms-2 p-1"></i>
              <span :class="['position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black']">
                {{ getTotalAmount() }}
              </span>
            </a>
          </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login"><a :class="['nav-link fw-bold',linkcolor]"   href=""><i class="fa-solid fa-user"></i></a></router-link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style>
.navbar a{
    text-decoration:none;
}
</style>

<script>

export default {
    data() {
        return {
            
        }
    },
    props: {
    linkcolor: {
      type: String,
      default: 'default', 
    },
    logoimg:{
      type:String,
      default:'defualt'
    },
    width:{
      type:String,
      default:'defualt'
    },
    height:{
      type:String,
      default:'defualt'
    },
  },
  methods: {
    // Calculate and return the total amount based on the items in the cart
    getTotalAmount() {
      const cartItems = JSON.parse(localStorage.getItem("products")) || [];
      const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.quantity), 0);

      return totalPrice; // Adjust toFixed(2) based on your formatting preference
    },
    getTotalPrice() {
      const cartItems = JSON.parse(localStorage.getItem("products")) || [];

      // Use reduce to sum up the prices
      const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price*item.quantity), 0);

      return totalPrice.toFixed(2); // Adjust toFixed(2) based on your formatting preference
    },
  },
}
</script>