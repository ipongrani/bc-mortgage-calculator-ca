const formatToDecimalPoint = (num, decimalPoint) => {

    const isValidDecimalPoint = parseInt(decimalPoint) || false;

    if (!isValidDecimalPoint) return null;

    const formattedNum = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPoint,
        maximumFractionDigits: decimalPoint,
    }).format(num);
    return parseFloat(formattedNum);
};


export default formatToDecimalPoint