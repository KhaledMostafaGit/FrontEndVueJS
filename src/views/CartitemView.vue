<template>
  <link rel="stylesheet" href="stylecartitemview.css">
    <navbar logoimg="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" width="120" height="120"/>
    <div class="container d-flex mt-5">
        <div>
          <img :src="productImage" alt="Product Image" style="width: 600px;height: 600px;">
        </div>
        <div class="textstuff text-start ms-5">
            <router-link to="/"><a href="">Home</a></router-link> / <router-link to="/everything"><a href="">{{ productgender }}</a></router-link> / <span>{{ producttitle }}</span>
            <router-link to="/everything"><p class="mt-3"><a  href="">{{ productgender }}</a></p></router-link>
            <h1 class="my-4">{{producttitle}}</h1>
            <span class="text-decoration-line-through fw-light text-black-50 fs-2">{{ productoldprice }}</span><span class="fs-2"> ${{ productprice }}</span>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
            <input type="text" v-model="quantity" style="width: 40px;">
            <button class="btn btn-primary" style="width: 50%;"  @click="addToCart({
                            'title': producttitle,
                            'gender': productgender,
                            'price': productprice,
                            'img': productImage,
                            'stars':productstars})">ADD TO CART</button>
            <br> <br> <span class="text-black">Categories:</span><router-link to="/everything"><a class="text-black" href="">{{ productgender }}</a></router-link>               
        </div>
    </div>
    <div class="container description text-start mt-5">
        <h2 class="fw-bold">Product Description</h2>
        <p>Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br><br>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <div class="images">
        <div class="firstrow">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-01.jpg" alt="">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-04.jpg" alt="">
        </div>
        <div class="secondrow d-flex">
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-02.jpg" alt="">
            <div class="imgtext">
                <div class="centering" style="width: 600px; height: 600px; padding: 20%;" >
                    <h5 class="fw-bold">Ut enim ad minim</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <h5 class="fw-bold">Quis nostrud</h5>
                    <p>Sed do eiusmod tempor incididunt ut labore.</p>
                    <h5 class="fw-bold">Duis aute irure</h5>
                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p> 
                </div>
            </div>
        </div>
        <div class="thirdrow d-flex">
            <div class="imgtext">
                <div class="centering" style="width: 600px; height: 600px; padding: 20%;" >
                    <h5 class="fw-bold">Ut enim ad minim</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                    </div>
            </div>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-03.jpg" alt="">
        </div>
    </div>
    <h1 class="mt-5 fw-bold">Related Products</h1>
    <div class="d-flex">
        <router-link style="text-decoration: none; color: inherit;"
        v-for=" (item, index ) in everythingproducts.slice(0, 3)"
        :key="index"
        :to="{ name: 'CartitemView', params: { productId: index }, query: { image: item.img ,title: item.title, oldprice:item.old_price,price:item.price , gender:item.gender} }"
        class="products">
        <div class="card text-start m-2" style="width: 18rem;" v-if="!inputgender || item.gender == productgender ">
        <img :src="item.img" class="card-img-top" alt="...">
        <ul class="list-group-flush fs-6">
            <h6 class="card-title fw-bold">{{item.title}}</h6>
            <li class="list-group-item fw-light text-black-50">{{item.gender}}</li>
            <li class="list-group-item"><span class="text-decoration-line-through fw-light text-black-50" v-if="item.old_price!=null">{{item.old_price}}</span>${{item.price}}</li>
            <i class="fa-regular fa-star" v-for="star in item.stars"></i>
        </ul>
        <button @click="addToCart(item)" class="add-to-cart-btn position-absolute" ><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    </router-link>
    </div>
    </div>
  </template>

  <style>
  body{
    background-image: none;
  }
    .textstuff{
        width: 50%;
    }
    .textstuff a,span{
        text-decoration: none;
        color: grey;
    }
</style>
  
  <script>
    import navbar from '@/components/navbar.vue';
    import ProductsComponent from '@/components/productsComponent.vue';
    import everythingproducts from '@/json/products.json';

  export default {
    components: {
    navbar,
    ProductsComponent,
  },
    data() {
      return {
        productImage: null,
        producttitle:null,
        productoldprice:null,
        productprice:null,
        productgender:null,
        productstars:null,
        everythingproducts,
        quantity:1,
      };
    },
    created() {
      this.productImage = this.$route.query.image;
      this.producttitle = this.$route.query.title;
      this.productoldprice = this.$route.query.oldprice;
      this.productprice = this.$route.query.price;
      this.productgender = this.$route.query.gender;
      this.productstars = this.$route.query.stars;
    },
    methods: {
        addToCart(item) {
      const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

      const newProduct = {
        "title": item.title,
        "gender": item.gender,
        "price": item.price,
        "img": item.img,
        "stars": item.stars,
        "quantity":parseFloat( this.quantity)
      };

      const existingProductIndex = existingProducts.findIndex(product => product.title === newProduct.title);

      if (existingProductIndex !== -1) {
        existingProducts[existingProductIndex].quantity += parseFloat( this.quantity);
      } else {
        existingProducts.push(newProduct);
      }

      localStorage.setItem('products', JSON.stringify(existingProducts));
      // window.location.reload();
    },
    redirectToProductDetails(imageSrc) {
      this.$router.push({ name: 'CartitemView', query: { image: imageSrc } });
    },
    // handleRouteChange() {

    //   window.location.reload();

    // },
  },
  // watch: {
  //   '$route': 'handleRouteChange',
  // },
  };
  </script>