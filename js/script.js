// Language selector

$(function(){
    $('.selectpicker').selectpicker();
});




// Login modal 

$(document).ready(function() {             $('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});


// Smoth scrolling jquery
$('.nav-link').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});





//  Google maps costum marker

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 15,
    center: { lat: -33.88049974067019, lng: 151.1110705019645 },
  });
  setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Bondi Beach", -33.87769874926457, 151.08968243212476, 4],
  ["Coogee Beach", -33.89125472625403, 151.1179851011659, 5],
  ["Cronulla Beach", -33.88029966883124, 151.13244757232903, 3],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: "./images/icons/marker.png",
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}