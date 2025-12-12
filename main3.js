// document.addEventListener("DOMContentLoaded", function () {
//   var editBtn = document.querySelector("#editLogBtn");

//   if (editBtn) {
//     editBtn.addEventListener("click", function () {
//       window.location.href = "page2.html";
//     });
//   }

//   var backBtn = document.querySelector("#backBtnPage3");

//   if (backBtn) {
//     backBtn.addEventListener("click", function () {
//       window.location.href = "index.html";
//     });
//   }
// });

// This will hold our map on the view page
var viewMap = null;

document.addEventListener("DOMContentLoaded", function () {
  var editBtn = document.querySelector("#editLogBtn");
  var backBtn = document.querySelector("#backBtnPage3");

  // Navigation buttons
  if (editBtn) {
    editBtn.addEventListener("click", function () {
      window.location.href = "page2.html";
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  // Set up the map for view page
  var mapDiv = document.querySelector("#mapView");

  if (mapDiv) {
    // Create the map and show a world view first
    viewMap = L.map("mapView").setView([20, 0], 2);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(viewMap);
  }

  // Load one saved log and show its location
  // Get all logs from localStorage
  var logsJSON = localStorage.getItem("logs");
  if (!logsJSON) {
    return;
  }

  var logs;
  try {
    logs = JSON.parse(logsJSON);
  } catch (e) {
    logs = [];
  }

  if (!logs || logs.length === 0) {
    return;
  }

  // For now, just use the first log in the list.
  // Later, when we wire up ?index= in the URL,
  // we will pick the correct one based on that.
  var log = logs[0];

  // Check if the log has saved latitude and longitude
  if (
    viewMap &&
    log.latitude &&
    log.longitude &&
    log.latitude !== "" &&
    log.longitude !== ""
  ) {
    var lat = Number(log.latitude);
    var lng = Number(log.longitude);

    // Center the map on the saved location
    viewMap.setView([lat, lng], 13);

    // Add a marker at that location
    L.marker([lat, lng]).addTo(viewMap);
  }
});
