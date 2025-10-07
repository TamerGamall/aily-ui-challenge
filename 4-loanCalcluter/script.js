let loanAmount = $("#loanAmount");
let interestRate = $("#interestRate");
let term = $("#term");
let extraMonthly = $("#monthly");

function calc() {
    let P = parseFloat(loanAmount.val());
    let annualRate = parseFloat(interestRate.val());
    let years = parseFloat(term.val());
    let extra = parseFloat(extraMonthly.val()) || 0;

    if (!P || !annualRate || !years) {
        $("#outMonthly").text("0.00");
        $("#totalPaid").text("0.00");
        $("#totalInterest").text("0.00");
        $("#loanLength").text("0");
        return;
    }

    let monthlyRate = annualRate / 100 / 12;
    let totalPayments = years * 12;


    let installment = (P * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);

    installment += extra;

    let totalPaid = installment * totalPayments;
    let totalInterest = totalPaid - P;


    $("#outMonthly").text(installment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    $("#totalPaid").text(totalPaid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    $("#totalInterest").text(totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    $("#loanLength").text(`${totalPayments.toLocaleString()} `);
}


$("input").on("input", calc);
