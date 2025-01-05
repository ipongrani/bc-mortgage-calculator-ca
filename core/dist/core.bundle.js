var r={"./src/calculateLoanPrincipal.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t("../utils/dist/utilities.bundle.js"),i=(t("./src/cmhcPremiumCalculator.js"),n.default.isEmpty),a=n.default.isNonNegativeNumber,o=n.default.formatToDecimalPoint;
/** 
 * @preserve
 * Calculates the loan principal amount.
 * 
 * @param {number} propertyPrice - The amount paid monthly.
 * @param {number} downPayment - The annual interest rate (in decimal form, e.g., 0.05 for 5%).
 *
 * @returns {object} The calculated loanPrincipal, downpaymentRate, downpaymentPercentage.
 * 
 */const u=function(r,e){if(i(r))return{error:"property price is not invalid or not supplied"};if(i(e))return{error:"down payment is not invalid or not supplied"};if(!a(r))return{error:"property price is not a valid number"};if(!a(e))return{error:"down payment is not a valid number"};if(e>r)return{error:"down payment is over property price"};var t=r-e,n=o(e/r,6),u=o(100*n,2);return{loanPrincipal:t,downpaymentRate:n,downpaymentPercentage:"".concat(u,"%")}}},"./src/calculateMortage.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t("../utils/dist/utilities.bundle.js"),i=n.default.isEmpty,a=n.default.isNonNegativeNumber,o=n.default.formatToDecimalPoint;
/** 
 * @preserve
 * Calculates Morgage based on:
 * 
 * x = r*((1+r)**n)
 * y = ((1+r)**n)-1
 * M = P*(x/y)
 * 
 * @param {number} P - Loan Principal. The loan amount after subtracting the down payment.
 * @param {number} r - The annual interest rate divided by the number of payments per year (periodicInterest).
 * @param {number} n - The total number of payments over the amortization period.
 *
 * @returns {number} The calculated amount per payment period.
 * 
 */const u=function(r,e,t){if(i(r))return{error:"loan amount is not valid or not supplied"};if(i(e))return{error:"periodic interest is not valid or not supplied"};if(i(t))return{error:"payment schedule is not valid or not supplied"};if(!a(r))return{error:"loan amount is not a valid number"};if(!a(e))return{error:"periodic interest is not a valid number"};if(!a(t))return{error:"payment schedule is not a valid number"};var n=e*Math.pow(1+e,t),u=Math.pow(1+e,t)-1;return o(r*(n/u),2)}},"./src/calculatePeriodicInterest.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>l});var n=t("../utils/dist/utilities.bundle.js"),i=n.default.isEmpty,a=n.default.isNonNegativeNumber,o=n.default.formatToDecimalPoint,u=n.default.validatePaymentSchedule;
/** 
 * @preserve
 * Determine the Periodic Interest Rate.
 * 
 * @param {number} annualInterestRate - The interest rate yearly. The annual interest rate (in decimal form, e.g., 0.05 for 5%)
 * @param {number} paymentSchedule - accelerated-bi-weekly, bi-weekly, monthly
 *
 * @returns {object} returns periodicInterestRate, formattedPeriodicInterest
 * 
 */const l=function(r,e){if(i(r))return{error:"annual interest is not valid or not supplied"};if(i(e))return{error:"payment schedule is not valid or not supplied"};if(!a(r))return{error:"property price is not a number"};var t=u(e);if(!t)return{error:"payment schedule is not valid or not supplied"};var n=o(r/t,6),l=o(100*n,2);return{periodicInterestRate:n,formattedPeriodicInterest:"".concat(l,"%")}}},"./src/calculateTotalNumberOfPayments.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>l});var n=t("../utils/dist/utilities.bundle.js"),i=n.default.isEmpty,a=n.default.isNonNegativeNumber,o=n.default.validAmmortizationPeriod,u=n.default.validatePaymentSchedule;
/** 
 * @preserve
 * Calculate total number of payments per year.
 * 
 * @param {number} ammortizationPeriod - ammortization period ex. 25, 30, 40 (years).
 * @param {number} paymentSchedule - accelerated-bi-weekly, bi-weekly, monthly
 *
 * @returns {number} The calculated total count of payments.
 * 
 */const l=function(r,e){if(i(r))return{error:"ammortization period is not valid or not supplied"};if(!o(r))return{error:"ammortization period is not valid"};if(!a(r))return{error:"ammortization period is not a number"};if(i(e))return{error:"payment schedule is not valid or not supplied"};var t=u(e);return t?t*r:{error:"payment schedule is not valid or not supplied"}}},"./src/cmhcPremiumCalculator.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t("../utils/dist/utilities.bundle.js"),i=n.default.isEmpty,a=n.default.isNonNegativeNumber,o=n.default.formatToDecimalPoint;
/** 
 * @preserve
 * Calculate insurance premium.
 * 
 * @param {number} loanPrincipal - original loan principal.
 * @param {number} downpaymentRate - downpayment rate for the property
 *
 * @returns {object} returns premiumRate, premiumPercent, premiumAmount, principalWithPremium.
 * 
 */const u=function(r,e){if(i(r))return{error:"loan principal is not valid or not supplied"};if(i(e))return{error:"down payment is not nvalid or not supplied"};if(!a(r))return{error:"loan principal is not a valid number"};if(!a(e))return{error:"down payment is not a valid number"};if(e>=.2)return null;var t=function(r){var e=100*r;return e>=20?0:e>=15?.028:e>=10?.031:.04}(e),n=o(100*t,2),u=r*t,l=r+u;return{premiumRate:t,premiumPercent:"".concat(n,"%"),premiumAmount:u,principalWithPremium:l}}},"../utils/dist/utilities.bundle.js":(r,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n={"./src/convertCurrencyToNumber.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r){if("number"==typeof r)return r;if("string"==typeof r){var e=r.replace(/[$,]/g,"");if(!isNaN(Number(e))&&Number(e)>=0)return parseFloat(e)}return null}},"./src/convertToNumeric.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r){if("number"==typeof r&&Number.isFinite(r)&&r>=0)return r;if("string"==typeof r){var e=r.replace(/ /g,"");if(""!==e&&!isNaN(e)&&parseFloat(e)>=0)return parseFloat(e)}return null}},"./src/formatToDecimal.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r,e){if(!r)return null;if("number"!=typeof r)return null;if(!(Number.isInteger(Number(e))&&e>=0))return null;var t=new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e}).format(r).replace(/,/g,"");return parseFloat(t)}},"./src/isEmpty.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r){return!r}},"./src/isNonNegativeNumber.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r){return"number"==typeof r&&Number.isFinite(r)&&r>=0&&!isNaN(r)}},"./src/validateAmmortizationPeriod.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return n}});var n=function(r){return!!Number.isInteger(r)&&!(r<5||r>30)&&r%5==0}},"./src/validatePaymentSchedule.js":function(r,e,t){t.r(e),t.d(e,{default:function(){return i}});var n={"accelerated-bi-weekly":26,"bi-weekly":24,monthly:12},i=function(r){return!!Object.keys(n).includes(r)&&(n[r]||null)}}},i={};function a(r){var e=i[r];if(void 0!==e)return e.exports;var t=i[r]={exports:{}};return n[r](t,t.exports,a),t.exports}a.d=function(r,e){for(var t in e)a.o(e,t)&&!a.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},a.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},a.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var o={};!function(){a.r(o),a.d(o,{default:function(){return s}});var r=a("./src/isNonNegativeNumber.js"),e=a("./src/isEmpty.js"),t=a("./src/formatToDecimal.js"),n=a("./src/validateAmmortizationPeriod.js"),i=a("./src/validatePaymentSchedule.js"),u=a("./src/convertCurrencyToNumber.js"),l=a("./src/convertToNumeric.js"),s={isNonNegativeNumber:r.default,isEmpty:e.default,formatToDecimalPoint:t.default,validAmmortizationPeriod:n.default,validatePaymentSchedule:i.default,convertCurrencyToNumber:u.default,convertToNumeric:l.default}}();var u=o.default}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return r[n](a,a.exports,t),a.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};(()=>{t.r(n),t.d(n,{default:()=>u});var r=t("./src/calculateLoanPrincipal.js"),e=t("./src/calculatePeriodicInterest.js"),i=t("./src/calculateTotalNumberOfPayments.js"),a=t("./src/calculateMortage.js"),o=t("./src/cmhcPremiumCalculator.js");const u={calculateLoanPrincipal:r.default,calculatePeriodicInterest:e.default,calculateTotalNumberOfPayments:i.default,calculateMortage:a.default,cmhcPremiumCalculator:o.default}})();var i=n.default;export{i as default};
//# sourceMappingURL=core.bundle.js.map