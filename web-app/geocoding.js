
//USED TO CONVERT COORDINATES INTO STREET NAME.

function reverseGeocode(lat, lng) {
  const  Map  = new  google.maps.importLibrary("maps");
  const  geocoder  = new google.maps.Geocoder();
  return new Promise(function (resolve, reject) {
    geocoder.geocode({ location: { lat: lat, lng: lng } }, function (
      results,
      status
    ) {
      if (status === "OK" && results.length > 0) {
        var streetName = results[0].formatted_address;
        resolve(streetName);
      } else {
        reject("");
      }
    });
  });
}