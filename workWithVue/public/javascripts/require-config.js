
require.config({
    paths:{
        handlebars:"../../public/library/handlebars/handlebars-v4.0.5",
        jquery:"../../public/library/jquery/jquery-1.12.0.min",
        "navigation-maker":"../../public/javascripts/navigationMaker.min",
        "tab-operation":"../../public/javascripts/tab-operation.min",
        "system-config":"../../public/javascripts/system-config.min",
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






