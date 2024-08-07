<template>
  <div class=" ml-5 sticky top-[120px]">
    <div class="tp-product-details-category text-base mb-2 leading-4">
      <span class="hover:text-primary"> <NuxtLink :to="`/product-category/${category}`"> {{ categoryName }} </NuxtLink></span>
    </div>
    <h3 class=" text-2xl md:text-3xl font-medium leading-4 mb-4">
      {{ productDetail?.name }}</h3>
    
      <div v-if="productDetail?.productType == 'configurable'">
      <div v-for="(attribute, attributeName) in productDetail?.attributes" :key="attribute.id">
        <p class="mt-2">{{ attributeName }}</p>
        <div class="flex space-x-4">
             
          <div class="my-2" v-for="attributeValue in attribute" :key="attribute.id" >
            <div class=" w-12 h-10 rounded-sm cursor-pointer border flex justify-center items-center" :data-attribute-value="attributeValue.value"
            :id="attributeName.replace(' ', '-') + '-variant-' + attributeValue.value"
            :class="attributeValue.value == attributeValue.selectedValue ? 'border-success ' + attributeName.replace(' ', '-') + '-attribute' : attributeName.replace(' ', '-') + '-attribute'"
            @click="filter(attributeName.replace(' ', '-'), productDetail.product_id, attributeValue.value, attributeValue.text)">
              {{ attributeValue?.text }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <swiper class="swiper-responsive-breakpoints configurable-card-swiper mb-1">
              <swiper-slide v-for="attributeValue in attribute"
                  :key="attribute.id" class="border flex items-center justify-center mt-50">
                  <div class="w-24 h-12 bg-white border border-gray-300 flex items-center justify-center text-gray-700">
                    {{ attributeValue?.text }}
                  </div>
              </swiper-slide>
          </swiper> -->

    <!-- inventory details -->
    <!-- <div class="tp-product-details-inventory flex items-center mb-4">
      <div class=" mr-3 mb-4 text-white bg-blue-500">
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
          <span>(4 Reviews)</span>
        </div>
      </div>
    </div> -->
    <p class="text-left mt-2">
      <ClientOnly>
        <div v-html="description">
        </div>
        <span @click="textMore = !textMore">
        </span>
      </ClientOnly>
    </p>

    <!-- price -->
    <div class="tp-product-details-price-wrapper mb-5">
      <div class=" font-medium text-2xl tracking-tight">
        <span class=" font-normal text-base line-through text-gray-600 old-price"
          v-if="productDetail?.original_price">{{ currency ? (currency?.symbol ? currency?.symbol : currency.code) : '₹' }}
          {{ productDetail?.original_price }}
        </span>
        <span class=" font-normal text-base line-through text-gray-600 old-price"
          v-else>{{ currency ? (currency?.symbol ? currency?.symbol : currency?.code) : '₹' }}
          {{ productDetail?.price }}
        </span>
        <span class="tp-product-details-price ml-2 text-black new-price">
          {{ currency ? (currency?.symbol ? currency?.symbol : currency.code) : '₹' }} {{ productDetail?.price }}
          {{ nuxtApp.$getPercent(productDetail?.original_price, productDetail?.price) }}%
          Off
        </span>
      </div>
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
          <span class=" absolute top-1 leading-6 text-center rounded left-3 cursor-pointer" @click="count >0 ? count-- : count">
            <Icon name="ic:outline-minus" />
          </span>
          <input
            class="leading-12 bg-gray-100 border-none rounded-none text-base text-black h-10 text-center border border-gray-300"
            type="text" :value="count" disabled>
          <!-- :value="cartStore.orderQuantity" -->
          <span class=" absolute top-1 leading-6 text-center rounded right-4 cursor-pointer" @click="count++">
            <!-- @click="cartStore.increment" -->
            <Icon name="material-symbols:add" />
          </span>
        </div>
        <div
          class="mb-15 w-full px-3 relative border hover:bg-primary-600 hover:text-white border-gray-200 text-base py-2 text-black text-center">
          <button class="tp-product-details-add-to-cart-btn" @click="Cart = count + Cart">
            <!--  -->
            Add To Cart</button>
        </div>
      </div>
      <nuxt-link class=" inline-block text-base font-medium py-2 px-7 bg-primary cursor-pointer text-white w-full text-center">
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
            {{productDetail?.sku}}
          </p>
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
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  const textMore = true
  const variantLoading = ref(false)
  const selectedAttribute = ref()

  // const config = useRuntimeConfig();
  const props = defineProps(['productDetail', 'currency', 'description'])
  const nuxtApp = useNuxtApp();
  const count = ref(0)
  const cartStore = useCartStore();
  const {Cart} = storeToRefs(cartStore);

  const emit = defineEmits(['filterData']);
  const router = useRoute();

  const pathsegments = router.path.split("/");
  const categoryName = pathsegments[pathsegments.length - 2].toUpperCase();
  const category = pathsegments[pathsegments.length - 2];


  const filter = (attributeName, productID, event, selectedAttributeName = '') => {
            variantLoading.value = true

            if (selectedAttributeName) {
             const attrName = document.querySelector('.' + attributeName + '-attribute-selected-name');
              if (attrName){
                element.innerHTML = selectedAttributeName;
              }
            }
            // $(document).find('.' + attributeName + '-attribute').removeClass('border-success');
            document.querySelectorAll('.' + attributeName + '-attribute').forEach(function(element) {
              element.classList.remove('border-success');
            })
            // $('#' + attributeName + '-variant-' + event).addClass('border-success')
            document.getElementById(attributeName + '-variant-' + event).classList.add('border-success');
            var attributeOptions = [];
            var selectedAttributeIdvalue = [];
            // $.each($(".border-success"), function () {
            //     attributeOptions.push($(this).attr('data-attribute-value'));
            //     selectedAttributeIdvalue.push($(this).attr('id'));
            // });
            document.querySelectorAll('.border-success').forEach(function(element) {
              attributeOptions.push(element.getAttribute('data-attribute-value'));
              selectedAttributeIdvalue.push(element.id);
            });
            const customerData = localStorage.getItem('customerData');

            var newData = {
                'filterData': attributeOptions,
                'productId': productID,
                'filterChangeColumnId': event,
                'selectedAttributeId': selectedAttributeIdvalue,
                'customerToken': customerData ? JSON.parse(localStorage.getItem('customerData')) : null,
            }
            emit('filterData', newData);
        }

  const { $getPercent } = useNuxtApp();
</script>

<style scoped>
.border-success{
  border-width: 2px;
  border-color: aquamarine;
}
</style>