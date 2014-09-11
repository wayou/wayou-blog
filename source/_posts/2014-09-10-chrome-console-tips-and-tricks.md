title: 让我们拥抱Chrome Console 大法
categories: tech
date: 2014-09-10 21:20:04
tags:
- chrome
- console
- dev-tools
---

Chrome的开发者工具已经强大到没朋友的地步了，特别是其功能丰富界面友好的console，使用得当可以有如下功效：
- 开发更高效轻松
- 调试更快速准确

直接产生的后果是：

- 更高「逼格」更快「开发调试」更强「进阶级的Frontender」
- Bug无处遁形「Console大法好」

<!-- more -->

console.log
---
大家都会用log，但少有人很好地利用`console.error` , `console.warning` 将输出到控制台的信息进行分类整理

console.group
---


Chrome Console 的使用包括两方面，一个是[Console API](https://developer.chrome.com/devtools/docs/console-api)，另一个是[Command Line API](https://developer.chrome.com/devtools/docs/commandline-api.md)。



Console API 篇
===

Chrome Console API相当丰富。作为一名前端程序员，我不会以为你不知道或者没用过Console，所以像`console.log('hello world')`这种被认为很LOW的用法是不会出现在这里的，我们将要去探寻面纱背后的神奇，挖掘不样的神奇用法。

比如给`hello world` 做件漂亮的嫁衣再拉出来见人：

```js
console.log('%chello world','font-size:25px;color:red;');
```
>output goes here


如果你觉得不够过瘾，那就把你能写出来的最华丽的CSS样式都应用上吧，比如渐变：

```js
console.log('%chello world', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
```
>output goes here

各种招大招的节奏啊~

看着上面密集的代码不用惊慌，上面`console.log()`第二个参数全是纯CSS用来控制样式的，你不会陌生。

refernce: [Styled console logging in the Chrome DevTools (Canary)](https://plus.google.com/+AddyOsmani/posts/TanDFKEN9Kn)

如果还不够过瘾，那咱们来log一些图片吧，甚至。。。动图？
对，你得先有图，我们拿[这张图](http://d.pcs.baidu.com/thumbnail/8ecd71e58783e8571b889f9df4c19147?fid=875533066-250528-651695669515765&time=1410400800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XWO0nUlvYtrOd3PrKF4E1uanO20%3D&expires=8h&prisign=RK9dhfZlTqV5TuwkO5ihMQzlM241kT2YfffnCZFTaEPwOxHv/XxtwRXLxDSXMBba1Ms9seOiqT9/QffwI8K2Baw0mmLABRQNl51b/oS8+InqoadADmwcyhXydyuW0wDpnC1eeHIg5py5Yk3oaKaHUoLgzh+qonpalNnA+pfMKYDycgI5A4W/Ju5XK/lbx40bb4wELIkwZL96LViffWUbnA0eUoBX2SZbQyj6G5pre1g=&chkv=0&chkbd=0&chkpc=&size=c1366_u768&quality=90)为例。

```js
console.log("%c", "padding:50px 300px;line-height:120px;background:url('http://d.pcs.baidu.com/thumbnail/8ecd71e58783e8571b889f9df4c19147?fid=875533066-250528-651695669515765&time=1410400800&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XWO0nUlvYtrOd3PrKF4E1uanO20%3D&expires=8h&prisign=RK9dhfZlTqV5TuwkO5ihMQzlM241kT2YfffnCZFTaEPwOxHv/XxtwRXLxDSXMBba1Ms9seOiqT9/QffwI8K2Baw0mmLABRQNl51b/oS8+InqoadADmwcyhXydyuW0wDpnC1eeHIg5py5Yk3oaKaHUoLgzh+qonpalNnA+pfMKYDycgI5A4W/Ju5XK/lbx40bb4wELIkwZL96LViffWUbnA0eUoBX2SZbQyj6G5pre1g=&chkv=0&chkbd=0&chkpc=&size=c1366_u768&quality=90') no-repeat;");
```
>output goes here

看着上面摇摆的豆比兔是不是有种抽它一脸的冲动。

`console.log()` 接收不定参数，参数间用逗号分隔，最终会输出会将它们以空白字符连接。

```js
console.log('%c你好','color:red;','小明','你知道小红被妈妈打了么');
```
>output goes here

第一个参数里可以带用百分号开头的转义指令，如上面输出带样式的文字时使用的`%c`指令。更详细的指令参见官方API文档的[这个表格](https://developer.chrome.com/devtools/docs/console-api#consolelogobject-object)。








Command Line API 篇
===

顾名思义，这一部分的操作是把Chrome的控制台当成一个命令行工具来用，直接在Console里敲命令，这些命令是由Chrome 控制台提供的，不像前面一部分介绍的那些是挂在`window.console`下的。

copy
---
通过此命令可以直接对页面文本进行复制，

看完上面的演示相信脑洞全开的你跟我一样会联想到一种神奇的功效，那就是通过这个命令可以在JS里进行复制操作从而不用依赖Flash插件了。But现实是残酷的，控制台的命令只能在控制中环境中执行，如前面所说，他不依附于任何全局变量比如`window`，所以其实在JS代码里是访问不了这个`copy`方法的「oh, how sad」。