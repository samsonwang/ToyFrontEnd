

let myString = "Hello World";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// 正则表达式中，or 匹配
let regex2 = /cat|bird/;

// 忽略大小写
let regex3 = /case/i;


// 使用正则表达式进行字符串过滤
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


// 进行返回满足规则的多次结果
// g => global
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
result = twinkleStar; // Change this line

// 使用 . 匹配所有的字符


// 使用 [] 匹配指定的字符
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
result = quoteSample.match(vowelRegex); // Change this line


// 使用 [] 中可以使用 - 代表一个范围
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
result = quoteSample2.match(alphabetRegex); // Change this line


// 这个范围还可以是多个，并且允许包含数字
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
result = quoteSample3.match(myRegex); // Change this line


// 使用^符号能够匹配不包含某些字符
let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^0-9aeiou]/gi; // Change this line
result = quoteSample4.match(myRegex2); // Change this line


// 使用 + 对出现连续出现的字符进行匹配
let difficultSpelling = "Mississippi";
myRegex3 = /s+/g; // Change this line
result = difficultSpelling.match(myRegex3);

// 使用 * 星号匹配可能没有出现的次数（出现次数为 0~n 次）
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
result = chewieQuote.match(chewieRegex);

// 使用 ? 进行较短匹配 （lazy match, 与greedy match 对应）
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


// 使用 ^ 对出现在字符串开始位置进行匹配
// 注意上边也用到这个符号表示取反，是在 [] 中表示取反
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// 使用 $ 对出现在字符串结束位置进行匹配
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// 使用 \w 代替 [A-Za-z0-9_]，包含所有的数字、字母和下划线
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


// 使用 \W 代替 [^A-Za-z0-9_]，相当于上边的逆向匹配
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


// 使用 \d 代替 [0-9]，所有数字匹配
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;


// 使用 \D 代替 [^0-9]，所有非数字匹配
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;


// 使用 \s 代替 [ \r\t\f\n\v]，与空格和换行相关
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


// 使用 \S，代替 [^ \r\t\f\n\v]，不包含空格和换行
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


// 使用 {min, max} 对字符出现的次数进行限定
// 回想起使用 + 限制次数为 {0,}，使用 - 限制次数为 {1,}
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);


// 仅限制出现次数的下线 {min,}
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);


// 指定出现的次数 {count}
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


// 使用 ? 匹配可能出现的字母
// 问号用于声明lazy match，如何判断是lazy match还是匹配可能出现的东西呢
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);


// lookahead 的概念
// (?=...) 与 (?!...)

// 用于检查是密码，是否由3~6个字母和至少一个数字
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);


// 截取字符串中的重复部分，使用括号 () 对内容进行补充，是用 \1 表示第一个捕捉到的字符
let repeatNum = "42 42 42";
let reRegex = /^(\d*)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);


// 通过截取字符串，可以对截取的字符串进行修改或替换操作
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"


let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

// 使用正则表达式实现类似 .trim() 的功能
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

console.log(result);





