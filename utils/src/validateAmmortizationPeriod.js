const validAmmortizationPeriod = (value) => {
   
   if (!Number.isInteger(value)) {
        return false;
    }

    if (value < 5 || value > 30) {
        return false;
    }

    if (value % 5 !== 0) {
        return false;
    }

    return true;
}


export default validAmmortizationPeriod;