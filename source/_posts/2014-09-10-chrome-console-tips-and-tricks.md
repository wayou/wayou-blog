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

Chrome Console 的使用包括两方面，一个是[Console API](https://developer.chrome.com/devtools/docs/console-api)，另一个是[Command Line API](https://developer.chrome.com/devtools/docs/commandline-api.md)。



Console API 篇
===

Chrome Console API相当丰富。作为一名前端程序员，我不会以为你不知道或者没用过Console，所以像`console.log('hello world')`这种被认为很LOW的用法是不会出现在这里的，我们将要去探寻面纱背后的神奇，挖掘不样的神奇用法。

比如给`hello world` 做件漂亮的嫁衣再拉出来见人：

```js
console.log('%c','<><>');
```




Command Line API 篇
===

顾名思义，这一部分的操作是把Chrome的控制台当成一个命令行工具来用，直接在Console里敲命令，这些命令是由Chrome 控制台提供的，不像前面一部分介绍的那些是挂在`window.console`下的。

copy
---
通过此命令可以直接对页面文本进行复制，

看完上面的演示相信脑洞全开的你跟我一样会联想到一种神奇的功效，那就是通过这个命令可以在JS里进行复制操作从而不用依赖Flash插件了。But现实是残酷的，控制台的命令只能在控制中环境中执行，如前面所说，他不依附于任何全局变量比如`window`，所以其实在JS代码里是访问不了这个`copy`方法的「oh, how sad」。