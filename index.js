function calculateTax(amount){
    return amount * (0.1);
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1 , num2) {
    if (num1 > num2) {
        return (num1);
    }
    else{
        return (num2);
    }
}

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice , discountPercentage) {
    const result = calculateDiscountedPrice(originalPrice * (20/100));
    return amount = originalPrice - discount;
}

console.log(calculateTax("500"));
console.log(convertToUpperCase("madam"));
console.log(findMaximum("7" , "10"));
console.log(isPalindrome("mango"));
console.log(calculateDiscountedPrice("1000"));




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };