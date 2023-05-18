
<?php
// Retrieve the latitude and longitude from the POST request
$lat = $_POST['lat'];
$long = $_POST['long'];

// Create an array with the coordinates
$data = array('x' => $lat, 'y' => $long);

// Convert the data to JSON string
$jsonData = json_encode($data);

// Write the JSON string to the file
$file = 'userdata.txt';
file_put_contents($file, $jsonData);

// Send a response back to the JavaScript code
echo "Data stored successfully";
?>