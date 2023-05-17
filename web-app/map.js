




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
        website: "https://youtube.com"
      };

      locations.push(location);
    }

    // Iterate through the list (key,coord)
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
            position: { lat: location.value.x, lng: location.value.y},
            map: map,
            icon: "./assets/bin_map_marker_green.png" // Path to your custom marker icon
        });
        var key = (location.street);
        marker.setMap(map);
        

    // Add a click event listener to each marker
        google.maps.event.addListener(marker, "click", function () {
            window.open(location.website, "_blank"); // Open the website in a new tab
            });

            marker.setMap(map);
    }
}

initMap();

// // 2. Create Markers
// var marker1 = new google.maps.Marker({
//     position: {lat: 51.497908265207755, lng: -0.17459382817652386}, // Example: Marker 1 coordinates
//     map: map,
//     icon: './assets/bin_map_marker.png' // Example: Custom icon for Marker 1
//   });
//   marker1.setMap(map);

// 51.495792154711886, -0.17424883509111036