function getMaxNumber (a,b,c) {
    max = a;
    if (b > max) {
        max = b;
    }else{
        if (c > max) {
            max = c;
        }
    }return max
}
getMaxNumber(6, 2, 8)

module.exports = {getMaxNumber}