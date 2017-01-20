define(["jquery", "handlebars", "system-config"], function ($, Handlebars, systemConfig) {

    // 初始化标签事件
    function initializeTabs() {
        //为所有按钮绑定生成标签的事件
        $('.navigation,.navigationTools').on('click', 'a', function () {
            var tab_url = $(this).data("url"),
                tab_text = $(this).text(),
                tab_id = this.name,
                existence = 1; // 判断该标签是否已经存在

            var tab = {
                tab_url: tab_url,
                tab_text: tab_text,
                tab_id: tab_id
            };

            if (tab.tab_url) {

                $(".tab-block .tab-jump").each(function () {
                    //data-* *必须全部字母小写
                    if ($(this).data("tab_id") == tab.tab_id) {
                        existence = 0;
                        return false;
                    }
                }).removeClass("tab-active");

                if (existence) {
                    var tabMaker = Handlebars.compile(document.getElementById("tabTemplate").text);
                    $('.tab-block').append(tabMaker(tab));
                    checkAndDeleteTabByLength();
                } else {
                    $(".tab-block .tab-jump[data-tab_id=" + tab.tab_id + "]").addClass("tab-active");
                }
            }
        });

        $(".tab-block").on('click', '.tab-jump', function () {

            var url = $(this).data("url"),
                tab_frame_id = $(this).data("tab_id");

            $(".tab-block .tab-jump").removeClass("tab-active");
            $(this).addClass("tab-active");

            if (url) {

                $(".main-block iframe").hide();
                $(".main-block iframe[name=frame" + tab_frame_id + "]").show()
                    .css({left: 50, opacity: 0}).animate({left: 0, opacity: 1}, 500);

                if (systemConfig.myConfig.frameRefresh == 1) {
                    refreshTheFrame(tab_frame_id);
                    //parent.frames["frame" + tab_frame_id].location.reload();
                }
            }
        })
            .on("click", ".tab:not(.tab-active) .tab-close-container", function () {

                var tab_frame_id = $(this).parent().data("tab_id");

                $(".main-block .frame-created[name=frame" + tab_frame_id + "]").remove();
                $(this).parent().remove();

                return false;
            })
            .on("click", ".tab-active .tab-close-container", function () {
                var $tab = $(this).parent(),
                    tab_frame_id = $tab.data("tab_id"),
                    index = $tab.index('.tab-jump') - 1,
                    $preTab = $tab.siblings('.tab-jump').eq(index),
                    preTab_id = $preTab.data("tab_id");

                $tab.remove();
                $(".main-block .frame-created[name=frame" + tab_frame_id + "]").remove();

                $(".main-block iframe[name=frame" + preTab_id + "]").show()
                    .css({left: 50, opacity: 0}).animate({left: 0, opacity: 1}, 500);
                $preTab.addClass("tab-active");

                if (systemConfig.myConfig.frameRefresh == 1) {
                    refreshTheFrame(preTab_id);
                    //parent.frames["frame" + preTab_id].location.reload();
                }

                return false;
            })
            .on("dragstart", '.tab-created', dragTab) // 设置标签拖动系列事件
            .bind("dragover", allowDrop)
            .bind("drop", dropInTabBlock);


        $(".tabButton").on('click', '.tabButton-tab-close', function () {
            $(".tab-close-menu").toggle(300);
            return false;
        })
            .on('click', 'li', function () {
                $(".tab-close-menu").hide();
            })
            .on('mouseleave', function () {
                $(".tab-close-menu").hide();
            });

        $(".tabButton-close-all").click(function () {

            var $firstTab = $(".tab-block .tab_index");

            $firstTab.addClass("tab-active");

            $(".tab-block .tab-created").remove();
            $(".main-block .frame-created").remove();

            $(".main-block iframe").eq(0).show()
                .css({left: 50, opacity: 0}).animate({left: 0, opacity: 1}, 500);
        });

        $(".tabButton-close-others").click(function () {

            var tab_frame_id = $(".tab-block .tab-active").data("tab_id");

            $(".tab-block .tab-created:not(.tab-active)").remove();
            $(".main-block .frame-created:not(:visible)").remove();

            if (systemConfig.myConfig.frameRefresh == 1) {
                refreshTheFrame(tab_frame_id);

                //parent.frames["frame" + tab_frame_id].location.reload();
            }
        });

        $(".tabButton-refresh").click(function () {

            var tab_frame_id = $(".tab-block .tab-active").data("tab_id");
            refreshTheFrame(tab_frame_id);
            //parent.frames["frame" + tab_frame_id].location.reload();
        });
    }

    //如果标签栏过长超过了总长度，则默认清除前面的标签
    function checkAndDeleteTabByLength() {
        while (true) {
            var tabBlockLength = 0,
                tabsLength = 0;

            if ($(".left-block-container", parent.document).css("display") == "none") {
                tabBlockLength = $(".tab-block", parent.document).prop("clientWidth") - 200;
            } else {
                tabBlockLength = $(".tab-block", parent.document).prop("clientWidth") - 400;
            }

            $(".tab-block>.tab-created", parent.document).each(function () {
                tabsLength += $(this).prop("clientWidth");
            });

            //精准100像素的标签长度
            if (tabsLength >= tabBlockLength - 100) {
                $(".tab-block>.tab-created", parent.document).eq(0).remove();
            } else {
                break;
            }
        }
    }

    function makeAButtonFrameAndTabMaker($btn, config) {
        $btn.click(function () {
            if(config.url==""){
                throw new Error("您必须设置所要跳转页面的的URL")
            }
            var tab_url = config.url,
                tab_text = config.text || "新创建的标签",
                tab_id = config.id || Math.floor(Math.random * 1000),
                frameMaker = Handlebars.compile($("#frameTemplate",parent.document).prop("text")),
                existence = 0; // 判断该标签是否已经存在

            var tab = {
                tab_url: tab_url,
                tab_text: tab_text,
                tab_id: tab_id
            };

            if (tab.tab_url) {
                $(".tab-block div", parent.document).each(function () {
                    //data-* *必须全部字母小写
                    if ($(this).data("tab_id") == tab.tab_id) {
                        existence = 1;
                        return false;
                    }
                }).removeClass("tab-active");

                if (existence) {
                    $(".tab-block div[data-tab_id=" + tab.tab_id + "]", parent.document).addClass("tab-active");
                    $(".main-block iframe[name=frame" + tab.tab_id + "]").show()
                        .css({left: 50, opacity: 0}).animate({left: 0, opacity: 1}, 500);

                    // 如果系统设置为自动刷新，每次进入已创建的frame时，自动刷新页面
                    if (systemConfig.myConfig.frameRefresh == 1) {
                        refreshTheFrame(tab.tab_id);
                        //parent.frames["frame" + tab.tab_id].location.reload();
                    }
                } else {
                    var tabMaker = Handlebars.compile(parent.document.getElementById("tabTemplate").text);
                    $('.tab-block', parent.document).append(tabMaker(tab));
                    checkAndDeleteTabByLength(true);
                    $(".main-block iframe",parent.document).hide();
                    $(frameMaker({url: tab_url, frame_id: tab.tab_id})).css({left: 50, opacity: 0})
                        .animate({left: 0, opacity: 1}, 500).appendTo($(".main-block",parent.document));
                }
            }
        });
    }

    // 允许tab-block放置元素
    function allowDrop() {
        event.preventDefault();
        $(".tab").removeClass("tab-dragging");
    }

    function dragTab() {
        var $tab = $(event.target);
        $tab.addClass("tab-dragging");
        event.dataTransfer.setData("tab_id", $tab.data("tab_id"));
    }

    function dropInTabBlock() {
        var tab_id = event.dataTransfer.getData("tab_id"),
            $tab = $(".tab-created[data-tab_id=" + tab_id + "]"),
            locationInfo = getTabLocation($tab);

        $tab.removeClass("tab-dragging");

        if (locationInfo.afterOrBefore == 0) {
            $tab.insertBefore(locationInfo.$nearestTab);
        } else {
            $tab.insertAfter(locationInfo.$nearestTab);
        }
    }

    function getTabLocation($tab) {
        var afterOrBefore = 1,
            $nearestTab = $tab,
            mouseX = event.clientX,
            min_dist = 9999999999,
            $tabs = $(".tab-block .tab-created");

        $tabs.each(function () {
            var tab = this,
                tabX = tab.offsetLeft + tab.offsetWidth / 2,
                abs = Math.abs(mouseX - tabX);

            if (abs < min_dist) {
                min_dist = abs;
                $nearestTab = $(tab);

                if (tabX > mouseX) {
                    afterOrBefore = 0;
                } else {
                    afterOrBefore = 1;
                }
            }
        });

        return {afterOrBefore: afterOrBefore, $nearestTab: $nearestTab}
    }

    //frame的命名请以frame开头，传入的参数是frame后面的字符串
    function refreshTheFrame(frameName){
        parent.frames["frame" + frameName].location.reload();
    }

    return {
        initializeTabs: initializeTabs,
        checkAndDeleteTabByLength: checkAndDeleteTabByLength,
        makeAButtonFrameAndTabMaker: makeAButtonFrameAndTabMaker,
        refreshTheFrame:refreshTheFrame
    }
});
