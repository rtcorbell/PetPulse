function updateMap() {
    const zipCodeInput = document.getElementById('zipCodeInput').value;
    const mapIframe = document.getElementById('mapIframe');
    const apiKey = 'AIzaSyDbaehiC-tg6Vm20y5hON6S2mTHLXxje7Q';

   // Use the Geocoding API to obtain the coordinates for the entered zip code
   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCodeInput}&key=${apiKey}`)
   .then(response => response.json())
   .then(data => {
       if (data.results.length > 0) {
           const location = data.results[0].geometry.location;
           const lat = location.lat;
           const lng = location.lng;

                // Construct the new map URL with the user's zip code
                const newMapUrl = `https://www.google.com/maps/embed/v1/search?q=pet%20sitting%20near+${zipCodeInput}&key=${apiKey}&center=${lat},${lng}&zoom=11`;

                 // Update the iframe's src attribute with the new map URL
                 const mapIframe = document.getElementById('mapIframe');
                 mapIframe.src = newMapUrl;
             } else {
                 alert('Invalid zip code or no results found.');
             }
         })
         .catch(error => {
             console.error(error);
         });
 }