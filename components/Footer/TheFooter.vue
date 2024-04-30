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
              <li><a href="#">Track Orders</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
        </div>

          <div>
            <h4 class="text-4xl mb-4">Information</h4>
            <div class="tp-footer-widget-content leading-loose">
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Contact Us</a></li>
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
