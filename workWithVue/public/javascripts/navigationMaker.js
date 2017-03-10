/**
 * Created by 圣经的旋律 on 2016/5/31.
 * 操作导航栏的js文件
 */
define(['jquery', 'handlebars', 'tab-operation', 'system-config'], function ($, Handlebars, tabOperation, systemConfig) {
    var data = [
        {
            "id": 1,
            "_parentId": 0,
            "menus_status": 1,
            "text": "WEB前端",
            "func_name": "",
            "icon": "fa-desktop",
            "url": "",
            "childInfo": [
                {
                    "id": 1.1,
                    "_parentId": 1,
                    "menus_status": 1,
                    "text": "经典JS",
                    "func_name": "",
                    "icon": "fa-puzzle-piece",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "js立即调用函数",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "js立即调用函数",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/javascript/js立即调用函数.html"
                        },
                        {
                            "id": "轻松理解javascript原型",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "轻松理解javascript原型",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/javascript/轻松理解javascript原型.html"
                        },
                        {
                            "id": "轻松理解javascript继承",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "轻松理解javascript继承",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/javascript/轻松理解javascript继承.html"
                        },
                        {
                            "id": "数媒2016年11月招新面试题",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "数媒2016年11月招新面试题",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/questions/数媒2016年11月招新面试题.html"
                        }
                    ]
                },
                {
                    "id": 1.5,
                    "_parentId": 1,
                    "menus_status": 1,
                    "text": "经典CSS",
                    "func_name": "ddd",
                    "icon": "fa-css3",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "浮动与display-inline-block",
                            "_parentId": 1.5,
                            "menus_status": 1,
                            "text": "浮动与display-inline-block",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/css/浮动与display-inline-block.html"
                        },
                        {
                            "id": "深入理解：overflow-hidden——溢出,坍塌,清除浮动",
                            "_parentId": 1.5,
                            "menus_status": 1,
                            "text": "深入理解：overflow-hidden——溢出,坍塌,清除浮动",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/css/深入理解：overflow-hidden——溢出,坍塌,清除浮动.html"
                        }
                    ]
                },
                {
                    "id": 1.2,
                    "_parentId": 1,
                    "menus_status": 1,
                    "text": "HTML5+CSS3",
                    "func_name": "",
                    "icon": "fa-html5",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "约束验证API",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "约束验证API",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/advanced/约束验证API.html"
                        }
                    ]
                },
                {
                    "id": 1.3,
                    "_parentId": 1,
                    "menus_status": 1,
                    "text": "MVVM",
                    "func_name": "",
                    "icon": "fa-drupal",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "vuejs入门",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "vuejs入门",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/advanced/vuejs入门.html"
                        }
                    ]
                },
                {
                    "id": 1.4,
                    "_parentId": 1,
                    "menus_status": 1,
                    "text": "ES6",
                    "func_name": "",
                    "icon": "fa-chrome",
                    "url": "",
                    "childInfo": []
                }
            ]
        },
        {
            "id": 2,
            "_parentId": 0,
            "menus_status": 1,
            "text": "WEB后台",
            "func_name": "",
            "icon": "fa-database",
            "url": "",
            "childInfo": [
                {
                    "id": 2.1,
                    "_parentId": 2,
                    "menus_status": 1,
                    "text": "nodejs",
                    "func_name": "",
                    "icon": "fa-linode",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "Nodejs学习笔记1",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记1",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记1.html"
                        },
                        {
                            "id": "Nodejs学习笔记2",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记2",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记2.html"
                        },
                        {
                            "id": "Nodejs学习笔记3",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记3",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记3.html"
                        },
                        {
                            "id": "Nodejs学习笔记5",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记5",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记5.html"
                        },
                        {
                            "id": "Nodejs学习笔记6",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记6",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记6.html"
                        },
                        {
                            "id": "Nodejs学习笔记7",
                            "_parentId": 2.1,
                            "menus_status": 1,
                            "text": "Nodejs学习笔记7",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/node/Nodejs学习笔记7.html"
                        }
                    ]
                },
                {
                    "id": 2.2,
                    "_parentId": 2,
                    "menus_status": 1,
                    "text": "mongodb",
                    "func_name": "",
                    "icon": "fa-tree",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "MongoDB及其客户端工具的按照与配置",
                            "_parentId": 2.2,
                            "menus_status": 1,
                            "text": "MongoDB及其客户端工具的按照与配置",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/bgp/MongoDB及其客户端工具的按照与配置.html"
                        }
                    ]
                },
                {
                    "id": 2.3,
                    "_parentId": 2,
                    "menus_status": 1,
                    "text": "java ee",
                    "func_name": "",
                    "icon": "fa-android",
                    "url": "",
                    "childInfo": []
                },
                {
                    "id": 2.4,
                    "_parentId": 2,
                    "menus_status": 1,
                    "text": "SpringMVC+Mybatis",
                    "func_name": "",
                    "icon": "fa-leaf",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "读懂Spring依赖注入的每个细节",
                            "_parentId": 1.1,
                            "menus_status": 1,
                            "text": "读懂Spring依赖注入的每个细节",
                            "func_name": "",
                            "icon": "fa-file",
                            "url": "/views/blogs/bgp/读懂Spring依赖注入的每个细节.html"
                        }
                    ]
                },
                {
                    "id": 2.5,
                    "_parentId": 2,
                    "menus_status": 1,
                    "text": "云服务器",
                    "func_name": "",
                    "icon": "fa-cloud",
                    "url": "",
                    "childInfo": [
                        {
                            "id": "腾讯云上搭建基于Nodejs的网站",
                            "_parentId": 5,
                            "menus_status": 1,
                            "text": "腾讯云上搭建基于Nodejs的网站",
                            "func_name": "",
                            "icon": "fa-cloud",
                            "url": "/views/blogs/bgp/腾讯云上搭建基于Nodejs的网站.html",
                            "childInfo": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "_parentId": 0,
            "menus_status": 1,
            "text": "其他技术",
            "func_name": "",
            "icon": "fa-tasks",
            "url": "",
            "childInfo": [
                {
                    "id": 3.1,
                    "_parentId": 3,
                    "menus_status": 1,
                    "text": "操作系统",
                    "func_name": "",
                    "icon": "fa-windows",
                    "url": "",
                    "childInfo": []
                },
                {
                    "id": 3.2,
                    "_parentId": 3,
                    "menus_status": 1,
                    "text": "多媒体技术导论",
                    "func_name": "",
                    "icon": "fa-camera",
                    "url": "",
                    "childInfo": []
                },
                {
                    "id": 3.3,
                    "_parentId": 3,
                    "menus_status": 1,
                    "text": "汇编语言",
                    "func_name": "",
                    "icon": "fa-cogs",
                    "url": "",
                    "childInfo": []
                }
            ]
        },
        {
            "id": 4,
            "_parentId": 0,
            "menus_status": 1,
            "text": "神学研究",
            "func_name": "",
            "icon": "fa-arrows",
            "url": "",
            "childInfo": [
                {
                    "id": 4.1,
                    "_parentId": 4,
                    "menus_status": 1,
                    "text": "圣经研读",
                    "func_name": "",
                    "icon": "fa-book",
                    "url": "",
                    "childInfo": []
                },
                {
                    "id": 4.2,
                    "_parentId": 4,
                    "menus_status": 1,
                    "text": "以色列史",
                    "func_name": "",
                    "icon": "fa-bookmark",
                    "url": "",
                    "childInfo": []
                },
                {
                    "id": 4.3,
                    "_parentId": 4,
                    "menus_status": 1,
                    "text": "赞美诗",
                    "func_name": "",
                    "icon": "fa-music",
                    "url": "",
                    "childInfo": []
                }
            ]
        }
    ];

    function initializeNavigation() {
        // $.get("/views/frame/menu.json", null, function (data) {

            var nav_data = data;

            //生成左侧导航栏
            var navigationMaker = Handlebars.compile($("#navigationTemplate").prop("text"));
            $('.navigation').append(navigationMaker(nav_data));

            //生成左侧的导航工具
            var navigationToolsMaker = Handlebars.compile($("#navigationToolsTemplate").prop("text"));

            //注册工具函数
            Handlebars.registerHelper("hasTriangle", function (index, options) {
                if (index == 0) {
                    //满足添加继续执行
                    return options.fn(this);
                } else {
                    //不满足条件执行{{else}}部分
                    return options.inverse(this);
                }
            });
            $(".navigationTools").append(navigationToolsMaker(nav_data));

            //为所有按钮绑定页面跳转
            $('.navigation a,.navigationTools a').click(function () {

                var url = $(this).data("url"),
                    btn_frame_id = this.name;

                //设置页面跳转
                if (url) {

                    //生成页面
                    var frameMaker = Handlebars.compile($("#frameTemplate").prop("text")),
                        existence = 0; // 判断该页面是否已经存在

                    $(".main-block iframe").each(function () {
                        if (btn_frame_id == $(this).prop("name")) {
                            existence = 1;
                            return false;
                        }
                    }).hide();

                    if (existence == 1) {
                        $(".main-block iframe[name=frame" + btn_frame_id + "]").show()
                            .css({left: 50, opacity: 0}).animate({left: 0, opacity: 1}, 500);

                        // 如果系统设置为自动刷新，每次进入已创建的frame时，自动刷新页面
                        if (systemConfig.myConfig.frameRefresh == 1) {
                            tabOperation.refreshTheFrame(btn_frame_id);
                        }
                    } else {
                        $(frameMaker({url: url, frame_id: btn_frame_id})).css({left: 50, opacity: 0})
                            .animate({left: 0, opacity: 1}, 500).appendTo($(".main-block"));
                    }

                    existence = 0;
                }
            });


            //为导航栏绑定动画
            $('.navigation a').click(function () {
                var $parentLi = $(this).parent(),
                    levelForFirst = $parentLi.find('.second-menu').length,
                    levelForThird = $parentLi.find('.third-menu').length;

                //没有子菜单的结点活跃状态为瞬时激活
                if (length) {
                    $parentLi.siblings().find(".navButton-spread").removeClass("fa-angle-up").addClass("fa-angle-down");
                    $(this).find(".navButton-spread").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
                    $parentLi.siblings().find("a").removeClass("navButton-active navButton-second-active");

                    if (levelForFirst >= 1) {
                        $(this).toggleClass("navButton-active");
                    } else if (levelForThird >= 1) {
                        $(this).toggleClass("navButton-second-active");
                    }

                    $parentLi.siblings().find("ul").slideUp(150);
                    $parentLi.find("ul").eq(0).slideToggle(150);
                }
            });

            //为导航工具绑定动画
            $('.navigationTools li a').hover(function () {
                var $parentLi = $(this).parent();
                $parentLi.siblings().find("ul").hide();
                $parentLi.find("ul").eq(0).show();
            })
                .click(function () {
                    //点击任意含有URL跳转的按钮，如果这个按钮没有孩子将会导致导航工具回复初始状态
                    if ($(this).data("url") && !$(this).parent().find("ul").length) {
                        $(".navigationTools ul").hide();
                    }
                });
            $(".navigationTools .tools-third-menu,.navigationTools .tools-second-menu")
                .mouseleave(function () {
                    $(this).hide()
                });
        // });

        // 左侧导航栏菜单栏及工具栏的相互转换
        $(".navButton-stretch").click(function () {
            $(".left-block-container").hide(70);
            $(".left-tools").show(70);
        });

        $(".navButton-shrink").click(function () {
            $(".left-tools").hide(70);
            $(".left-block-container").show(70, function () {
                tabOperation.checkAndDeleteTabByLength();
            });
        });

        //点击其他区域，自动收起工具菜单导航
        $("body").click(function () {
            $(".secondChildToolsFunction").hide();
            $(".thirdChildToolsFunction").hide();
        })
    }

    return {initializeNavigation: initializeNavigation}
});








