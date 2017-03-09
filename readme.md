#HKHFrame

HKHFrame旨在以简洁大方的界面帮助各类用户迅速搭建起属于自己的pc端web应用。下面是对她的简要介绍。

打开方式，直接打款views/frame/index.html即可。

![主界面](http://i.imgur.com/Ss2UJDa.jpg)


##功能介绍

>HKH框架拥有后台管理系统的所有基本功能，这里我主要介绍几点HKH为用户精心设计的功能

###导航小工具

点击左侧导航栏的收缩按钮可以将导航栏转换为轻便的导航小工具。

![](http://i.imgur.com/ITgaA3A.jpg)

###标签卡管理

用户每打开一个子页面都将会生成对应的标签卡，以方便用户对访问过的页面进行回访。当标签卡达到一定的数量后，会自动关闭前面的位于标签栏较前标签卡。用户可以拖动标签卡，调整标签卡的位置。

![](http://i.imgur.com/32MNesx.jpg)

###页面刷新

可以点击右上角旋转的小螺丝设置子页面iframe的刷新方式。在默认情况下，子页面为手动刷新，这意味着需要用户手动点击标签栏右侧的刷新按钮
对页面进行刷新处理。这样做的好处是访问曾经访问过的数据不会导致额外的请求消耗。

用户可以在这里将其更改为自动刷新，更改后，用户访问曾经访问过的子页面时，将直接导致子页面自动刷新，这样，用户看到的子页面
都将会是最新状态下的。

![](http://i.imgur.com/5Y8vOyU.jpg)

###HKHUI

初始子页面是基于弹性盒子的demo，其中的轮播图，滑动底线导航栏等效果我已封装到我github的另一个叫做**HKHUI**的项目中

[https://github.com/HuKaihe/HKHUI](https://github.com/HuKaihe/HKHUI)

##开发者说明：

> HKHFrame开源免费，我已使用它构建了我的博客HKH博客，[http://www.hukaihe.cn](http://www.hukaihe.cn)(注：博客受知识产权保护)。下面主要讲解一下如何将这套框架为你所用。

###技术要点

HKHFrame基于AMD(require.js)实现前端模块化，CSS样式基于bootstrap，使用font awesome字体图标，以handlebars作为数据渲染的模板引擎，layer控制弹出层。所用的库在public/library中可以找到。

###部署于服务器上

部署于服务器上的HKHFrame可以享受更好的用户体验。调整文件导入路径时，注意默认状态下，将所有路径前的../../去掉即可（这涉及到require-config.js\index.html\init.html）。awesome中的css文件可能需要额外修改。

###导航菜单渲染

可以通过直接修改public/javascripts/navigationMaker.js里提供的json数据来修改左侧的导航菜单的渲染，也可以打开navigationMaker.js注释掉的ajax，从后台获取相应格式的JSON数据。下面是每个按钮需要具备的属性：

	{
		"id": 1.5, // 必填且不得重复
		"_parentId": 1, // 父节点ID，不必须
		"menus_status": 1, // 不必须，作为附加选项
		"text": "经典CSS", // 必须，按钮显示的文字
		"func_name": "", // 不必须，渲染为data-funcname，用于绑定事件
		"icon": "fa-css3",// 不必须，按钮的图标，默认只支持font awesome，你可以通过修改
		// index.html里的渲染模板来引入其它字体库
		"url": "", // 不必须，子页面的URL，如果有，则导致子页面进行渲染
		"childInfo": [] // 不必须，子节点数组，里面包含和整个对象完全相同的结构，可以有若干个
	}

可见，每个按钮至少需要有一个id和文本内容。

###require-config.js

这个文件里设置了require.js里文件的查找路径

##版权说明

本框架的界面设计及代码均为胡凯赫（KyleHu）所有，完全开源，欢迎大家免费使用。但这仅限于代码及设计风格，不包括子页面中的图片及本框架的LOGO。当你在使用本框架时，你可以（但不必须）通过下面的邮箱（agentkyle@foxmail.com）与我取得联系，让我知道你正打算使用它，或者像我抱怨其中的一些bug。谢谢。



