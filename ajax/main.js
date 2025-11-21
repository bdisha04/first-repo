setTimeout(() => {
            document.getElementById('loader').style.display="none"
            document.getElementById('content').style.display="block"
        }, 2000);

        function str(val) {
            $.ajax({
                type: "GET",
                url: "index.html",
                data: "comp=" + val,
                success: function (data) {
                    $("#index").html(data);
                }

            })
        }