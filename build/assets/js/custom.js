var FIproject = {};
var winWidth = $(window).width();

function change_theme() {
    $(".comp-theme-selector .item").click(function() {
        var selectedTheme = $(this).data("theme");
        var themeClasses = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
        var $body = $('body');
        $.each(themeClasses, function(i, v) {
            $body.removeClass(v);
        });
        localStorage.setItem("theme", selectedTheme); //setting theme to local storage
        $("body").addClass(selectedTheme);
    })
}

$(function() {
    change_theme();
    var theme = localStorage.getItem('theme'); //getting back theme from localstorage  
    $("body").addClass(theme); //adding class to body tag

});