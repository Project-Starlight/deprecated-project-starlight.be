"use strict";

const _local = {
    tel: '0473294283',
    email: 'info@project-starlight.be',
    instagramURL: "https://www.instagram.com/project_starlight_official/",
    facebookURL: "https://www.facebook.com/"
}
const discountData = {
    sortOfMultipleDiscountChoices: ["sum", "multiply"],
    sortOfMultipleDiscount: "multiply",
    basicOptions: {
        allOptions: {
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 50
        }, smallOption: {
            defaultPrice: 500,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 20
        }, mediumOption: {
            defaultPrice: 600,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 60
        }, largeOption: {
            defaultPrice: 700,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 100
        }
    }, extraOptions: {
        allOptions: {
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 50
        }, meteorietenregen: {
            defaultPrice: 100,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "gratis",
            percentage: 10,
            digitDiscount: 20,
        }, tweeKleuren: {
            defaultPrice: 50,
            active: true,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "gratis",
            percentage: 0,
            digitDiscount: 10,
        }
    }
}

const pricesAfterDiscount = {
    smallOption: {
        price: getOptionPrice(discountData.basicOptions, discountData.basicOptions.smallOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(discountData.basicOptions.smallOption.defaultPrice, getOptionPrice(discountData.basicOptions, discountData.basicOptions.smallOption))
    },
    mediumOption: {
        price: getOptionPrice(discountData.basicOptions, discountData.basicOptions.mediumOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(discountData.basicOptions.mediumOption.defaultPrice, getOptionPrice(discountData.basicOptions, discountData.basicOptions.mediumOption))
    },
    largeOption: {
        price: getOptionPrice(discountData.basicOptions, discountData.basicOptions.largeOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(discountData.basicOptions.largeOption.defaultPrice, getOptionPrice(discountData.basicOptions, discountData.basicOptions.largeOption))
    },meteorietenregen: {
        price: getOptionPrice(discountData.extraOptions, discountData.extraOptions.meteorietenregen),
        totalPercentageDiscount: determineTotalPercentageDiscount(discountData.extraOptions.meteorietenregen.defaultPrice,getOptionPrice(discountData.extraOptions, discountData.extraOptions.meteorietenregen))
    },tweeKleuren: {
        price: getOptionPrice(discountData.extraOptions, discountData.extraOptions.tweeKleuren),
        totalPercentageDiscount: determineTotalPercentageDiscount(discountData.extraOptions.tweeKleuren.defaultPrice, getOptionPrice(discountData.extraOptions, discountData.extraOptions.tweeKleuren))
    }, logo:{
        price: "Prijs op aanvraag"
    }, exclusiveOption:{
        price: "Prijs op aanvraag"
    }
}

const _config = {
    apiURL: "https://api.project-starlight.be/api"
}