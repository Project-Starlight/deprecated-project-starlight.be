"use strict";

const _local = {
    tel: '0473294283',
    email: 'info@project-starlight.be',
    instagram: 'project_starlight_official',
    facebook: '',
    instagramURL: "https://www.instagram.com/project_starlight_official/",
    facebookURL: "https://www.facebook.com/"
}

const _config = {
    apiURL: "https://api.project-starlight.be/api"
}

const _discountData = {
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
            defaultPrice: 800,
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
            defaultPrice: 150,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "gratis",
            percentage: 10,
            digitDiscount: 20,
        }, tweeKleuren: {
            defaultPrice: 50,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "gratis",
            percentage: 0,
            digitDiscount: 10,
        }
    }
}

const _pricesAfterDiscount = {
    smallOption: {
        price: getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.smallOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_discountData.basicOptions.smallOption.defaultPrice, getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.smallOption))
    },
    mediumOption: {
        price: getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.mediumOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_discountData.basicOptions.mediumOption.defaultPrice, getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.mediumOption))
    },
    largeOption: {
        price: getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.largeOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_discountData.basicOptions.largeOption.defaultPrice, getOptionPrice(_discountData.basicOptions, _discountData.basicOptions.largeOption))
    },meteorietenregen: {
        price: getOptionPrice(_discountData.extraOptions, _discountData.extraOptions.meteorietenregen),
        totalPercentageDiscount: determineTotalPercentageDiscount(_discountData.extraOptions.meteorietenregen.defaultPrice,getOptionPrice(_discountData.extraOptions, _discountData.extraOptions.meteorietenregen))
    },tweeKleuren: {
        price: getOptionPrice(_discountData.extraOptions, _discountData.extraOptions.tweeKleuren),
        totalPercentageDiscount: determineTotalPercentageDiscount(_discountData.extraOptions.tweeKleuren.defaultPrice, getOptionPrice(_discountData.extraOptions, _discountData.extraOptions.tweeKleuren))
    }, logo:{
        price: "Prijs op aanvraag"
    }, exclusiveOption:{
        price: "Prijs op aanvraag"
    }
}