// let loanAmount = $("#loanAmount");
// let interestRate = $("#interestRate");
// let term = $("#term");
// let monthly = $("#monthly");




// function calc() {
//     let P = parseFloat(loanAmount.val());
//     let annualRate = parseFloat(interestRate.val());
//     let years = parseFloat(term.val());
//     if (!P || !annualRate || !years) {
//         $("#outMonthly").text("0.00");
//         $("#totalPaid").text("0.00");
//         $("#totalInterest").text("0.00");
//         $("#loanLength").text("0 ");
//         return;
//     }

//     let monthlyRate = annualRate / 100 / 12
//     let totalMPayments = 12 * years
//     let installment = (P * monthlyRate * Math.pow(1 + monthlyRate, totalMPayments)) / (Math.pow(1 + monthlyRate, totalMPayments) - 1);
//     let totalPaid = installment * totalMPayments;
//     let totalInterest = totalPaid - P;

//     $("#totalPaid").text(totalPaid.toFixed(2));
//     $("#outMonthly").text(installment.toFixed(2));
//     $("#totalInterest").text(totalInterest.toFixed(2));
//     $("#loanLength").text(totalMPayments);

// }
// $("input").on("input", calc);
let loanAmount = $("#loanAmount");
let interestRate = $("#interestRate");
let term = $("#term");
let extraMonthly = $("#monthly");

function calc() {
    let P = parseFloat(loanAmount.val());
    let annualRate = parseFloat(interestRate.val());
    let years = parseFloat(term.val());
    let extra = parseFloat(extraMonthly.val()) || 0;

    // لو المستخدم سايب الخانات فاضية
    if (!P || !annualRate || !years) {
        $("#outMonthly").text("0.00");
        $("#totalPaid").text("0.00");
        $("#totalInterest").text("0.00");
        $("#loanLength").text("0");
        return;
    }

    let monthlyRate = annualRate / 100 / 12;
    let totalPayments = years * 12;

    // المعادلة الأساسية للقسط الشهري
    let installment = (P * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);

    installment += extra; // إضافة الدفع الإضافي لو المستخدم كتب حاجة

    let totalPaid = installment * totalPayments;
    let totalInterest = totalPaid - P;

    // عرض النتائج
    $("#outMonthly").text(installment.toFixed(2));
    $("#totalPaid").text(totalPaid.toFixed(2));
    $("#totalInterest").text(totalInterest.toFixed(2));
    $("#loanLength").text(`${years * 12}`); // عدد الشهور
}

// عشان لو المستخدم بيكتب القيم أثناء الكتابة
$("input").on("input", calc);
