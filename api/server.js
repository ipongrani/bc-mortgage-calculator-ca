import express from 'express';
import core from '../core/dist/core.bundle.js';
import utilities from '../utils/dist/utilities.bundle.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const {
    convertCurrencyToNumber,
    convertToNumeric
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

app.use(express.static(path.join(__dirname, 'public')));

// GET
app.get('/hello', async (req, res) => {
    return res.status(200).json({hello: "world"});
});

app.get('/loadClientScript', async (req, res) => {
    const jsScriptPath = path.join(__dirname, 'dist', 'client.bundle.js');
    return res.status(200).sendFile(jsScriptPath);
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
    const cleanAnnualInterestRate = convertToNumeric(annualInterestRate)
    const cleanAmmortizationPeriod = convertToNumeric(ammortizationPeriod)
    const {
        loanPrincipal,
        downpaymentRate,
    } = calculateLoanPrincipal(cleanPropertPrice, cleanDownpayment);
    const calculatedCmhcPremium = cmhcPremiumCalculator(loanPrincipal, downpaymentRate);
    const usePrincipal = calculatedCmhcPremium ? calculatedCmhcPremium.principalWithPremium : loanPrincipal;
    const { periodicInterestRate } = calculatePeriodicInterest(cleanAnnualInterestRate, paymentSchedule);
    const totalNumberOfPayments = calculateTotalNumberOfPayments(cleanAmmortizationPeriod, paymentSchedule);
    const computedPaymentPerSchedule = calculateMortage(usePrincipal, periodicInterestRate, totalNumberOfPayments);

    const respoonse = {
        loanPrincipal,
        cmhcAdjustedLoanPrincipal: usePrincipal,
        annualInterestRate: cleanAnnualInterestRate,
        ammortizationPeriod: cleanAmmortizationPeriod,
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
