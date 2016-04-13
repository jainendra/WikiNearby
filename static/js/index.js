// Send an AJAX request
var queryData = function () {
    $('.activityIndicator').fadeIn(200);
    dataLoaded = false;
    var url = window.location.href;
    var urlArr = url.split("/");
    var mapSelector = $('#map');
    var urlResult = urlArr[0] + "//" + urlArr[2] + "/" + "markers/?map_width=" + mapSelector.width() +
        "&map_height=" + mapSelector.height();
    // console.log(urlResult);
    $.ajax({
        url: urlResult, success: function (queryResponse) {
            // console.log(queryResponse);
            dataLoaded = true;
            if (mapLoaded && dataLoaded) {
                $('.activityIndicator').fadeOut(200);
            }
            // Very basic validity check
            if (typeof queryResponse != 'undefined' && typeof queryResponse.pins != 'undefined') {
                setNewMarkers(queryResponse);
            }
        }
    });
};

// Filter modal configuration
$('#filterModalTrigger').leanModal({
        dismissible: true,
        opacity: .5,
        in_duration: 300,
    out_duration: 200,
        // ready: function() { alert('Ready'); },
    complete: queryData
    }
);

$('#filterTabsArea').click();

// Enforce sane behaviour on date range
fromDateSelector = $('#fromDatePicker');
toDateSelector = $('#toDatePicker');

var fromDatePicker = fromDateSelector.pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: true // Creates a dropdown of 15 years to control year
}).pickadate('picker');

var toDatePicker = toDateSelector.pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: true // Creates a dropdown of 15 years to control year
}).pickadate('picker');

fromDateSelector.on('change', function () {
    var dateToSet = fromDatePicker.get();
    toDatePicker.set('min', dateToSet);
});

toDateSelector.on('change', function () {
    var dateToSet = toDatePicker.get();
    fromDatePicker.set('max', dateToSet);
});

// Function "userGeolocation()" and "map" is declared and initialized in
// map.js
$('#myLocationButton').click(userGeolocation);

// iOS specific jQuery
var hideSoftKeyboard = function() {
    document.activeElement.blur();
    $("input").blur();
};

// Remove the below code when ready for production!
var sideNavState = true;
var doubleToggleSideNav = function () {
    if (sideNavState) {
        $('.button-collapse').sideNav('hide');
        sideNavState = false;
    } else {
        $('.button-collapse').sideNav('show');
        sideNavState = true;
    }
};
$('#mainBranding').click(doubleToggleSideNav);

$('#map').click(hideSoftKeyboard);
$(".button-collapse").sideNav();

$('select').material_select();

// Show overlay menu
// $('.button-collapse').sideNav('show');

// Hide overlay menu
// $('.button-collapse').sideNav('hide');
