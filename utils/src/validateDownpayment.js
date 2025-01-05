

export default function validateDownpayment(loanPrincipal, downpayment) {
    if (typeof loanPrincipal !== 'number' || typeof downpayment !== 'number' || loanPrincipal <= 0 || downpayment < 0) {
        return false;
    }

    const minimumDownpayment = loanPrincipal * 0.05;
    return downpayment >= minimumDownpayment;
}