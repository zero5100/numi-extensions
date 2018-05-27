# Custom extensions for the Numi calculator

## Package Info
-----

**Author**: Andy Kellerstrass ([@zero5100](https://github.com/zero5100))

**License**: MIT

**Compatibility**: N/A

## Description
-----

* Finance
  * Partial implementation of the **Excel PMT()** function, which calculates the monthly payment for a loan.
  * Partial implementation of the **Excel FV()** function, which calculates the future value of an investment.
  * Partial implementation of the **Excel PV()** function, which calculates the present value of an investment.


## Example Usage
-----

**PMT()**: Calculate how much a monthly mortgage payment would be by using the PMT() function.

```
annualInterestRate = 4.00% # Fixed annual interest rate
totalNumPayments = 15 * 12 # 180 payments for a 15-year mortgage paid monthly
loanPrincipal = $350,000 # Total financed amount (principal)

PMT(annualInterestRate; totalNumPayments; loanPrincipal)
# Result: $2,588.91 (the monthly mortgage payment amount)
```

**FV()**: Calculate what the minimum hourly wage would need to be in 2018 to have the same purchasing power as it did in 1968 using the FV() function.

```
annualInflationRate = 4.02% # Average annual inflation rate since 1968
numYears = 2018 - 1968 # Add inflation annually for 50 years
presentValue = $1.60 # Federal minimum hourly wage in 1968

FV(annualInflationRate; numYears; presentValue)
# Result: $11.48 (the 2018 minimum wage equivalent)
```

**PV()**: Calculate how much you would need to have in an investment today to reach a future goal value using the PV() function.

```
annualInterestRate = 5.00% # Annual expected rate of return of the investment
numYears = 10 # Add interest annually for 10 years
futureValue = $15,000 # Future savings goal

PV(annualInterestRate; numYears; futureValue)
# Result: $9,208.70 (how much you would need to currently have in savings to reach the goal)
```
