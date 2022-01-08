module.exports = function toReadable(number) {
    const dictionary = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const num = number.toString();
    if (number === 0) {
        return "zero";
    }

    if (num.length === 1) {
        return dictionary[num];
    }

    if (num.length === 2) {
        if (num < 20) {
            return dictionary[num];
        } else {
            let n = num.split("");
            if (n[1] === "0") return dictionary[n[0] + "0"];
            else {
                return dictionary[n[0] + "0"] + " " + dictionary[n[1]];
            }
        }
    }

    if (num.length === 3) {
        let n = num.split("");
        let nn = num[1] + num[2];
        if (n[1] === "0" && n[2] === "0") {
            return dictionary[n[0]] + " hundred";
        } else if (n[1] === "0") {
            return dictionary[n[0]] + " hundred" + " " + dictionary[n[2]];
        } else if (nn < 20) {
            return dictionary[n[0]] + " hundred" + " " + dictionary[nn];
        } else if (n[2] === "0") {
            return dictionary[n[0]] + " hundred" + " " + dictionary[n[1] + "0"];
        } else {
            return (
                dictionary[n[0]] +
                " hundred" +
                " " +
                dictionary[n[1] + "0"] +
                " " +
                dictionary[n[2]]
            );
        }
    }
};
