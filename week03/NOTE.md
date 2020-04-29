# 1. 重学 JavaScript | 表达式，类型转换
## 参考链接：
+ 讲师提供：
    - <https://jsfiddle.net/pLh8qeor/19/>
+ 学员提供：
    - 运算符优先级：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>
## 参考名词：
+ LeftHandSideExpression：ECMA-262.pdf 201 页 12.3
+ UpdateExpression：ECMA-262.pdf 178 页 11.9.1
+ [IIFE](https://zh.wikipedia.org/wiki/立即调用函数表达式) ：Immediately-invoked Function Expressions 立即执行的函数表达式

# 2. 重学 JavaScript | 语句，对象
## 有助于你理解的知识：
+ 按照 ECMAScript 标准，一些特定语句（statement) 必须以分号结尾。分号代表这段语句的终止。但是有时候为了方便，这些分号是有可以省略的。这种情况下解释器会自己判断语句该在哪里终止。这种行为被叫做 “自动插入分号”，简称 ASI (Automatic Semicolon Insertion) 。实际上分号并没有真的被插入，这只是个便于解释的形象说法。
+ var 最好写在函数内最前面或变量第一次出现的地方

## 课后作业：
+ 找出 JavaScript 标准里有哪些对象是我们无法实现出来的，都有哪些特性？
    - Function Object
        * [[Call]] ( thisArgument, argumentsList )
        * [[Construct]] ( argumentsList, newTarget )
    - Array Object
        * ArraySetLength ( A, Desc )
    - String Object
        * "length" property
    - Arguments Object
        * [[Delete]] ( P )
        