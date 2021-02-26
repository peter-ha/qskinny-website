$(document).on("keyup", function (e) {
    if (e.keyCode === 83) { //'s' key
        var $inputField = $("#search-field");
        if(!$inputField.is(":focus")) {
            e.preventDefault();
            $inputField.focus();
        }
    }
});

$(document).ready(function() {
    console.log("ready");
    $("#search-field").select2({
        placeholder: "Search for classes...",
        ajax: {
            url: '../../class-index.json',
            dataType: 'json',
            processResults: function (data) {
                return {
                    results: data
                };
            }
        }
      });
});
