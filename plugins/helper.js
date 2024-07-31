export default defineNuxtPlugin(() => {
    const getPercent = (price, offer_price) => {
        var difference = price - offer_price;
        var percent = (difference / price) * 100;
        parseFloat(percent).toFixed();
        return {
            getPercent,
        }
    }
    const twoDecimalPlaces = (value) => {
        if (typeof value !== 'undefined'){
            value = parseFloat(value).toFixed(2);
        } else {
            value = 0.00
        }
        return {
            twoDecimalPlaces,
        }
    }
})
