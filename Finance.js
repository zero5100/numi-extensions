// Finance functions for the Numi calculator

// Rate<percent> The annual interest rate for the loan.
// Nper<integer> The total number of payments for the loan.
// Pv<money> The present value, or the total amount that a series of future payments is worth now; also known as the principal.
// RETURNS<money> The monthly dollar amount for the payment on a loan.

// Partial clone of the Excel PMT function.
numi.addFunction({
  "id": "finance-pmt", // Globally unique function name
  "phrases": "pmt" // Keyword used to call function
}, numiPMT);

function numiPMT(values) {
  let rate = values[0].double;
  let nper = values[1].double;
  let pv = values[2].double;

  return {
    "double": findMonthlyPayment(rate, nper, pv),
    "unitId" : "USD"
  };
}

function findMonthlyPayment(rate, nper, pv) {
  let monthlyRate = rate / 100 / 12;

  return pv * monthlyRate *
    (Math.pow(1 + monthlyRate, nper)) / (Math.pow(1 + monthlyRate, nper) - 1);
}
