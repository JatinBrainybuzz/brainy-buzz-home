<template>
    <section class="tp-subscribe-area bg-allports-500 relative z-[1] h-[200px] justify-center items-center">
    
      <div class="tp-subscribe-shape -z-10">
        <img class="absolute top-0 left-0 z-[-1] mix-blend-luminosity opacity-40 max-w-[100%]" src="/img/subscribe/subscribe-shape-1.png" alt="shape">
        <img class="absolute top-[53%] left-[10%] z-[-1] mix-blend-luminosity opacity-40" src="/img/subscribe/subscribe-shape-2.png" alt="shape">
        <img class="absolute bottom-[10%] left-[12%] z-[-1] mix-blend-luminosity opacity-40" src="/img/subscribe/subscribe-shape-3.png" alt="shape">
        <img class="absolute top-[-5%] right-[12%] z-[-1]" src="/img/subscribe/subscribe-shape-4.png" alt="shape">
  
        <div class=" absolute top-[24%] right-[17%] z-[-2] width-[399px] height-[110px]">
          <img class="absolute md:top-[-34%] left-[-6%] -top-[35%]" src="/img/subscribe/plane.png" alt="plane">
          <FooterAnimatedLine />
        </div>
      </div>

      <div class="grid grid-cols-1 items-center">
      <div class="container">
        <div class="md:flex items-center mt-4 gap-4 lg:mt-16 lg:gap-28 md:ml-40">
          <div class="xl:col-span-7 lg:col-span-7 ml-4">
            <div class="mb-[25px] font-medium text-base text-white">
              <span>Sale 20% off all store</span>
              <h3 class="font-extrabold md:text-4xl text-2xl text-white mb-0 leading-none">Subscribe our Newsletter</h3>
            </div>
          </div>
          <div class="xl:col-span-5 lg:col-span-5">
            <div class="tp-subscribe-form">
              <form action="#">
                <div class="rounded-none relative flex gap-2 mr-3 ml-3">
                  <input type="email" placeholder=" Enter Your Email" class="w-full h-14 md:w-auto lg:w-full bg-white shadow-sm rounded-md font-roboto border-0 pr-40">
                  <UButton label="Subscribe" color="black" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </template>