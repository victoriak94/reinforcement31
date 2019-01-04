
function luck_check(str) {
    if (str === NaN) {
      return "please enter a valid number"
    } else {
        let digits = str.split('')
        let firstHalf = 0
        let secondHalf = 0
        for (i = 0 ; i < (Math.floor(digits.length / 2)) ; i++) {
            firstHalf += parseInt(digits[i])
            console.log(digits[i])
        }
        console.log('-----')
        for (i = (Math.ceil(digits.length / 2)) ; i < digits.length ; i++) {
            secondHalf += parseInt(digits[i])
            console.log(digits[i])
        }
    return (firstHalf === secondHalf)
    }
}

console.log(luck_check('003111'))
console.log(luck_check('813372'))
console.log(luck_check('17935'))
console.log(luck_check('56328116'))
console.log(luck_check('563328116'))
