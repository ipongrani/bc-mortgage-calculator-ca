const formatToDecimalPoint = (num, decimalPoint) => {

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