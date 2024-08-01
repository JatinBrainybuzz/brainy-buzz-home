export default defineNuxtPlugin((nuxtApp) => {
    const getPercent = (price, offer_price) => {
        var difference = price - offer_price;
        var percent = (difference / price) * 100;
        return parseFloat(percent).toFixed();
    };
    nuxtApp.provide('getPercent', getPercent);
});
