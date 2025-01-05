var e={"./src/convertCurrencyToNumber.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e){if("number"==typeof e)return e;if("string"==typeof e){var r=e.replace(/[$,]/g,"");if(!isNaN(Number(r))&&Number(r)>=0)return parseFloat(r)}return null}},"./src/convertToNumeric.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e){if("number"==typeof e&&Number.isFinite(e)&&e>=0)return e;if("string"==typeof e){var r=e.replace(/ /g,"");if(""!==r&&!isNaN(r)&&parseFloat(r)>=0)return parseFloat(r)}return null}},"./src/formatToDecimal.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e,r){if(!e)return null;if(!("number"==typeof e))return null;if(!(Number.isInteger(Number(r))&&r>=0))return null;var t=new Intl.NumberFormat("en-US",{minimumFractionDigits:r,maximumFractionDigits:r}).format(e).replace(/,/g,"");return parseFloat(t)}},"./src/isEmpty.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e){return!e}},"./src/isNonNegativeNumber.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e){return"number"==typeof e&&Number.isFinite(e)&&e>=0&&!isNaN(e)}},"./src/validateAmmortizationPeriod.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n=function(e){return!!Number.isInteger(e)&&(!(e<5||e>30)&&e%5==0)}},"./src/validateDownpayment.js":(e,r,t)=>{function n(e,r){return!("number"!=typeof e||"number"!=typeof r||e<=0||r<0)&&r>=.05*e}t.r(r),t.d(r,{default:()=>n})},"./src/validatePaymentSchedule.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n={"accelerated-bi-weekly":26,"bi-weekly":24,monthly:12};const a=function(e){return!!Object.keys(n).includes(e)&&(n[e]||null)}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{t.r(n),t.d(n,{default:()=>c});var e=t("./src/isNonNegativeNumber.js"),r=t("./src/isEmpty.js"),a=t("./src/formatToDecimal.js"),o=t("./src/validateAmmortizationPeriod.js"),u=t("./src/validatePaymentSchedule.js"),i=t("./src/convertCurrencyToNumber.js"),s=t("./src/convertToNumeric.js"),l=t("./src/validateDownpayment.js");const c={isNonNegativeNumber:e.default,isEmpty:r.default,formatToDecimalPoint:a.default,validAmmortizationPeriod:o.default,validatePaymentSchedule:u.default,convertCurrencyToNumber:i.default,convertToNumeric:s.default,validateDownpayment:l.default}})();var a=n.default;export{a as default};
//# sourceMappingURL=utilities.bundle.js.map