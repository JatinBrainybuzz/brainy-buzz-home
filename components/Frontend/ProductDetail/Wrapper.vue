<template>
  <div class=" ml-5 sticky top-[120px]">
    <div class="tp-product-details-category text-base mb-2 leading-4">
      <!-- <span>{{product.parent}}</span> -->
      <span class="hover:text-primary"> Category name {{ productDetail }} </span>
    </div>
    <h3 class=" text-2xl md:text-3xl font-medium leading-4 mb-4">
      <!-- {{product.title}} -->
      {{ productDetail?.name }}</h3>

    <!-- inventory details -->
    <div class="tp-product-details-inventory flex items-center mb-4">
      <div class=" mr-3 mb-4 text-white bg-blue-500">
        <!-- <span>{{product.status}}</span> -->
        <span class="mr-3 inline-block text-base px-1 py-3">In stock</span>
      </div>
      <div class="tp-product-details-rating-wrapper flex items-center mb-4">
        <div class="tp-product-details-rating items-center text-yellow-400 mr-3 flex flex-wrap">
          <span>
            <Icon name="material-symbols:star" /></span>
          <span>
            <Icon name="material-symbols:star" /></span>
          <span>
            <Icon name="material-symbols:star" /></span>
          <span>
            <Icon name="material-symbols:star" /></span>
          <span>
            <Icon name="material-symbols:star" /></span>
        </div>
        <div class="tp-product-details-reviews">
          <span>(
            <!-- {{product.reviews?.length}} -->
            4 Reviews)</span>
        </div>
      </div>
    </div>
    <p class="text-left">
      <!-- {{ textMore ? product.description : `${product.description.substring(0, 100)}...` }}  -->
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quibusdam expedita nam dolorum modi quia officia
      molestiae totam iure dolor?
      <span @click="textMore = !textMore">
        <!-- {{textMore ? 'See less' : 'See more'}} -->
      </span></p>

    <!-- price -->
    <div class="tp-product-details-price-wrapper mb-5">
      <div class=" font-medium text-2xl tracking-tight">
        <!-- v-if="product.discount > 0" -->
        <span class=" font-normal text-base line-through text-gray-600 old-price">$ 1099
          <!-- {{ product.price }} -->
        </span>
        <span class="tp-product-details-price ml-2 text-black new-price">
          $1299
          <!-- {{(Number(product.price) - (Number(product.price) * Number(product.discount)) / 100).toFixed(2)}} -->
        </span>
      </div>
      <span>
        <!-- v-else class="tp-product-details-price old-price" -->

        <!-- {{ product.price.toFixed(2) }} -->
      </span>
    </div>

    <!-- variations -->
    <div class="tp-product-details-variation mb-7 ">
      <!-- v-if="hasColorData" -->
      <div class="tp-product-details-variation-item mb-4 flex ">
        <h4 class="tp-product-details-variation-title">Color :</h4>
        <div class="tp-product-details-variation-list ml-3">
          <span>
            Red
          </span>
          <span>
            Green
          </span>
          <span>
            Yellow
          </span>
          <span class="">
            white
          </span>
          <!-- <button
            v-for="(item, i) in product.imageURLs"
            :key="i"
            @click="productStore.handleImageActive(item.img)"
            type="button"
            :class="['color', 'tp-color-variation-btn', item.img === productStore.activeImg ? 'active' : '']"
            style="margin-right:5px"
          >
            <span :data-bg-color="item.color?.clrCode" :style="`background-color:${item.color?.clrCode}`"></span>
            <span v-if="item.color && item.color.name" class="tp-color-variation-tootltip">
              {{ item.color.name }}
            </span>
          </button> -->
        </div>
      </div>
    </div>

    <!-- product countdown start -->
    <div>
      <!-- v-if="product.offerDate?.endDate" -->
      <!-- <product-details-countdown /> -->

    </div>
    <!-- product countdown end -->

    <!-- actions -->
    <div class=" mb-4">
      <h3 class=" text-base font-normal mb-3">Quantity</h3>
      <div class="flex mb-2 gap-2">
        <div class=" rounded-none mb-15 relative">
          <span class=" absolute top-1 leading-6 text-center rounded left-3 cursor-pointer" @click="quantity--">
            <Icon name="ic:outline-minus" />
          </span>
          <input
            class="leading-12 bg-gray-100 border-none rounded-none text-base text-black h-10 text-center border border-gray-300"
            type="text" :value="quantity" disabled>
          <!-- :value="cartStore.orderQuantity" -->
          <span class=" absolute top-1 leading-6 text-center rounded right-4 cursor-pointer" @click="quantity++">
            <!-- @click="cartStore.increment" -->
            <Icon name="material-symbols:add" />
          </span>
        </div>
        <div
          class="mb-15 w-full px-3 relative border hover:bg-primary-600 hover:text-white border-gray-200 text-base py-2 text-black text-center">
          <button class="tp-product-details-add-to-cart-btn">
            <!-- @click="cartStore.addCartProduct(product)" -->
            Add To Cart</button>
        </div>
      </div>
      <nuxt-link class=" inline-block text-base font-medium py-2 px-7 bg-primary text-white w-full text-center">
        <!-- :href="`/product-details/${product.id}`" -->
        Buy Now</nuxt-link>
    </div>
    <div class="border-b border-gray-300 pb-2 mb-6 flex gap-2">
      <button type="button" class=" text-base hover:text-primary">
        <!-- @click="compareStore.add_compare_product(product)" -->
        <Icon name="material-symbols:compare-arrows-rounded" />
        Compare
      </button>
      <button type="button" class="tp-product-details-action-sm-btn  hover:text-primary">
        <!-- @click="wishlistStore.add_wishlist_product(product)" -->
        <Icon name="ic:round-favorite-border" />
        Add Wishlist
      </button>
      <button type="button" class="tp-product-details-action-sm-btn  hover:text-primary">
        <Icon name="material-symbols:help-outline-rounded" />
        Ask a question
      </button>
    </div>

    <div>
      <!-- v-if="isShowBottom" -->
      <div class="tp-product-details-query mb-5">
        <div class="tp-product-details-query-item flex items-center gap-2">
          <span>SKU: </span>
          <p class="text-gray-600">
            <!-- {{product.sku}}  -->
            test001</p>
        </div>
        <div class="tp-product-details-query-item flex items-center gap-2">
          <span>Category: </span>
          <p class="text-gray-600">
            <!-- {{product.parent}}  -->
            Headphones</p>
        </div>
        <div class="tp-product-details-query-item flex items-center gap-2">
          <span>Tag: </span>
          <p class="text-gray-600">Android</p>
        </div>
      </div>
      <div class=" mb-5 text-base flex gap-2 items-center">
        <span class=" text-base text-black mr-1">Share: </span>
        <a href="#"
          class="hover:bg-primary inline-block w-9 h-9 leading-9 text-center border border-gray-200 rounded-full">
          <Icon name="gg:facebook" class="mb-1" /></a>
        <a href="#"
          class="hover:bg-primary inline-block w-9 h-9 leading-9 text-center border border-gray-200 rounded-full">
          <Icon name="prime:twitter" class="mb-1" /> </a>
        <a href="#"
          class="hover:bg-primary inline-block w-9 h-9 leading-9 text-center border border-gray-200 rounded-full">
          <Icon name="akar-icons:linkedinv2-fill" class="mb-1" /></a>
        <a href="#"
          class="hover:bg-primary inline-block w-9 h-9 leading-9 text-center border border-gray-200 rounded-full">
          <Icon name="ic:outline-whatsapp" class="mb-1" /> </a>
      </div>
      <div class="tp-product-details-msg mb-15  text-gray-500 mb-3">
        <ul>
          <li>
            <Icon name="icon-park-outline:check-correct" class=" text-primary-600" /> 30 days easy returns</li>
          <li>
            <Icon name="icon-park-outline:check-correct" class=" text-primary-600" /> Order yours before 2.30pm for same
            day dispatch</li>
        </ul>
      </div>
      <div class="tp-product-details-payment flex items-center flex-wrap justify-between border px-5 py-3 bg-gray-100">
        <p>Guaranteed safe <br> & secure checkout</p>
        <img src="" alt="">
        <!-- /img/product/icons/payment-option.png -->
      </div>
    </div>

  </div>
</template>

<script setup>
  const textMore = true
  const quantity = ref(0)
  const props = defineProps(['productDetail'])
</script>