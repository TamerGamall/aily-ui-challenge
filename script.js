var lengthOfLongestSubstring = function (s) {
    let n = [];
    for (let i = 0; i < s.length; i++) {

        for (let j = s.length; j > i; j--) {
            if (s[i] == s[j]) {
                n.length = 0;
                n.push(s[i]);
                continue;
            }
            if (n.includes(s[i])) {
                continue;
            }
            // console.log(i, j);
            n.push(s[i]);
            // console.log(n);
        }
    }
};
let s = "abcabcbb";
// console.log(s[]);


console.log(lengthOfLongestSubstring(s));
;