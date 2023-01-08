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
//there is not PAYE upto 24k as it is below the relief amount
// 25% from 24k1 to 32.333k,30% above that

//1. Add benefits and salary to get gross pay
//2. Deduct NSSF and set it aside
//3. Deduct personal relief and calculate PAYE then add it to NSSF
//4. Calculate NHIF and add it to PAYE and NSSF 
//5. Substract the above additions from Gross pay to get net pay

