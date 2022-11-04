"use strict";
const _priceConfig = {
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
            defaultPrice: 450,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 20
        }, mediumOption: {
            defaultPrice: 550,
            active: false,
            kindOfDiscountOptions: ["percentage", "gratis", "digitDiscount"],
            kindOfDiscount: "percentage",
            percentage: 10,
            digitDiscount: 60
        }, largeOption: {
            defaultPrice: 650,
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
        price: getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.smallOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_priceConfig.basicOptions.smallOption.defaultPrice, getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.smallOption))
    },
    mediumOption: {
        price: getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.mediumOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_priceConfig.basicOptions.mediumOption.defaultPrice, getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.mediumOption))
    },
    largeOption: {
        price: getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.largeOption),
        totalPercentageDiscount: determineTotalPercentageDiscount(_priceConfig.basicOptions.largeOption.defaultPrice, getOptionPrice(_priceConfig.basicOptions, _priceConfig.basicOptions.largeOption))
    },meteorietenregen: {
        price: getOptionPrice(_priceConfig.extraOptions, _priceConfig.extraOptions.meteorietenregen),
        totalPercentageDiscount: determineTotalPercentageDiscount(_priceConfig.extraOptions.meteorietenregen.defaultPrice,getOptionPrice(_priceConfig.extraOptions, _priceConfig.extraOptions.meteorietenregen))
    },tweeKleuren: {
        price: getOptionPrice(_priceConfig.extraOptions, _priceConfig.extraOptions.tweeKleuren),
        totalPercentageDiscount: determineTotalPercentageDiscount(_priceConfig.extraOptions.tweeKleuren.defaultPrice, getOptionPrice(_priceConfig.extraOptions, _priceConfig.extraOptions.tweeKleuren))
    }, logo:{
        price: "Prijs op aanvraag"
    }, exclusiveOption:{
        price: "Prijs op aanvraag"
    }
}