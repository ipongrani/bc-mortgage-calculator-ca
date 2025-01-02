const payment_schedules = {
    'accelerated-bi-weekly': 26,
    'bi-weekly': 24,
    'monthly': 12
};

const validatePaymentSchedule = (paymentSchedule) => {
   
    const allowed_schedules = Object.keys(payment_schedules);
    if (!allowed_schedules.includes(paymentSchedule)) return false;

    const selectedPaymentSchedule = payment_schedules[paymentSchedule];
    
    return selectedPaymentSchedule;
 }
 
 
 export default validatePaymentSchedule;