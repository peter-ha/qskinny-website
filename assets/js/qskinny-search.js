var posts = [];

$(document).on("keyup", function (e) {
    if (e.keyCode === 83) { //'s' key
        var $inputField = $("#search-field");
        if(!$inputField.is(":focus")) {
            e.preventDefault();
            $inputField.focus();
        }
    }
});

$("body").on("focus", "[data-action]", function (e) {

    e.preventDefault();

    var $this = $(this);
    var action = $this.data('action');
    var target = $this.data('target');

    if (action === 'search-open') {
        var $inputField = $("#search-field");
        search($inputField.val()); // to handle cases where the search field isn't empty, i.e, the user searched for something earlier

        $inputField.keyup(function(e) {
            e.preventDefault();
            search($inputField.val());
        });
    }
});

function search(searchStr) {
    fetchSearchResults(searchCallback(searchStr));
}

function searchCallback(searchStr) {
    return function () {
        var options = { 		// initialize options for fuse.js
            isCaseSensitive: false,
//            shouldSort: true,
            threshold: 0.2,
//            location: 0,
//            distance: 100,
//            maxPatternLength: 32,
//            minMatchCharLength: 1,
            keys: [ "title" ]
        };

        // initialize fuse.js library
        var fuse = new Fuse(posts, options);
        var results = fuse.search(searchStr); // invoke search method in fuse.js library
        var sortedResults = []
        results.forEach(function (res) {
            sortedResults.push(res.item.title);
        });
        sortedResults = sortedResults.sort();
        updateResults(sortedResults);
    }
}

function updateResults(results) {
    var resultsHtml = '';

    results.forEach(function (res) {
        resultsHtml += '<h6>' +
            '<a href="../class' + res + '">' +
            res +
            '</a>' +
            '</h6>';
    });

    var visibility;
    var $inputField = $("#search-field");
    if(results.length > 0) {
        visibility = "visible";
    } else {
        visibility = "hidden";
    }

    // insert the result html into the page
    $('.search-results').html(resultsHtml);
    $('.search-results').css({"visibility": visibility});
}

function fetchSearchResults(callback) {
    if (posts.length === 0) {
        // fetch site.json file
        $.get("../../class-index.json", function (data) {
            posts = data;
            callback();
        });
    } else { // we already have the posts so simply use it instead of downloading the file again
        callback();
    }
}
