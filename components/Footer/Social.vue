<template>
  <div class="text-primary">
    <a v-for="item in social_data" :key="item.id" :href="item.link" >
      <Icon :name="item.icon" size="2rem" class="mx-3 my-4"/>
    </a>
  </div>
  </template>
  
  <script setup>
  const social_data =  [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: "mdi:facebook",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://twitter.com/",
    icon: "ph:twitter-logo-duotone",
    title: "Twitter",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/",
    icon: "akar-icons:linkedinv1-fill",
    title: "Linkedin",
  },
  {
    id: 4,
    link: "https://Instagram.com/",
    icon: "mage:instagram-square",
    title: "Instagram",
  },
];
//   console.log(social_data)
  </script>
  