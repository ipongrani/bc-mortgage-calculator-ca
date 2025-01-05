export default function resetForm(event) {
    event.preventDefault();
    const collectInputs = document.querySelectorAll('.formFields>input');
    const paymentSchedule = document.querySelector('#paymentSchedule');
    collectInputs.forEach((element) => {
        element.value = '';
    });
    paymentSchedule.selectedIndex = 1;
    const displayPanel = document.querySelector('#displayPanel');
    displayPanel.innerHTML = '';
    displayPanel.style.visibility = 'hidden'
}
