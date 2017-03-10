define(['jquery', 'layer', 'handlebars'], function ($, layer) {
    var myConfig = {
        frameRefresh: 0 // 0 手动刷新，1 自动刷新
    };

    $(".button-settings").click(function () {
        var layerIndex = layer.open({
            title: "系统设置",
            content: $("#modalSettingsTemplate")[0].text,
            area: ["300px"],
            btn: ["确定", "取消"],
            yes: function () {
                myConfig.frameRefresh = $("#refreshType").val();
                layer.close(layerIndex);
            },
            success: function () {
                $("#refreshType option[value=" + myConfig.frameRefresh + "]").attr("selected","true");
            }
        });
    });
    return {
        myConfig: myConfig
    }
});