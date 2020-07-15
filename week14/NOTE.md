# 1. 组件化 | 为组件添加JSX语法
## 参考链接：
* 安装 webpack： <https://webpack.js.org/concepts/>
* <https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/>
* <https://github.com/babel/babel-loader>
* <https://facebook.github.io/jsx/>
## 参考代码：
```javascript
"@babel/core": "^7.10.4",
"@babel/preset-env": "^7.10.4",
"@babel/plugin-transform-react-jsx": "^7.10.4",
"babel-loader": "^8.1.0",
"webpack": "^4.43.0"
```

```javascript
let component = <Div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
        <Div></Div>
        <Div></Div>
        <Div></Div>
    </Div>
```

# 2. 组件化 | 轮播组件
## 参考代码：
```javascript
    carousel.data = [
        "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
        "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
        "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
        "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"
    ];
```

```javascript
this.root.addEventListener("mousedown", event => {
                        let startX = event.clientX, startY = event.clientY;


                        let move = event => {
                            console.log(event.clientX - startX, event.clientX - startY);
                        };
                        let up = event => {
                            document.removeEventListener("mousemove", move);
                            document.removeEventListener("mouseup", up);
                        };
                        document.addEventListener("mousemove", move);
                        document.addEventListener("mouseup", up);
                    })

```

```javascript
element.addEventListener("dragstart", event => event.preventDefault())
```