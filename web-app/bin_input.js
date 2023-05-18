// function getPosition() {
//     navigator.geolocation.getCurrentPosition(
//         position => {
//             const lat = position.coords.latitude;
//             const long = position.coords.latitude;
//         }
//     )
//     return {"x":lat, "y":long}
// }


// document.getElementById("getLocationButton").addEventListener("click", function() {
//     const lat = getPosition("x"); // Replace with the latitude value
//     const long = getPosition("y") // Replace with the longitude value
  
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "location_request.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         console.log("Data stored successfully");
//       }
//     };
//     xhr.send("lat=" + lat + "&long=" + long);
//   });

  function getPosition(callback) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        callback({ "x": lat, "y": long });
      },
      error => {
        console.error("Error retrieving position:", error);
        callback(null);
      }
    );
  }
  
  document.getElementById("getLocationButton").addEventListener("click", function() {
    getPosition(position => {
      if (position) {
        const lat = position.x;
        const long = position.y;
        console.log(lat);
        console.log(long)
  
        const xhr = new XMLHttpRequest();
<<<<<<< HEAD
        xhr.open("POST", "location-request.php", true);
=======
        xhr.open("POST", "location_request.php", true);
>>>>>>> 273281493ad8f71792a91d500e840251b23ccc25
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              // Successful response from the server
              const response = xhr.responseText;
              console.log("Response from server:", response);
              // Perform additional actions based on the response
            } else {
              // Error or unsuccessful response from the server
              console.error("Error: Request failed with status", xhr.status);
              // Handle the error condition appropriately
            }
          }
        };
        xhr.send("lat=" + lat + "&long=" + long);
      }
    });
  });
