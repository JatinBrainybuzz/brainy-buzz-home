<template>
  <div>
    <FooterSubscribe />
    <footer class=" px-10">
      <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:divide-x pt-10">
          <div class="container ml-4 px-2">
            <NuxtLink class=" flex mb-2 gap-2 mr-2" :to="{name: 'home'}">
              <!-- <img src="/public/brainybuzzlong.png" class="w-auto h-20 hidden md:block" alt="Image Link here"> -->
              <img src="/public/bbLogo.png" class="w-auto h-16 items-center" alt="Image Link here">
             <ClientOnly>
               <h2 class="text-primary-600 font-semibold">{{ items?.generalSetting?.default_project_name }}</h2>
             </ClientOnly> 
            </NuxtLink>
            <div class="text-medium md:mx-6">
              <ClientOnly>
              <p class=" font-normal">
                {{items?.generalSetting?.footer_content}}
              </p>
              </ClientOnly>
            </div>
            <ClientOnly>
              <FooterSocial :social="items?.generalSetting"/>
            </ClientOnly>
          </div>
        <!-- <div>
          <h4 class=" text-4xl mb-4">My Account</h4>
          <div class="mb-6 font-medium text-base relative leading-loose">
            <ul>
              <li><NuxtLink :to="{name: 'track'}">Track Orders</NuxtLink></li>
              <li><NuxtLink :to="{name: 'home'}">Shipping</NuxtLink></li>
              <li><NuxtLink :to="{name: 'wishlist'}">Wishlist</NuxtLink></li>
              <li><NuxtLink :to="{name: 'cart'}">Cart</NuxtLink></li>
            </ul>
          </div>
        </div> -->

          <div>
            <h4 class="text-4xl mb-4">Information</h4>
            <div class="tp-footer-widget-content leading-loose">
              <ul>
                <li><NuxtLink :to="{name: 'home'}">Our Story</NuxtLink></li>
                <li><NuxtLink :to="{name: 'home'}">Careers</NuxtLink></li>
                <li><NuxtLink :to="{name: 'privacy'}">Privacy Policy</NuxtLink></li>
                <li><NuxtLink :to="{name: 'terms'}">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink :to="{name: 'home'}">Latest News</NuxtLink></li>
                <li><NuxtLink :to="{name: 'contact'}">Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
        <div class="mb-50">
          <div class=" leading-loose">
            <h4 class="text-4xl mb-4">Talk To Us</h4>
            <div class="font-medium text-base relative">
              <div class="text-base inline-block mb-2">
                <span>Got Questions? Call us</span>
                <h4>
                  <ClientOnly>
                    <a :href="'tel:' + items?.generalSetting?.default_mobile_number">{{ items?.generalSetting?.default_mobile_number }}</a>
                  </ClientOnly>
                </h4>
              </div>
              <!-- footer contact start -->
              <FooterContact :address="items?.generalSetting" />
              <!-- footer contact end -->
            </div>
          </div>
        </div>
      </div>
        <FooterBottom :address="items?.generalSetting"/>
    </div>
    </footer>
  </div>
</template>

<script setup>
const HomeApiStore = useHomeApiStore()
const items = ref(null)
onBeforeMount(async () => {
    const data =  HomeApiStore.data
    // items.value = data?.value?.data.parent_category;
    items.value = data?.data;   
});
</script>
