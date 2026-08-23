// isEven module
// check karta hai number even hai ya odd

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isEven, isOdd };
