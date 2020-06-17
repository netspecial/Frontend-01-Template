# 1. 重学浏览器API | 其它API，总结
## 参考链接：
* <https://spec.whatwg.org/>
## 参考代码：
```html
<link rel="stylesheet" title="x" href="data:text/css,p%7Bcolor:blue%7D">
```

# 2. 编程与算法训练 | TicTacToe /井字棋
## 参考代码：
```javascript
    function show(){
        let board = document.getElementById("board");




        board.innerHTML = "";




        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.innerText = pattern[i][j] == 2 ? "❌" :
                    pattern[i][j] == 1 ? "⭕️" : "";
                cell.addEventListener("click", () => move(j, i));
                board.appendChild(cell);
            }
            board.appendChild(document.createElement("br"))
        }
    }
```
```css
    .cell {
        width:100px;
        height:100px;
        background-color: green;
        display:inline-block;
        border:solid 1px white;
        vertical-align: middle;




        line-height: 100px;
        font-size: 50px;
        text-align: center;
    }
```
## 参考名词：
* 蒙特卡罗方法（英语：Monte Carlo method），也称统计模拟方法，是 1940 年代中期由于科学技术的发展和电子计算机的发明，而提出的一种以概率统计理论为指导的数值计算方法。是指使用随机数（或更常见的伪随机数）来解决很多计算问题的方法。
20 世纪 40 年代，在科学家冯·诺伊曼、斯塔尼斯拉夫·乌拉姆和尼古拉斯·梅特罗波利斯于洛斯阿拉莫斯国家实验室为核武器计划工作时，发明了蒙特卡罗方法。因为乌拉姆的叔叔经常在摩纳哥的蒙特卡洛赌场输钱得名，而蒙特卡罗方法正是以概率为基础的方法。（<https://zh.wikipedia.org/wiki/蒙地卡羅方法>）