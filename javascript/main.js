/*
 * @author Lampros Karachristos
 */

// initialize functions here !

function searchGoogle() {
  var searchTerm = document.getElementById("searchInput").value;
  var googleUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
  window.open(googleUrl, "_blank");
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchGoogle();
  }
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const timeString = `${hours}:${minutes} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
}

// Call functions here !
setInterval(updateClock, 60000);
updateClock();
