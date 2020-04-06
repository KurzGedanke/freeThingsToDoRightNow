$(document).ready(function () {
    var converter = new showdown.Converter({tables: true});
    $.ajax({
            url: "https://raw.githubusercontent.com/KurzGedanke/freeThingsToDoRightNow/master/thingstodo.md",
            cache: false
        })
        .done(function (markdown) {
            $(".markdownHTML").append(converter.makeHtml(markdown));
        });
});