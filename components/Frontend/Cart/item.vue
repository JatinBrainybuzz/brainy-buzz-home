<template>
    <tr>
      <!-- img -->
      <td class="tp-cart-img">
        <!-- <nuxt-link :href="`/product-details/${item.id}`" style="background-color: #F2F3F5;display: block;">
          <img :src="item.img" alt=""/>
        </nuxt-link> -->
        <img />
      </td>
      <!-- title -->
      <td class="tp-cart-title">
        <!-- <nuxt-link :href="`/product-details/${item.id}`">{{item.title}}</nuxt-link> -->
      </td>
      <!-- price -->
      <td class="tp-cart-price">
        <span> $ 200</span>
        <!-- <span>${{item.price.toFixed(2)}}</span> -->
    </td>
      <!-- quantity -->
      <td class="tp-cart-quantity w-44">
        <div class="product-quantity-cart w-24 rounded-xl relative border ml-6 border-gray-200 mt-10 mb-10">
          <span class="product-quantity-cart cursor-pointer" >
            <!-- @click="cartStore.quantityDecrement(item)" -->
            <Icon name="ic:twotone-minus" />
          </span>
          <input class=" h-11 w-4 mx-1 border-0 rounded-none text-base text-black leading-10" type="text" value="1"/>
          
          <!-- :value="item.orderQuantity" :v-model="item.orderQuantity" -->
          <span class="product-quantity-cart cursor-pointer" > 
            <!-- @click="cartStore.addCartProduct(item)" -->
            <Icon name="material-symbols:add" />
          </span>
        </div>
      </td>
      <!-- action -->
      <td class="tp-cart-action">
        <button class="tp-cart-action-btn flex gap-2 justify-center items-center" >
            <!-- @click="cartStore.removeCartProduct(item)" -->
          <Icon name="radix-icons:cross-2" />
          <span>Remove</span>
        </button>
      </td>
    </tr>
  </template>
  
  <script setup>

  </script>
  