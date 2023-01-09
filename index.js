// Create a program using OO that takes an input of basic salary as well as benefits and
// returns the net salary after decucting payments for NSSF, NHIF as well as PAYE. It also
// factors in personal relief.
//NSSF payment
//6% upto a maximum of 1080
//NHIF payment
//PAYE
//nssf is deducted before PAYE calculations
//personal relief 2.4k
// 10% upto 24k,
//there is no PAYE upto 25.08k as it is below the relief amount
// 25% from 24k1 to 32.333k,30% above that

//1. Add benefits and salary to get gross pay
//2. Deduct NSSF and set it aside
//3. Deduct personal relief and calculate PAYE then add it to NSSF
//4. Calculate NHIF and add it to PAYE and NSSF
//5. Substract the above additions from Gross pay to get net pay
//Create a class PayCalculator that:
class PayCalculator {
  //Has two properties salary and benefits
  constructor(salary, benefits) {
    this.salary = salary;
    this.benefits = benefits;
  }
  //Has a get methods:
  //that calculate gross pay
  get grossPay() {
    return this.salary + this.benefits;
  }
  //that calculate NSSF
  get nssf() {
    let nssfValue = this.grossPay * 0.06;
    nssfValue < 1080 ? nssfValue : (nssfValue = 1080);
    return nssfValue;
  }
  //that calculate PAYE and deducts personal relief to get final figure
  get paye() {
    if (this.grossPay <= 25080) {
      return 0;
    } else if (this.grossPay <= 32333) {
      return (this.grossPay - 25080) * 0.25;
    } else if (this.grossPay >= 32334) {
      return (this.grossPay - 25080) * 0.25 + (this.grossPay - 33, 413) * 0.3;
    }
  }
  //that calculate NHIF
  get nhif() {
    this.grossPay;
    return this.grossPay <= 5999
      ? 150
      : this.grossPay <= 7999
      ? 300
      : this.grossPay <= 11999
      ? 400
      : this.grossPay <= 14999
      ? 500
      : this.grossPay <= 19999
      ? 600
      : this.grossPay <= 24999
      ? 750
      : this.grossPay <= 29999
      ? 850
      : this.grossPay <= 34999
      ? 900
      : this.grossPay <= 39999
      ? 950
      : this.grossPay <= 44999
      ? 1000
      : this.grossPay <= 49999
      ? 1100
      : this.grossPay <= 59999
      ? 1200
      : this.grossPay <= 69999
      ? 1300
      : this.grossPay <= 79999
      ? 1400
      : this.grossPay <= 89999
      ? 1500
      : this.grossPay <= 99999
      ? 1600
      : 1700;
  }
}

let employed = new PayCalculator(1000, 10000);

console.log(employed.nssf);
console.log(employed.paye);
console.log(employed.nhif);
//Create a NetPay function that:
//Takes gross pay and:
//deducts NSSF
//deducts PAYE
//deducts NHIF
//returns the resulting figure as net pay
