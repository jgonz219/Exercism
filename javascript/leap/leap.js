//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this.year = year
};

Year.prototype.isLeap = function () {
    let isLeap = false

    if (this.year % 4 === 0) {
        isLeap = true
        if (this.year % 100 === 0) {
            isLeap = false
            if (this.year % 400 === 0) {
                isLeap = true
            }
        }
    }
    else {
        return false
    }

    return isLeap
};

module.exports = Year;
