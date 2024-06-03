<template>
  <div>
    <FooterSubscribe />
    <footer class=" px-10">
      <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:divide-x pt-10">
          <div class="container ml-4">
            <NuxtLink class="" to="/">
              <img src="/public/brainybuzzlong.png" class="w-auto h-20 hidden md:block" alt="Image Link here">
              <img src="/public/bbLogo.png" class="w-auto h-16 md:hidden items-center" alt="Image Link here">
            </NuxtLink>
            <div class="text-medium md:mx-6">
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, aspernatur.
              </span>
            </div>
            <FooterSocial />
          </div>
        <div>
          <h4 class=" text-4xl mb-4">My Account</h4>
          <div class="mb-6 font-medium text-base relative leading-loose">
            <ul>
              <li><NuxtLink to="/track-order">Track Orders</NuxtLink></li>
              <li><NuxtLink to="">Shipping</NuxtLink></li>
              <li><NuxtLink to="/wishlist">Wishlist</NuxtLink></li>
              <li><NuxtLink to="/cart">Cart</NuxtLink></li>
            </ul>
          </div>
        </div>

          <div>
            <h4 class="text-4xl mb-4">Information</h4>
            <div class="tp-footer-widget-content leading-loose">
              <ul>
                <li><NuxtLink to="">Our Story</NuxtLink></li>
                <li><NuxtLink to="">Careers</NuxtLink></li>
                <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
                <li><NuxtLink to="terms">Terms & Conditions</NuxtLink></li>
                <li><NuxtLink to="">Latest News</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
        <div class="mb-50">
          <div class=" leading-loose">
            <h4 class="text-4xl mb-4">Talk To Us</h4>
            <div class="font-medium text-base relative">
              <div class="text-base inline-block mb-2">
                <span>Got Questions? Call us</span>
                <h4><a href="tel:670-413-90-762">+670 413 90 762</a></h4>
              </div>
              <!-- footer contact start -->
              <FooterContact />
              <!-- footer contact end -->
            </div>
          </div>
        </div>
      </div>
        <FooterBottom />
    </div>
    </footer>
  </div>
</template>
