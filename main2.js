const openIndex = () => {
  console.log("BUTTON");
  window.location.href = "./index.html";
};
document.querySelector(".save-entry-btn").addEventListener("click", openIndex);

const submitImg = () => {
  console.log("IMG");
};
document.querySelector(".add-banner-btn").addEventListener("click", submitImg);

// testing map usage, trying to figure how to make a map appear with APIs
// i searched this entire part up, especially the location coordinates part

// Photo upload functionality
const photoInput = document.querySelector("#photoInput");
const addPhotosBtn = document.querySelector("#addPhotosBtn");
const photoDisplay = document.querySelector("#photoDisplay");

addPhotosBtn.addEventListener("click", () => {
  photoInput.click();
});

photoInput.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);
  files.forEach((file) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    const wrapper = document.createElement("div");
    wrapper.appendChild(img);
    photoDisplay.appendChild(wrapper);
  });
});

// Location lookup
const getLocBtn = document.querySelector("#getLocationBtn");
const locStatus = document.querySelector("#locationStatus");
const locDisplay = document.querySelector("#locationDisplay");

getLocBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    locStatus.textContent = "Geolocation not supported";
    return;}
  

  locStatus.textContent = "Requesting location...";

//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const lat = position.coords.latitude;
//       const lng = position.coords.longitude;
//       locStatus.textContent = "Location found";
//       locDisplay.innerHTML =
//         "Latitude: " + lat.toFixed(6) + "<br>Longitude: " + lng.toFixed(6);
//     },
//     () => {
//       locStatus.textContent = "Unable to retrieve location";
//     }
//   );
});

// maps-integration

  var travelMap = null;

  document.addEventListener("DOMContentLoaded", function () {
  var mapDiv = document.querySelector("#map");

  if (mapDiv) {
    travelMap = L.map("map").setView([20, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(travelMap);
  }
  });

// Location lookup + connect to the map
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and text areas
  const getLocBtn = document.querySelector("#getLocationBtn");
  const locStatus = document.querySelector("#locationStatus");
  const locDisplay = document.querySelector("#locationDisplay");

  // If there is no button on this page, stop
  if (!getLocBtn) {
    return;
  }

  // When user clicks "Search My Location"
  getLocBtn.addEventListener("click", function () {
    // Check if browser supports geolocation
    if (!navigator.geolocation) {
      locStatus.textContent = "Geolocation not supported";
      return;
    }

    // Let the user know we are trying
    locStatus.textContent = "Requesting location...";

    // Ask for the current position
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Get latitude and longitude
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Show them as text
        locStatus.textContent = "Location found";
        locDisplay.innerHTML =
          "Latitude: " + lat.toFixed(6) + "<br>Longitude: " + lng.toFixed(6);

        // 🔽 Update the map if it exists
        if (travelMap) {
          // Center the map on the user's location and zoom in
          travelMap.setView([lat, lng], 13);

          // Add a marker at the user's location
          L.marker([lat, lng]).addTo(travelMap);
        }
      },
      function () {
        // If something goes wrong (permission denied, etc.)
        locStatus.textContent = "Unable to retrieve location";
      }
    );
  });
});
