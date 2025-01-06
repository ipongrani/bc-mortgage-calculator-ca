import express from 'express';

import utilities from '../utils/dist/utilities.bundle.js';
import path from 'path';
import { fileURLToPath } from 'url';
import calculateRates from './src/calculateRates.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const {
    convertCurrencyToNumber,
    convertToNumeric,
    validateDownpayment
} = utilities;



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
    if (!validateDownpayment(cleanPropertPrice, cleanDownpayment)) {
        return res.status(400).json({error: 'down payment needs to be at least 5% of property price'});
    }
    const cleanAnnualInterestRate = convertToNumeric(annualInterestRate)
    const cleanAmmortizationPeriod = convertToNumeric(ammortizationPeriod);
    const response = calculateRates(
        paymentSchedule,
        cleanPropertPrice,
        cleanDownpayment,
        cleanAnnualInterestRate,
        cleanAmmortizationPeriod
    );

    return res.status(200).json(response);
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Export the server and app for test
export const expressApp = app;
export const expressServer = server
