// finance.ts

export class PersonalFinance {
    static calculateMonthlySavings(goalAmount: number, months: number, interestRate: number = 0): number {
      if (interestRate === 0) {
        return goalAmount / months;
      } else {
        const monthlyRate = interestRate / 12 / 100;
        return goalAmount * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
      }
    }

    static calculateLoanPayment(loanAmount: number, annualInterestRate: number, loanTermMonths: number): number {
      const monthlyRate = annualInterestRate / 12 / 100;
      return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTermMonths));
    }

    static calculateFutureValue(principal: number, monthlyContribution: number, annualInterestRate: number, months: number): number {
      const monthlyRate = annualInterestRate / 12 / 100;
      let futureValue = principal * Math.pow(1 + monthlyRate, months);
  
      for (let i = 1; i <= months; i++) {
        futureValue += monthlyContribution * Math.pow(1 + monthlyRate, months - i);
      }
  
      return futureValue;
    }
  }
  
  // Example usage:
  const monthlySavings = PersonalFinance.calculateMonthlySavings(10000, 12, 5);
  console.log(`Monthly Savings: ${monthlySavings}`);
  
  const loanPayment = PersonalFinance.calculateLoanPayment(20000, 5, 60);
  console.log(`Monthly Loan Payment: ${loanPayment}`);
  
  const futureValue = PersonalFinance.calculateFutureValue(1000, 100, 5, 60);
  console.log(`Future Value of Investment: ${futureValue}`);
  