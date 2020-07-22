# 1. 组件化 | One more thing：Vue 风格的 SFC
## 参考链接：
* <https://webpack.js.org/contribute/writing-a-loader/>
* <https://html.spec.whatwg.org/multipage/parsing.html#tokenization>
## 参考代码：
```js
,
            {
                test: /\.view/,
                use:{
                    loader: require.resolve("./myloader.js")
                }
            }
```
```js
import {Carousel} from "./carousel.view";
```
```js
<template>
    <div>
        <img />
    </div>
</template><script>
export default {
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      let i = 1;
      while(i < 100) {
          i ++;
      }
      return this.message.split('').reverse().join('')
    }
  }
}


</script>
```
# 2. 组件化 | 动画
## 参考链接：
* <https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation>
* <http://en.wikipedia.org/wiki/Newton’s_method>
* <https://cubic-bezier.com/#.25,.1,.25,1>
