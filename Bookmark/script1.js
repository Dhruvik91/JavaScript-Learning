

// Get the modal and button elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// Event listener to open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Event listener to close the modal
span.onclick = function () {
  modal.style.display = "none";
};



// Function to add a new bookmark
function addLink() {
  const webname = document.getElementById("fname").value.trim();
  const webURL = document.getElementById("URL").value.trim();

  if (!webname || !webURL) {
    alert("Please enter both Website Name and URL.");
    return;
  }

  const websites = getStoredWebsites();
  websites.push({ name: webname, url: webURL });
  localStorage.setItem("bookmarks", JSON.stringify(websites));

  modal.style.display = "none";
  document.getElementById("fname").value = "";
  document.getElementById("URL").value = "";

  show_data();
}

// Function to show bookmarks
function show_data() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const get_bookmarks = getStoredWebsites();
  if (get_bookmarks.length === 0) {
    return;
  }

  for (const bookmark of get_bookmarks) {
    dynamic_div(bookmark.name, bookmark.url);
  }
}


// Function to create dynamic div for each bookmark
function dynamic_div(webname, webURL) {
  const newDiv = document.createElement("div");
  const divId = "bookmark_" + Math.random()// Create a unique ID for the div
  newDiv.setAttribute("id", divId);
  newDiv.setAttribute("class", "bookmark");

  const newLink = document.createElement("a");
  newLink.href = webURL;
  newLink.textContent = webname;
  newDiv.appendChild(newLink);

  const closeDiv = document.createElement("span");
  closeDiv.setAttribute("class", "close1");
  closeDiv.innerHTML = "&times;";
  newDiv.appendChild(closeDiv);

  const container = document.getElementById("container");
  container.appendChild(newDiv);

  console.log("hell", divId);
  // Event listener to remove the bookmark
  closeDiv.onclick = function () {
    
    removeBookmark(divId);
  };
}

// Function to remove the bookmark div and update localStorage
function removeBookmark(bookmarkDivId) {
  const bookmarkDiv = document.getElementById(bookmarkDivId);
  if (bookmarkDiv) {
    // Remove the bookmark from storage based on the URL
    const websites = getStoredWebsites();
    const webURL = bookmarkDiv.querySelector("a").href;

    // Find the index of the bookmark with the matching URL
    const bookmarkIndex = websites.filter((bookmark) => bookmark.url !== webURL);
    console.log("hello", bookmarkIndex);
    if (bookmarkIndex !== -1) {
      // If the bookmark with the URL is found, remove it from the array
      websites.splice(bookmarkIndex, 1);
      
      // Update the localStorage with the modified array
      localStorage.setItem("bookmarks", JSON.stringify(websites));
    }
    // Hide the clicked div
    bookmarkDiv.classList.add("hidden");
  }
}

// Add event listener to the document to handle close button clicks efficiently
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("close1")) {
    const bookmarkDiv = target.closest(".bookmark");
    if (bookmarkDiv) {
      const bookmarkDivId = bookmarkDiv.id;
      removeBookmark(bookmarkDivId);
    }
  }
});



// Show bookmarks on page load
window.onload = function () {
  show_data();
};

//localStorage.clear();







// Function to get stored bookmarks
function getStoredWebsites() {
  const storedWebsites = localStorage.getItem("bookmarks");
  return storedWebsites ? JSON.parse(storedWebsites) : [];
}


// Show bookmarks on page load
window.onload = function () {
  show_data(); }