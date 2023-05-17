// Check for feature support
var userAgent;
if (navigator.userAgentData && navigator.userAgentData.brands) {
  // Use navigator.userAgentData for modern browsers
  userAgent = navigator.userAgentData;
} else {
  // Fallback for older browsers
  userAgent = navigator.userAgent;
}




let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 51.497908265207755, lng: -0.17459382817652386 },
    zoom: 15,
    });

    // Lis of coordinates
    var coordinateList = "51.494432637102115, -0.1740111932682581,51.494590771079075, -0.1733182316133835,51.49792692640547, -0.1740222364876592,51.49794067615224, -0.1768051264959018";

    // Split the coordinate string into an array
    var coordinatesArray = coordinateList.split(",");

    var locations = []
    // Iterate through the coordinates and assign them to locations
    for (var i = 0; i < coordinatesArray.length; i += 2) {
      var x = parseFloat(coordinatesArray[i]);
      var y = parseFloat(coordinatesArray[i + 1]);
    
      // Update the value property of each location with the coordinates
      var location = {
        key: "",
        value: { x: x, y: y},
      };

      locations.push(location);
    }

    // Iterate through the list (key,coord)
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
            position: { lat: location.value.x, lng: location.value.y},
            map: map,
            icon: "./assets/bin_map_marker_green.png", // Path to your custom marker icon
            title : "./bins/bin" + i + ".html",
        });
        let website = marker.title;
        marker.addListener("click", () => {
          // window.open(website, "_blank");
          window.location.href = website;
        });
        var key = (location.street);
        marker.setMap(map);
    }
}

initMap();
