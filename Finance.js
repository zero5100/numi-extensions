// Finance functions for the Numi calculator

// Partial clone of the Excel PMT function.
// Rate<percent> The annual interest rate for the loan.
// Nper<integer> The total number of payments for the loan.
// Pv<money> The present value, or the total amount that a series of future payments is worth now; also known as the principal.
// RETURNS<money> The monthly dollar amount for the payment on a loan.
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

// Similar to the Excel FV function.
// Rate<percent> The interest rate per period.
// Nper<integer> The total number of payment periods.
// Pv<money> The present value of future payments.
// RETURNS<money> The future value of an investment.
numi.addFunction({
  "id": "finance-fv", // Globally unique function name
  "phrases": "fv" // Keyword used to call function
}, numiFV);

function numiFV(values) {
  let rate = values[0].double;
  let nper = values[1].double;
  let pv = values[2].double;

  return {
    "double": findFutureValue(rate, nper, pv),
    "unitId" : "USD"
  };
}

function findFutureValue(rate, nper, pv) {
  return (pv * Math.pow(1 + (rate / 100), nper));
}

// Similar to the Excel PV function.
// Rate<percent> The interest rate per period.
// Nper<integer> The total number of payment periods.
// Fv<money> The future value of the investment.
// RETURNS<money> The present value of an investment.
numi.addFunction({
  "id": "finance-pv", // Globally unique function name
  "phrases": "pv" // Keyword used to call function
}, numiPV);

function numiPV(values) {
  let rate = values[0].double;
  let nper = values[1].double;
  let fv = values[2].double;

  return {
    "double": findPresentValue(rate, nper, fv),
    "unitId" : "USD"
  };
}

function findPresentValue(rate, nper, fv) {
  return (fv / Math.pow((1 + (rate / 100)), nper));
}
