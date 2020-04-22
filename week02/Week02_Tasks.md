## 1. 写一个正则表达式 匹配所有 Number 直接量
```
(^(0[bB][0-1]+)|(0[oO][0-7]+)|(0[xX][0-9a-fA-F]+)$)|(^(([1-9]\d*\.?\d*)|(0|0?\.\d*))([eE][-]?[1-9]+\d*)?$)
```
## 2. 写一个 UTF-8 Encoding 的函数
```
function UTF8_Encoding(string){
    const code = encodeURIComponent(string);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}
```
## 3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
```
(^\'[\s\S]*[\w\W]*[\d\D]*\'$)|(^\"[\s\S]*[\w\W]*[\d\D]*\"$)|(^\`[\s\S]*[\w\W]*[\d\D]*\`$)
```
