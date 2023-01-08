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
class PayCalculator{
//Has two properties salary and benefits
    constructor(salary,benefits){
        this.salary = salary;
        this.benefits = benefits;
    }
//Has a get methods:
//that calculate gross pay
get grossPay(){
    return this.salary + this.benefits
}
//that calculate NSSF
get nssf(){
   let nssfValue = this.grossPay*0.06
   nssfValue < 1080 ? nssfValue : nssfValue = 1080
   return nssfValue
}
//that calculate PAYE and deducts personal relief to get final figure
get paye(){
if(this.grossPay <=25080){
    return 0
}
else if(this.grossPay <= 32333){
   return (this.grossPay - 25080) * 0.25
}

}
//that calculate NHIF

}
let employed = new PayCalculator(1000,1000)

console.log(employed.nssf)
console.log(employed.paye)
//Create a NetPay function that:
//Takes gross pay and:
//deducts NSSF
//deducts PAYE
//deducts NHIF 
//returns the resulting figure as net pay
