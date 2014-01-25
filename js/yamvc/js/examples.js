yamvc.$onReady(function () {

    (new yamvc.View({
        config: {
            tpl: new yamvc.view.Template({
                config: {
                    id: 'tpl-bar',
                    tpl: [
                        '<span>',
                        'Hello World!',
                        '</span>'
                    ]
                }
            }),
            renderTo: '#example-1-result'
        }
    })).render();

});