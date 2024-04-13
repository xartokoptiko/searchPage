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

// Call functions here !
