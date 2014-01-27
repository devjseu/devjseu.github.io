yamvc.$onReady(function () {

    //example - 1
    (new yamvc.View({
        config: {
            tpl: new yamvc.view.Template({
                config: {
                    id: 'tpl-example-1',
                    tpl: [
                        'Hello World!'
                    ]
                }
            }),
            renderTo: '#example-1-result'
        }
    })).render();

    //example - 2
    var view, model;

    model = new yamvc.Model({
        config: {
            namespace: 'example',
            data: {
                name: "Guest"
            }
        }
    });

    view = new yamvc.View({
        config: {
            models: [
                model
            ],
            tpl: new yamvc.view.Template({
                config: {
                    id: 'tpl-example-2',
                    tpl: [
                        'Hi {{example.name}}!'
                    ]
                }
            }),
            renderTo: '#example-2-result'
        }
    });

    view.render();

    //example - 3
    var view, model, controller;

    model = new yamvc.Model({
        config: {
            namespace: 'example',
            data: {
                name: "",
                display: "none"
            }
        }
    });

    view = new yamvc.View({
        config: {
            models: [
                model
            ],
            tpl: new yamvc.view.Template({
                config: {
                    id: 'tpl-example-3',
                    tpl: [
                        '<div>Who are you ?</div>',
                        '<button style="margin: 10px;">answer</button>',
                        '<div style="display: {{example.display}}">Hi {{example.name}}</div>'
                    ]
                }
            }),
            renderTo: '#example-3-result'
        }
    });

    controller = new yamvc.Controller({
        config: {
            name: 'Main',
            views: {
                example: view
            },
            events: {
                'button': {
                    click: function (view, e) {
                        var name = prompt("What is your name?");

                        view.getModel('example').data("name", name);

                        if(name.length)
                            view.getModel('example').data("display", "block");
                        else
                            view.getModel('example').data("display", "none");

                    }
                },
                $example: {
                    render: function (view) {
                    }
                }
            }
        }
    });

    view.render();

});




