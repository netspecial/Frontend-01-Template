# 1. 编程与算法训练 | Promise与异步编程
# 2. 编程与算法训练 | 寻路问题（搜索）
## 参考代码：
```css
.cell {
    display:inline-block;
    width:6px;
    height:6px;
    background-color: gray;
    border-bottom:solid 1px white;
    border-right:solid 1px white;
    vertical-align: middle;
}
#container{
    width:701px;
}
```
# 3. 编程与算法训练 | 寻路问题（搜索），正则表达式
## 参考代码：
```javascript
function sleep(t){
    return new Promise(function(resolve){
        setTimeout(resolve, t);
    });
}    
```