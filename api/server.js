import express from 'express';
import core from '../core/dist/core.bundle.js';
import utilities from '../utils/dist/utilities.bundle.js';

const {
    convertCurrencyToNumber
} = utilities;

const {
    calculateLoanPrincipal,
    cmhcPremiumCalculator,
    calculatePeriodicInterest,
    calculateTotalNumberOfPayments,
    calculateMortage
} = core;



const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get('/', async (req, res) => {
    return res.status(200).json({hello: "world"});
});

// POST
app.post('/calculateMortgage', async (req, res) => {

    const {
        body
    } = req;

    const {
        propertyPrice,
        downPayment,
        annualInterestRate,
        paymentSchedule,
        ammortizationPeriod
    } = body;
    
    const cleanPropertPrice = convertCurrencyToNumber(propertyPrice);
    const cleanDownpayment = convertCurrencyToNumber(downPayment);

    const {
        loanPrincipal,
        downpaymentRate,
    } = calculateLoanPrincipal(cleanPropertPrice, cleanDownpayment);

    const calculatedCmhcPremium = cmhcPremiumCalculator(loanPrincipal, downpaymentRate);
    const usePrincipal = calculatedCmhcPremium ? calculatedCmhcPremium.principalWithPremium : loanPrincipal;
    const { periodicInterestRate } = calculatePeriodicInterest(annualInterestRate, paymentSchedule);
    const totalNumberOfPayments = calculateTotalNumberOfPayments(ammortizationPeriod, paymentSchedule);
    const computedPaymentPerSchedule = calculateMortage(usePrincipal, periodicInterestRate, totalNumberOfPayments);

    const respoonse = {
        loanPrincipal,
        cmhcAdjustedLoanPrincipal: usePrincipal,
        annualInterestRate,
        paymentSchedule,
        periodicInterestRate,
        totalPaymentCount: totalNumberOfPayments,
        paymentPerSchedule: computedPaymentPerSchedule,
        cmhc: calculatedCmhcPremium || 'not_required'
    }

    return res.status(200).json(respoonse);
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Export the server and app for test
export const expressApp = app;
export const expressServer = server
