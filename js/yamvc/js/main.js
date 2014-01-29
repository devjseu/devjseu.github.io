var Menu, MenuItem;

Menu = yamvc.View.$extend({
    defaults: {
        tpl: new yamvc.view.Template({
            config: {
                id: 'tpl-menu',
                tpl: [
                    '<nav class="navbar navbar-inverse navbar-embossed" role="navigation">',
                    '<div class="navbar-header">',
                    '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">',
                    '<span class="sr-only">{{locale.toggleNavigation}}</span>',
                    '</button>',
                    '</div>',
                    '<div class="collapse navbar-collapse" id="navbar-collapse-01">',
                    '<ul class="nav navbar-nav navbar-left">' ,
                    '</ul>',
                    '</div>',
                    '</nav>'
                ]
            }
        })
    }
});

MenuItem = yamvc.View.$extend({
    defaults: {
        tpl: new yamvc.view.Template({
            config: {
                id: 'tpl-menu-item',
                tpl: [
                ]
            }
        })
    }
});

yamvc.$onReady(function () {
    var menu;

    menu = new Menu({
        config : {
            renderTo : '#menu',
            models : [
                new yamvc.Model({
                    config : {
                        namespace : 'locale',
                        data : {
                            toggleNavigation : 'Toggle navigation'
                        }
                    }
                })
            ]
        }
    });

    menu.render();

});