/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
var find = 600851475143;
var primeList = [];
/*Prime divide by 1 and That Number Only 
 *So Checked In For Loop To check It's Divide By Other Number
 */
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}

/* A Recursive Function To Find Remaining And Prime*/
function getRemAndPrime(num) {
    if (num !== 1) {  /*If Number Is One Thats A End Point Of Recursive*/
        let i = 1;
        while (++i) {
            if (isPrime(i)) {/*Check Prime*/
                let res = num / i;
                if (!isFloat(res)) {/*Result Should Be Whole number*/
                    primeList.push(i);
                    getRemAndPrime(res);
                    break;
                }
            }
        }
    } else {
        console.log(JSON.stringify(primeList) + "===" + primeList.reduce((a, b) => { return a * b }, 1));
    }
}
function isFloat(n) {
    return n % 1 !== 0;
}
getRemAndPrime(find);