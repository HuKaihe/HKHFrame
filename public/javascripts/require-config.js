require.config({
    paths:{
        handlebars:"../../public/library/handlebars/handlebars-v4.0.5",
        jquery:"../../public/library/jquery/jquery-1.12.0.min",
        "navigation-maker":"../../public/javascripts/navigationMaker",
        "tab-operation":"../../public/javascripts/tab-operation",
        "system-config":"../../public/javascripts/system-config",
        layer:"../../public/library/layer/layer"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'layer': {
            deps:['jquery'],
            exports: 'layer'
        }
    }
});






