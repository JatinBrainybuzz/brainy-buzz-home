<template>
    <div class="tp-product-details-tab-nav tp-tab">
      <nav>
        <div class="nav nav-tabs border-b border-gray-300 justify-center relative flex gap-5 " id="navPresentationTab" >
          <button  class="nav-link" id="nav-description-tab" type="button" :class="activeTab == 0 ? 'active underline': ''" @click="handleTabClick(0)">Description</button>
          <!-- @click="handleActiveMarker($event)" -->
          <button  class="nav-link" id="nav-addInfo-tab" :class="activeTab == 1 ? 'active underline ': ''" type="button" @click="handleTabClick(1)">Additional information</button>
          <!-- @click="handleActiveMarker($event)" -->
          <button class="nav-link" id="nav-review-tab" :class="activeTab == 2 ? 'active underline': ''" type="button" @click="handleTabClick(2)">Reviews (7)
            <!-- {{product.reviews?.length}} -->
            </button>
          <!-- @click="handleActiveMarker($event)" -->
          <span id="productTabMarker" class="absolute h-[1px] bg-black top-8 block w-full "></span>
        </div>
      </nav>  
      <div>
        <div class="tab-pane block px-10 " v-if="activeTab === 0">
            <div class="pt-14">
              <div class="grid grid-cols-1 justify-center">
                  <div>
                    <div class=" pb-28">
                        <div class="grid grid-cols-1">
                          <div>
                              <div class="tp-product-details-desc-content pt-25">
                                <span>
                                    headphone
                                    <!-- {{product.category.name}} -->
                                </span>
                                <h3 class=" lg:text-4xl text-3xl md:text-2xl font-medium mb-3">
                                    HeadPhones
                                    <!-- {{product.title}} -->
                                </h3>
                                <p class=" text-wrap text-start" >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio quia architecto sed possimus, a, harum vitae placeat eaque vero natus veritatis minima error omnis quo eum aut incidunt corporis quis suscipit sunt ut provident consectetur pariatur! Nisi aliquid voluptatem tenetur. Non autem ipsam quam nobis reiciendis doloribus aut architecto?
                                    <!-- {{ product.description }} -->
                                </p>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="tab-pane transition-1 block " v-if="activeTab === 1">
            <div class=" pt-14 sm:overflow-auto">
              <div class="grid grid-cols-1">
                    <!-- <table>
                        <tbody>
                          <tr v-for="(info,i) in product.additionalInformation" :key="i">
                              <td>{{info.key}}</td>
                              <td>{{info.value}}</td>
                          </tr>
                        </tbody>
                    </table> -->
                    <UTable :rows="people" />
              </div>
            </div>
        </div>
        <div class="tab-pane fade block " v-if="activeTab === 2">
            <div class="pt-14">
              <div class="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <div class="tp-product-details-review-statics">
                        <!-- number -->
                        <div class="border border-gray-300 px-10 py-8 inline-block mb-10">
                          <h3 class=" text-xl font-medium mb-3">Customer reviews</h3>
                          <div class=" mb-3 flex items-center">
                              <div class=" text-5xl font-medium text-black mr-2">
                                <span>4.5</span>
                              </div>
                              <div class=" mr-1 flex items-center">
                                <span class="text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                <span class="text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                <span class="text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                <span class="text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                <span class="text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                <p class="ml-1 text-sm mb-0">(5
                                    <!-- {{product.reviews?.length}} -->
                                 Reviews)</p>
                              </div>
                          </div>
                          <div class="tp-product-details-review-rating-list">
                              <!-- rating item -->
                              <FrontendProductDetailRatingItem :star="5" width="82" />
                              <FrontendProductDetailRatingItem :star="4" width="30" />
                              <FrontendProductDetailRatingItem :star="3" width="15" />
                              <FrontendProductDetailRatingItem :star="2" width="6" />
                              <FrontendProductDetailRatingItem :star="1" width="10" />
                              <!-- end rating item -->
                          </div>
                        </div>
  
                        <!-- reviews -->
                        <div class="tp-product-details-review-list lg:pr-28">
                          <h3 class="text-xl font-medium mb-5">Rating & Review</h3>
                          <div >
                            <!-- v-if="product.reviews && product.reviews.length > 0" -->
                            <div class=" mb-8 flex items-start gap-2">
                                <!-- v-for="(item,i) in product.reviews" :key="i" -->
                                <div class="tp-product-details-review-avater-thumb">
                                  <a href="#">
                                      <img class=" w-12 h-12 rounded-full mr-5" src="/public/bbLogo.png" alt="user">
                                     
                                  </a>
                                </div>
                                <div >
                                  <div class=" leading-4 mb-1 flex items-center">
                                      <span class=" text-xs  text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                      <span class=" text-xs  text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                      <span class=" text-xs  text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                      <span class=" text-xs  text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                      <span class=" text-xs  text-yellow-400"><Icon name="material-symbols-light:kid-star-sharp" /></span>
                                  </div>
                                  <h3 class="text-base font-medium mb-2 inline-block">
                                    Ramesh
                                    <!-- {{item.name}} -->
                                </h3>
                                  <span class="text-sm relative pl-3 ml-1 stary">
                                    <!-- {{item.date}}  -->
                                    11-12-24
                                </span>
    
                                  <div class="text-sm leading-5 mb-0">
                                      <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fuga, amet aperiam voluptates inventore rerum?
                                        <!-- {{item.review}} -->
                                    </p>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <!-- <div v-else>
                            <h5>No Reviews Found</h5>
                          </div> -->
                        </div>
                    </div>
                  </div> <!-- end col -->
                  <div>
                    <div class=" mt-11">
                        <h3 class="text-xl font-medium mb-1">Review this product</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                       <!-- form start -->
                       <FrontendFormsReview />
                       <!-- form end -->
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>                                                
    </div>
  </template>
  
  <script setup >
    const activeTab = ref(0)
    function handleTabClick(index) {
        activeTab.value = index
    }
  const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]

  </script>
  