const palindromes = function (str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";

    str = str.toLowerCase();
    let l=0, r=str.length;
    while (l<r) {
        if (!(alpha.includes(str[l]))) {l++; continue;}
        if (!(alpha.includes(str[r]))) {r--; continue;}
        if (str[l] != str[r]) return false;

        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
