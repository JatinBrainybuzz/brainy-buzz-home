import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/Index.vue').then(r => r.default || r),
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('~/pages/Cart.vue').then(r => r.default || r)
    },
    {
      name: 'privacy',
      path: '/privacy-policy',
      component: () => import('~/pages/Privacy.vue').then(r => r.default || r)
    },
    {
      name: 'terms',
      path: '/terms-conditions',
      component: () => import('~/pages/Terms.vue').then(r => r.default || r)
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('~/pages/Login.vue').then(r => r.default || r),
      meta: {
        layout: false
      },
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('~/pages/Register.vue').then(r => r.default || r)
    },
    {
      name: 'track',
      path: '/track-order',
      component: () => import('~/pages/TrackOrder.vue').then(r => r.default || r)
    },
    {
      name: 'reels',
      path: '/reels',
      component: () => import('~/pages/Reels.vue').then(r => r.default || r)
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('~/pages/About.vue').then(r => r.default || r)
    },
    {
      name: 'coupons',
      path: '/coupons',
      component: () => import('~/pages/Coupons.vue').then(r => r.default || r)
    },
    {
      name: 'profile',
      path: '/profile',
      component: () => import('~/pages/Profile.vue').then(r => r.default || r)
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('~/pages/Contact.vue').then(r => r.default || r)
    },
    {
        name: 'product-category-id',
        path: '/product-category/:id',
        component: () => import('~/pages/product-category/[id].vue')
    },
    {
        name: 'product-category-slug',
        path: '/product-category/:id/product-sub-category/:slug',
        component: () => import('~/pages/product-category/[id]/product-sub-category/[slug].vue')
    },
    {
        name: 'product-details-id',
        path: '/product-details/:id*',
        component: () => import('~/pages/product-details/[...id].vue')
    },
    {
        name: 'blog-id',
        path: '/blog/:id',
        component: () => import('~/pages/blog/[id].vue')
    },
    {
        name: 'wishlist',
        path: '/wishlist',
        component: () => import('~/pages/Wishlist.vue')
    },

  ],
}
