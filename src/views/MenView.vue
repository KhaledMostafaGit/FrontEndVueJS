<template>
    <link rel="stylesheet" href="styleeverything.css">
    <navbar logoimg="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" width="120" height="120"/>
      <div class="maincont mx-auto">
          <div class="sidebar d-flex flex-column ">
              <div class="search">
                  <form class="d-flex " role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
              <div class="categories d-flex flex-column text-start my-5">
                  <h3>
                      Categories
                  </h3>
                  <router-link to="/Accessories"> <a href="">Accessories</a></router-link>
               <router-link to="/Men"> <a href="">Men</a></router-link>
               <router-link to="/Women"> <a href="">Women</a></router-link>
              </div>
              <div class="best sellers d-flex flex-column text-start">
                  <h3>
                      Our Best Sellers
                  </h3>
                  <div class="bestproduct d-flex">
                      <img  src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"  alt="" style=" height: 64px;width:64px;">
                      <div class="innerproduct d-flex flex-column">
                          <p class="title fw-bold mb-0">Boho Bangle Bracelet</p>
                          <div class="stars">
                              <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                          </div>
                          <p class="price">$150.00 - $170.00</p>
                      </div>
                  </div>
                  <div class="bestproduct d-flex">
                      <img  src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"  alt="" style=" height: 64px;width:64px;">
                      <div class="innerproduct d-flex flex-column">
                          <p class="title fw-bold mb-0">Boho Bangle Bracelet</p>
                          <div class="stars">
                              <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                          </div>
                          <p class="price">$150.00 - $170.00</p>
                      </div>
                  </div>
                  <div class="bestproduct d-flex">
                      <img  src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"  alt="" style=" height: 64px;width:64px;">
                      <div class="innerproduct d-flex flex-column">
                          <p class="title fw-bold mb-0">Boho Bangle Bracelet</p>
                          <div class="stars">
                              <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                          </div>
                          <p class="price">$150.00 - $170.00</p>
                      </div>
                  </div>
                  <div class="bestproduct d-flex">
                      <img  src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"  alt="" style=" height: 64px;width:64px;">
                      <div class="innerproduct d-flex flex-column">
                          <p class="title fw-bold mb-0">Boho Bangle Bracelet</p>
                          <div class="stars">
                              <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                          </div>
                          <p class="price">$150.00 - $170.00</p>
                      </div>
                  </div>
                  <div class="bestproduct d-flex">
                      <img  src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"  alt="" style=" height: 64px;width:64px;">
                      <div class="innerproduct d-flex flex-column">
                          <p class="title fw-bold mb-0">Boho Bangle Bracelet</p>
                          <div class="stars">
                              <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                          </div>
                          <p class="price">$150.00 - $170.00</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="prodmaincontainer d-flex flex-column text-start" style="width: 60%;">
            <div class="toptextbar mt-5">
                <router-link to="/"><a>Home</a></router-link><span>/Men</span>
            </div>
            <h1 class="mentext mb-5" style="font-size: 65px;">Men</h1>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
              <div class="prodscontainer">
                  <ProductsComponent :products="everythingproducts" inputgender="Men"/>
              </div>
          </div>
      </div>
      </template>
  
  <style>
  .prodmaincontainer{
    margin: 100px;
}
  .toptextbar{
    color: grey;
  }
  .toptextbar a{
    text-decoration: none;
    color: grey;
  }
  .bestproduct{
      height: 100px;
      width: 270px;
  }
  .categories a{
    padding:5px 0;
    text-decoration: none;
    color: black;
    transition: color ease 0.5s;
}
.categories a:hover{
    color: rgb(0, 140, 255);
}
  .navbar a{
      color:black;
      transition: color ease 0.5s;
  }
  .navbar a:hover{
      color: rgb(0, 140, 255);
  }
  .sidebar{
      width: 350px;
  }
  .maincont{
      display: flex;
      width: 80%;
  }
  .prodscontainer{
         display: flex;
        flex-wrap: wrap; 
        /* gap: 10px;  */
        margin: 0 auto;
        width: 1000px;
    }
  </style>
  
  <script>
  import navbar from '@/components/navbar.vue';
  import ProductsComponent from '@/components/productsComponent.vue';
  import everythingproducts from '@/json/products.json';
  
  
  export default {
      data() {
          return {
              everythingproducts,
          }
      },
    components:{
      navbar,
      ProductsComponent,
      },
  }
  </script>