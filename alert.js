$(function () {
    div = $('<div></div>');
    div.css('background-color', '#f2dede');
    div.css('width', '480px');
    div.css('position', 'fixed');
    div.css('left', '0px');
    div.css('right', '0px');
    div.css('margin-left', 'auto');
    div.css('margin-right', 'auto');
    div.css('top', '30px');
    div.css('z-index', '10000');
    div.css('padding-bottom', '14px');
    div.css('padding-top', '14px');
    div.css('border-color', '#eed3d7');
    div.css('color', '#b94a48');
    div.css('border-radius', '4px')
    div.css('border-width', '2px');
    div.css('border-style', 'solid');
    div.css('margin-bottom', '20px');
    div.css('text-shadow', '0 1px 0 rgba(255, 255, 255, 0.5)');
    div.css('text-align', 'right');


    var btn = $('<button>×</button>');
    btn.css('line-height', '20px');
    btn.css('position', 'relative');
    btn.css('right', '15px');
    btn.css('top', '-10px');
    btn.css('background', 'none repeat scroll 0 0 transparent');
    btn.css('border', '0 none');
    btn.css('cursor', 'pointer');
    btn.css('padding', '0');
    btn.css('color', '#000');
    btn.css('float', 'right');
    btn.css('font-size', '20px');
    btn.css('font-weight', 'bold');
    btn.css('line-height', '20px');
    btn.css('opacity', '0.2');
    btn.css('text-shadow', '0 1px 0 #fff');


    var span = $('<span><p align="center" id="alert_content"></p></span>');

    div.append(btn);
    div.append(span);
    div.hide();

    $("body").append(div);

    window.alert = function (msg, fn) {
        $("#alert_content").text(msg);

        var display = true;
        var hide = function () {
            if (display) {
                div.fadeOut('slow', function () {
                    display = false;
                    if (fn) {
                        fn();
                    }
                });
            }
        }
        btn.one('click', hide);
        div.fadeIn('slow', function () {
            setTimeout(hide, 2000);
        });

    }
})


