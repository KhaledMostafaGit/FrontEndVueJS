<template>
    <router-link style="text-decoration: none; color: inherit;"
    v-for=" (item, index ) in products"
    :key="index"
    :to="{ name: 'CartitemView', params: { productId: index }, query: { image: item.img ,title: item.title, oldprice:item.old_price,price:item.price , gender:item.gender,stars:item.stars} }"
    class="products"
  >

        <div class="card text-start m-2" style="width: 18rem;" v-if="!inputgender || item.gender === inputgender">
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
</template>

<style>
.add-to-cart-btn{
    top:5%;
    left:85%;
    border-radius: 50%;
    border: 1px solid white;
    opacity: 0;
    transition: opacity 0.3s ease;
}
.card:hover > .add-to-cart-btn{
    opacity: 1;
}

</style>

<script>

export default {
 
    props:['products','inputgender'],
    methods: {
        addToCart(item) {
            var quantity=1;
 
      const existingProducts = JSON.parse(localStorage.getItem('products')) || [];


      const newProduct = {
        "title": item.title,
        "gender": item.gender,
        "price": item.price,
        "img": item.img,
        "stars": item.stars,
        "quantity":quantity
      };


      const existingProductIndex = existingProducts.findIndex(product => product.title === newProduct.title);

      if (existingProductIndex !== -1) {
 
        existingProducts[existingProductIndex].quantity += 1;
      } else {

        existingProducts.push(newProduct);
      }

      localStorage.setItem('products', JSON.stringify(existingProducts));

    },
    redirectToProductDetails(imageSrc) {

      this.$router.push({ name: 'CartitemView', query: { image: imageSrc } });
    },
},
    
}
</script>