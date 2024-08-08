
export const useCartStore = defineStore('cart', ()=> {
   const Cart = ref(0)
   const CartContent = reactive({})
   const Wishlist = ref(0)

   function addCart(productId){
      if (CartContent.hasOwnProperty(productId)){
         CartContent[productId] = {
            productId,
            quantity: CartContent[productId].quantity + 1,
         }
      }else{
         CartContent[productId] = {
            productId,
            quantity: 1,
         }
      }
   }

   const getCart = computed(() => Object.keys(CartContent.value));

   return {Cart, Wishlist, getCart , addCart};
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }