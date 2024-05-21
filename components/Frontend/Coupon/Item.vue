<template>
    <div
      class="tp-coupon-item mb-8 md:gap-3 relative md:flex justify-between items-center border px-3 rounded-lg">
      <span class="coupon-border absolute top-0 bottom-0 md:right-[35%] right-[20%] inline-block w-1 h-full bg-transparent border-l-2 border-dashed border-primary"></span>
      <div class="tp-coupon-item-left flex items-center justify-start md:justify-normal">
        <div class="w-[120px] md:mr-20 lg:mr-2 sm:mr-12 py-3">
          <a href="#" class="">
            <!-- <img
              alt="logo"
              :src="coupon.logo"
              style="background-color: #f2f3f5"
            /> -->
            <img src="/public/error.png" alt="logo" class=" w-auto bg-gray-200 rounded-md">
          </a>
        </div>
        <div class="tp-coupon-content sm:mt-5">
          <h3 class="tp-coupon-title">
            <!-- {{ coupon.title }} -->
           {{ name }}
          </h3>
          <p class="tp-coupon-offer mb-15">
            <span>
              <!-- {{ coupon.discountPercentage }} -->
             23 %</span>Off
          </p>
          <div class="coupon-countdown">
            <div class=" mt-4 text-2xl font-bold">
              <ul>
                <li class="list-none text-xs text-black inline-block px-3 relative uppercase">
                  <span class="block leading-normal">{{ timer.days }}</span> Day
                </li>
                <li class="list-none text-xs text-black inline-block px-3 relative uppercase">
                  <span class="block leading-normal">{{ timer.hours }}</span> Hrs
                </li>
                <li class="list-none text-xs text-black inline-block px-3 relative uppercase">
                  <span class="block leading-normal">{{ timer.minutes }}</span> Min
                </li>
                <li class="list-none text-xs text-black inline-block px-3 relative uppercase">
                  <span class="block leading-normal">{{ timer.seconds }}</span> Sec
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" text-base md:pl-4 lg:pl-1 flex-grow-0 flex-shrink-0 w-[32%]">
        <div class="tp-coupon-status mb-3 flex items-center justify-center gap-2">
          <h4 class=" font-normal text-sm">
            <span>Coupon: </span>
            <!-- <span
              :class="`${dayjs().isAfter(dayjs(coupon.endTime)) ? 'in-active' : 'active'}`"
            > -->
            <span class=" text-red-600">
              <!-- {{ dayjs().isAfter(dayjs(coupon.endTime)) ? "Inactive" : "Active" }} -->
              Active  
            </span>
          </h4>
          <div class="tp-coupon-info-details group relative">
            <span>
              <Icon name="bi:info-circle" />
            </span>
            <div class="tooltip transition-1 z-10 rounded-lg absolute hidden group-hover:block border -top-20 w-[300px] bg-white -left-32 ">
              
              <p>
                *This coupon code will apply on
                <span class=" font-medium">
                  <!-- {{coupon.productType}} -->
                  Coupon Product
                </span class=''> and when you shopping more than
                <span>$ 1000
                  <!-- {{ coupon.minimumAmount }} -->
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="tp-coupon-date ">
          <button  ref="text">
            <!-- @click="copy" -->
            <span class="inline-block bg-teal-100 border-2 border-teal-400 border-dashed px-6 py-2 text-base font-semibold text-teal-600 tracking-wide">
              {{ coupon }}
              <!-- {{ copiedMessage || coupon.couponCode }} -->
            </span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTimer} from "vue-timer-hook";
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60000);
    const timer = useTimer(time);
  console.log(timer)


  const props = defineProps({
  name: {
    type: String,
  },
  coupon: {
    type: String,
  }
});


</script>
  