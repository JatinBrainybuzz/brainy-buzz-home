<template>
    <div class="">
    <!-- Breadcrump Area -->
    <section class="breadcrumb__area text-center bg-center bg-cover bg-no-repeat pt-24 pb-14">
      <div class="container">
          <div class="grid grid-cols-1">
            <div class="">
                <div class="breadcrumb__content relative  z-[1]">
                  <h3 class="breadcrumb__title text-4xl font-semibold">Keep In Touch with Us</h3>
                  <div class="breadcrumb__list">
                      <span><nuxt-link href="/">Home</nuxt-link></span>
                      <span>Contact</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>

    <section class=" sm:px-[7%] mb-24">
        <div class="container">
        <div class=" grid grid-cols-1 lg:grid-cols-3 shadow-xl px-2 py-2">
            <div class=" col-span-1 lg:col-span-2">
                <!-- Contact Form  -->
                <FrontendFormsContact />
            </div>
            <div class=" col-span-1 mt-9 px-1">
                <div class=" mb-9">
                    <div class="flex items-end justify-start mb-5 h-16">
                        <span class=" text-6xl">
                            <img src="/public/img/contact/contact-icon-1.png">
                        </span>
                    </div>
                    <div class="tp-contact-info-content">
                        <p data-info="mail" class=" text-lg leading-6  text-gray-700 text-start"><a href="mailto:contact@shofy.com">contact@shofy.com</a></p>
                        <p data-info="phone" class=" text-lg leading-6 text-black font-semibold tracking-wider text-start"><a href="tel:">+91 98 753 42 312</a></p>
                    </div>
                </div>
                <div class=" mb-9">
                    <div class="flex items-end justify-start mb-5 h-16">
                        <span class=" text-6xl">
                            <img src="/public/img/contact/contact-icon-2.png">
                        </span>
                    </div>
                    <div class="tp-contact-info-content">
                        <p class=" text-lg leading-6 text-gray-700 text-start"><a href="#"> 
                            84 sleepy hollow st. <br> jamaica, New York 1432</a>
                        </p>
                    </div>
                </div>
                <div class=" mb-9">
                    <div class="flex items-end justify-start mb-5 h-16">
                        <span class=" text-6xl">
                            <img src="/public/img/contact/contact-icon-3.png">
                        </span>
                    </div>
                    <div class="tp-contact-info-content">
                        <p class=" text-lg leading-6 text-gray-700 text-start"><a href="#"> 
                            Find on social media</a>
                        </p>
                        <div class="flex mt-4">
                            <a href="#" class=" w-38 h-38 px-3 py-2 leading-36 text-center border border-gray-200 bg-white text-black hover:bg-primary hover:text-white"><Icon name="fa6-brands:facebook-f" /></a>                               
                            <a href="#" class=" w-38 h-38 px-3 py-2 leading-36 text-center border border-gray-200 bg-white text-black hover:bg-primary hover:text-white" ><Icon name="bi:twitter-x" /></a>                               
                            <a href="#" class=" w-38 h-38 px-3 py-2 leading-36 text-center border border-gray-200 bg-white text-black hover:bg-primary hover:text-white" ><Icon name="ri:linkedin-fill"  /></a>                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>


    </div>
</template>

<script setup>

</script>

<style scoped>

</style>