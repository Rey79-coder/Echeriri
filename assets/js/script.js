// STICKY HEADER / When the user scrolls the page, execute myFunction
window.onscroll = function() {myHeader()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
}}


////////////////////////////////////////////



// API WIKIPEDIA / FECTH A LIBRARY

// CONTAINERS TO reference these DOM elements.
var displayContainerEl = document.querySelector(".search-result");
var inputSearchTerm = document.querySelector(".js-search-input");


// 1ST FUNCTION REQUEST DATA FROM A API.
var getSearchTerm = function (input) {
  console.log(getSearchTerm);

  // format the github api url
  var apiUrl = "https://www.mediawiki.org/w/api.php?" + 
  inputSearchTerm + 
  "action=query&list=search&srsearch=meaning"
  

  // make a request to the url
  fetch(apiUrl)
  .then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        displayContainerEl(data, user);
      });
    } else {
      alert('Error:Found');
    }
  })
}
// console.log(getUserInput);

// NOTICE this `.catch()` That's the Fetch API's way of handling network errors.
  .catch(function(error) {
    alert("Unable to connect");
  });

getUserInput();


//  CONTAINERS TO STORE A REFERENCE TO <FORM>.

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// 2ND. FUNCTION to be executed upon a form submission browser event.
var formSubmitHandler = function (event) {
  event.preventDefault(); //It stops the browser from performing the default action the event wants it to do. 

  // GET VALUE FROM INPUT FORM.
  var userinput = nameInputEl.value.trim(); // TRIM METHOD = this piece is useful if we accidentally leave a leading or trailing space in the <input> element.

  if (userinput) {
    getUserInput(userinput);
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username");
  }

  console.log(event);

};

userFormEl.addEventListener("#submit", formSubmitHandler);


// 3RD FUNCTION to Display Ingredients (W/2 PARAMETERES ACCEPT IN ARRAY AND ING DATA).
var displayInfo = function (title, searchTerm) {
  console.log(title);
  console.log(searchTerm);

// CHECK IF API RETURNED ANY REPO.
if (title.length === 0) {
  displayContainerEl.textContent = "No title found.";
  return;
}

}



/////   FUNCTIONAL CODE TO REVIEW 

// // CONTAINERS TO eference these DOM elements.
// var repoContainerEl = document.querySelector("#repos-container");
// var repoSearchTerm = document.querySelector("#repo-search-term");


// // 1ST FUNCTION REQUEST DATA FROM A API.
// var getUserRepos = function (user) {
//   // format the github api url
//   var apiUrl = "https://api.github.com/users/" + user + "/repos";

//   // make a request to the url
//   fetch(apiUrl)
//   .then(function(response) {
//     // request was successful
//     if (response.ok) {
//       response.json().then(function(data) {
//         displayRepos(data, user);
//       });
//     } else {
//       alert('Error: GitHub User Not Found');
//     }
//   })

// // NOTICE this `.catch()` That's the Fetch API's way of handling network errors.
//   .catch(function(error) {
//     alert("Unable to connect to GitHub");
//   });

// };

// getUserRepos();

// // CONTAINERS TO STORE A REFERENCE TO <FORM>.
// var userFormEl = document.querySelector("#user-form");
// var nameInputEl = document.querySelector("#username");

// // 2ND. FUNCTION to be executed upon a form submission browser event.
// var formSubmitHandler = function (event) {
//   event.preventDefault(); //It stops the browser from performing the default action the event wants it to do. 

//   // GET VALUE FROM INPUT FORM.
//   var username = nameInputEl.value.trim(); // TRIM METHOD = this piece is useful if we accidentally leave a leading or trailing space in the <input> element.

//   if (username) {
//     getUserRepos(username);
//     nameInputEl.value = "";
//   } else {
//     alert("Please enter a GitHub username");
//   }

//   console.log(event);

// };

// userFormEl.addEventListener("submit", formSubmitHandler);


// // 3RD FUNCTION to Display Repos. (W/2 PARAMETERES ACCEPTIN ARRAY AND REPO DATA).
// var displayRepos = function (repos, searchTerm) {
//   console.log(repos);
//   console.log(searchTerm);

// // CHECK IF API RETURNED ANY REPO.
// if (repos.length === 0) {
//   repoContainerEl.textContent = "No repositories found.";
//   return;
// }


//   // ALWAYS BE SURE to CLEAR OUT the old content before displaying new content.
//   repoContainerEl.textContent = "";
//   repoSearchTerm.textContent = searchTerm;

//   // loop over repos
//   for (var i = 0; i < repos.length; i++) {

//     // format repo name
//     var repoName = repos[i].owner.login + "/" + repos[i].name;

//     // create a container for each repo
//     var repoEl = document.createElement("a");
//     repoEl.classList = "list-item flex-row justify-space-between align-center";
    
//     // add an expression to create a new href attribute
//     repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
    
//     // create a span element to hold repository name
//     var titleEl = document.createElement("span");
//     titleEl.textContent = repoName;

//     // append to container
//     repoEl.appendChild(titleEl);


//     // create a status element
//     var statusEl = document.createElement("span");
//     statusEl.classList = "flex-row align-center";

//     // CHECK IF current repo HAS ISSUES or not.
//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     // append to container
//     repoEl.appendChild(statusEl);


//     // append container to the dom
//     repoContainerEl.appendChild(repoEl);
//   }
// };


