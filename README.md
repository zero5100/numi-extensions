# Custom extensions for the Numi calculator

## Package Info

**Author**: Andy Kellerstrass ([@zero5100](https://github.com/zero5100))

**License**: MIT

**Compatibility**: N/A

## Description

* Finance
  * Partial implementation of the Excel PMT() function.

## Usage

### Example: Calculate monthly mortgage payments using the PMT() function.
```
annualInterestRate = 4.00% # Fixed annual interest rate
totalNumPayments = 15 * 12 # 180 payments for a 15-year mortgage paid monthly
loanPrincipal = $350,000 # Total financed amount (principal)

PMT(annualInterestRate; totalNumPayments; loanPrincipal)
# Result: $2,588.91
```
