<template>
    <tr>
      <!-- img -->
      <td class="tp-cart-img">
        <!-- <nuxt-link :href="`/product-details/${item.id}`" style="background-color: #F2F3F5;display: block;">
          <img :src="item.img" alt=""/>
        </nuxt-link> -->
        <img />
        <!-- title -->
        <span> New Product</span>
      </td>      
      <!-- price -->
      <td class="tp-cart-price">
        <span> $ 200</span>
        <!-- <span>${{item.price.toFixed(2)}}</span> -->
    </td>
      <!-- quantity -->
      <td class="tp-cart-quantity w-44">
        <div>
            <span class="btn">
                Add to Cart 
            </span>
        </div>
      </td>
      <!-- action -->
      <td class="tp-cart-action ">
        <button class="tp-cart-action-btn " >
            <!-- @click="cartStore.removeCartProduct(item)" -->
          <Icon name="radix-icons:cross-2" />
          <span>Remove</span>
        </button>
      </td>
    </tr>
  </template>
  
  <script setup>

  </script>
  