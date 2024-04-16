"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4 * a * c;
  if (discr === 0) {
    let x = -1 * (b / (2 * a));
    arr.push(x);
  } else if (discr > 0) {
    let x1 = (-1 * b + Math.sqrt(discr)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(discr)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  let generalSum = payment * countMonths;
  return +generalSum.toFixed(2);
}