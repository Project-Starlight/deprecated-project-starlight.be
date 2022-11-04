"use strict";

function determinePriceWithOption(option) {
    switch (option.kindOfDiscount) {
        case "percentage":
            return percentageDiscountOfValue(option.defaultPrice, option.percentage);
        case "gratis":
            return "gratis";
        case "digitDiscount":
            return option.defaultPrice - option.digitDiscount
    }
}

function percentageDiscountOfValue(value, percentage) {
    return value - (value * (percentage / 100));
}

function determinePriceWithAllOption(extraOrBasicOptions, option) {
    switch (extraOrBasicOptions.allOptions.kindOfDiscount) {
        case "percentage":
            return percentageDiscountOfValue(option.defaultPrice,extraOrBasicOptions.allOptions.percentage);
        case "gratis":
            return "gratis";
        case "digitDiscount":
            return option.defaultPrice - extraOrBasicOptions.allOptions.digitDiscount
    }
}

function getOptionPrice(extraOrBasicOptions, option) {
    if (!extraOrBasicOptions.allOptions.active && !option.active) return option.defaultPrice;
    else if (!extraOrBasicOptions.allOptions.active && option.active) return determinePriceWithOption(option);
    else if (extraOrBasicOptions.allOptions.active && option.active) return determinePriceWithTwoDiscounts(extraOrBasicOptions, option);
    else if (extraOrBasicOptions.allOptions.active && !option.active) return determinePriceWithAllOption(extraOrBasicOptions, option);
}

function determineTotalPercentageDiscount(defaultPrice, priceAfterDiscount) {
    if (defaultPrice === "gratis" || priceAfterDiscount === "gratis") return 100;
    else return (100 - ((priceAfterDiscount / defaultPrice) * 100));
}

function determinePriceWithTwoDiscounts(extraOrBasicOptions, option) {
    const allOptionKindOfDiscount = extraOrBasicOptions.allOptions.kindOfDiscount;
    const optionKindOfDiscount = option.kindOfDiscount;
    if (allOptionKindOfDiscount === "gratis" || optionKindOfDiscount === "gratis") return "gratis";
    else if (allOptionKindOfDiscount === "digitDiscount" && optionKindOfDiscount === "digitDiscount") return option.defaultPrice - (extraOrBasicOptions.allOptions.digitDiscount + option.digitDiscount);
    else if (allOptionKindOfDiscount === "percentage" && optionKindOfDiscount === "percentage") {
        if (_priceConfig.sortOfMultipleDiscount === "sum") return (option.defaultPrice - (option.defaultPrice * ((option.percentage / 100) + (extraOrBasicOptions.allOptions.percentage / 100))));
        else if (_priceConfig.sortOfMultipleDiscount === "multiply") return (option.defaultPrice * ((1 - (option.percentage / 100)) * (1 - (extraOrBasicOptions.allOptions.percentage / 100))));
    } else if (allOptionKindOfDiscount === "digitDiscount" && optionKindOfDiscount === "percentage") return percentageDiscountOfValue(option.defaultPrice,option.percentage) - extraOrBasicOptions.allOptions.digitDiscount;
    else if (allOptionKindOfDiscount === "percentage" && optionKindOfDiscount === "digitDiscount") return percentageDiscountOfValue(option.defaultPrice, extraOrBasicOptions.allOptions.percentage) - option.digitDiscount;

}