const formatToDecimalPoint = (num, decimalPoint) => {

    if (!num) return null;

    const isNumValid = typeof num === 'number' ? true : false;
    if (!isNumValid) return null;
    

    const isValidDecimalPoint = Number.isInteger(Number(decimalPoint)) && decimalPoint >= 0;
    if (!isValidDecimalPoint) return null;

    const formattedNum = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPoint,
        maximumFractionDigits: decimalPoint,
    }).format(num);
    const cleanedNum = formattedNum.replace(/,/g, ''); 
    return parseFloat(cleanedNum);
};


export default formatToDecimalPoint