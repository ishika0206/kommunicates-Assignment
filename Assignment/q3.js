const reverseNum = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);

const num=123;
console.log(reverseNum(num));