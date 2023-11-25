<template>
    <router-link style="text-decoration: none; color: inherit;"
    v-for=" (item, index ) in featuredprods"
    :key="index"
    :to="{ name: 'CartitemView', params: { productId: index }, query: { image: item.img ,title: item.title, oldprice:item.old_price,price:item.price , gender:item.gender,stars:item.stars} }"
    class="products"
  >

        <div class="card text-start " style="width: 18rem;" v-if="!inputgender || item.gender === inputgender">
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
    data() {
        return {
            featuredprods:[
                {
                    title:"DNK Yellow Shoes",
                    gender:"Men",
                    old_price:"$150.00",
                    price:"120.00",
                    stars:5,
                    img:"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"
                },
                {
                    title: "DNK Blue Shoes",
                    gender: "Men",
                    price: "240.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg"
                },
                {
                    title: "Dark Brown Jeans",
                    gender: "Men",
                    price: "150.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg"
                },
                {
                    title: "Blue Denim Jeans",
                    gender: "Women",
                    price: "150.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg"
                },
                {
                    title: "Basic Gray Jeans",
                    gender: "Women",
                    price: "150.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg"
                },
                {
                    title: "Blue Denim Shorts",
                    gender: "Women",
                    old_price:"$150.00",
                    price: "130.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg"
                },
                {
                    title: "Anchor Bracelet",
                    gender: "Accessories",
                    price: "180.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-300x300.jpg"
                },
                {
                    title: "Boho Bangle Bracelet",
                    gender: "Accessories",
                    price: "170.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg"
                },
                {
                    title: "Light Brown Purse",
                    gender: "Accessories",
                    price: "150.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-300x300.jpg"
                },
                {
                    title: "Bright Red Bag",
                    gender: "Accessories",
                    price: "140.00",
                    stars:5,
                    img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg"
                }
            ]
        }
    },
    methods: {
        addToCart(item) {
            var quantity=1;
      // Retrieve existing products from localStorage
      const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

      // New product to add to the cart
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