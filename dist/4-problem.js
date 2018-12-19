/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
console.time("execution time");
var digitCount = 3;/*SET number of digits*/
var a = (Math.pow(10, digitCount - 1));/*calculated max in previous decimal place*/
var result;
while (Math.ceil(Math.log10(a++ + 1)) === digitCount) {/* post increment 1 and check its length to check length used Math.ceil(Math.log10(++a + 1))*/
    var b = (Math.pow(10, digitCount - 1));
    while (Math.ceil(Math.log10(b++ + 1)) === digitCount) {
        var product = a * b;
        if (isPalindrome(product)) {
            result = a + "x" + b + "=" + product;
        }
    }
}
function isPalindrome(num) {
    num = num + '';/* To Convert as string*/
    let rev = num.split('').reverse().join('');/* To Reverse*/
    return num === rev
}
console.timeEnd("execution time");
console.log(result);
