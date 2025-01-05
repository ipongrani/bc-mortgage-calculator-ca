export default function collectInputs() {
    const collectInputs = document.querySelectorAll('.formFields>input');
    const paymentSchedule = document.querySelector('#paymentSchedule').value;
    const inputFromFormArray =  [...collectInputs];
    const userInputs = inputFromFormArray.reduce((accumulator, input) => {
        const inputName = input.getAttribute('name');
        const inputVal = input.value;
        const newVal = {
            ...accumulator,
            [inputName]: inputVal
        };
        return newVal;
    }, {paymentSchedule});
    return userInputs;
}
