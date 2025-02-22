
import resultsFormatter from "./resultFormatter.js";
import collectInputs from "./collectInputs.js";
import resetForm from './resetForm.js';




async function submitForm(event) {
    try {
        event.preventDefault();
        const userInputs = collectInputs();
        const response = await fetch('/calculateMortgage', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(userInputs) 
        });
        
        console.log('jsonResponse: ', jsonResponse)
        const jsonResponse = await response.json();
        
        resultsFormatter(jsonResponse);
    } catch(error) {
        console.log('error retriving calculations: ', error);
    }
}


// main
window.addEventListener('load', () => {
    const submitFormBtn = document.querySelector('#submitForm');
    submitFormBtn.addEventListener('click', (event) => submitForm(event));

    const resetFormBtn = document.querySelector('#resetForm');
    resetFormBtn.addEventListener('click', (event) => resetForm(event));
})