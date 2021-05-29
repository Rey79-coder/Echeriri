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

// CREATE AN ARRAY TO HOLD ALL OF THE NATURAL INGREDIENTS WE HAVE USED.
// ON CLICK, IT WILL DISPLAY ITS PROPERTIES INSIDE ITS DESIGNATED FIELD.


// ARRAY 'STRINGS' FOR INGREDIENTS. // THE FOLLOWING CREATES ELEMENT IN HTML.

// THIS VAR IS COMPOSED BY FOUR CONTAINERS.
var fruits, text, fLen, i;

// FRUITS CONTAINS FOUR FRUITS.
fruits = ["Almond", "Aloe Vera", "Beewax", "Coconut", "Essential", "Grapeseed", "Honey", "Jojoba", "Oatmeal", "Olive", "Vitamin E"];
console.log(fruits);

// HERE IS THE INDICATOR FOR WHAT ELEMENT WE ARE CREATING IN HTML.
text = "<ul>";

// THIS INDICATES LENGHT STATING FROM i[0].
fLen = fruits.length;


// THIS ITERATES THROUGH PREV ARRAY THE ELEMENT UL FOR EACH FRUIT.
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
document.getElementById("display-container").innerHTML = text;



////////// CAPTURE USER'S INPUT /////////

var input = "";
var submit = "";
var myBtn = document.querySelector("#myBtn");

var input, ccText, ccLen, i;

input = document.querySelector("#demo");
console.log(input + "This is user input");

if (input = fruits === true); {

ccText = "The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos. The term" +
"coconut (or the archaic 'cocoanut') can refer to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut." + 
"The name comes from the old Portuguese word coco, meaning 'head' or 'skull', after the three indentations on the coconut shell that resemble" + 
"facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics." +

"It is one of the most useful trees in the world and is often referred to as the 'tree of life'. It provides food, fuel, cosmetics," + 
"folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it,"
"form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm" + 
"contains a large quantity of clear liquid, called coconut water or coconut juice. Mature, ripe coconuts can be used as edible seeds, or processed" +
"for oil and plant milk from the flesh, charcoal from the hard shell, and coir from the fibrous husk. Dried coconut flesh is called copra,"
"and the oil and milk derived from it are commonly used in cooking – frying in particular – as well as in soaps and cosmetics.",
console.log(ccText);

ccText = "<p>";

ccLen = input.length;

// HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
i[3] = document.getElementById("disDes").innerHTML = ccText;

};

/*giphy search*/

function myFunction() {

  var searchTerm = document.querySelector('#searchTerm').value;
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchTerm +
      '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log('GIPHY RESPONSE', response);
     
      var responseContainerEl = document.querySelector('#response-container');

      
      responseContainerEl.innerHTML = '';

      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

      
      responseContainerEl.appendChild(gifImg);
    });
}

/*end of giphy*/



// for (i = 0; i < inLen; i++) {
//   inText += "<p>" + input[i] + "</p>";
// }

// // HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
// document.getElementById("disDes").innerHTML = inText + ccDesc;


// var ccDesc, ccText, ccLen, i;

// ccDesc = "The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos. The term" +
// "coconut (or the archaic 'cocoanut') can refer to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut." + 
// "The name comes from the old Portuguese word coco, meaning 'head' or 'skull', after the three indentations on the coconut shell that resemble" + 
// "facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics." +

// "It is one of the most useful trees in the world and is often referred to as the 'tree of life'. It provides food, fuel, cosmetics," + 
// "folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it,"
// "form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm" + 
// "contains a large quantity of clear liquid, called coconut water or coconut juice. Mature, ripe coconuts can be used as edible seeds, or processed" +
// "for oil and plant milk from the flesh, charcoal from the hard shell, and coir from the fibrous husk. Dried coconut flesh is called copra,"
// "and the oil and milk derived from it are commonly used in cooking – frying in particular – as well as in soaps and cosmetics.",

// ccText = "<p>"

// ccLen += ccDesc.length;

// document.addEventListener("click", "#myBtn") =
// // HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
// document.getElementById("disDes").innerHTML = ccDesc;

// ;



// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World!";
// });


// var ingredients = [
//   id coconut = "The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos.[1] The term 'coconut' (or the archaic 'cocoanut' can refer to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut. The name comes from the old Portuguese word coco, meaning 'head' or 'skull', after the three indentations on the coconut shell that resemble facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics. It is one of the most useful trees in the world and is often referred to as the 'tree of life'. It provides food, fuel, cosmetics, folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it, form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm contains a large quantity of clear liquid, called coconut water or coconut juice";
// ]


// var searchTerm = document.querySelector("#search-input");

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// var submitTerm = document.addEventListener("click", myBtn);

// let displayTerm = document.createElement('#display-container');
// console.log(displayTerm = 'Here is your Ingredient Properties')
// div.className = "search-result";
// div.innerHTML = searchTerm;

// document.body.append(displayTerm);

// document.getElementById("myBtn").addEventListener("click", displayTerm);





// API WIKIPEDIA / FECTH A LIBRARY

// CONTAINERS TO reference these DOM elements.
// var displayContainerEl = document.querySelector(".search-result");



// // 1ST FUNCTION REQUEST DATA FROM A API BY TYPING KEYWORD.
// function getArticleList() {

//   var searchFor = document.getElementById('js-search-input').value;
//   var response="";
//   console.log(searchFor);
//   $.ajax({
//      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchFor+"&limit=5",
//      dataType: 'jsonp',
//      success: function(data){    
//          console.log(data);
//          response=data;
//      }
//  }).done(function(response) {
//        console.log(response);
//        document.querySelector.artName.innerText = response.object[1];
//        document.querySelector.textArt.innerText = response.object[0];
//        document.querySelector.href = response.object[2];
//    });
//   }


// // CONTAINERS TO STORE A REFERENCE TO <FORM>.
// var userFormEl = document.querySelector("#search-input");
// var nameInputEl = document.querySelector("#search-input");

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





// // var getSearchTerm = function (input) {
// //   console.log(getSearchTerm);

// //   // format the github api url
// //   var apiUrl = "https://www.mediawiki.org/w/api.php?q=" + 
// //   inputSearchTerm + 
// //   "action=query&list=search&srsearch=meaning"
  

// //   // make a request to the url
// //   fetch(apiUrl)
// //   .then(function(response) {
// //     // request was successful
// //     if (response.ok) {
// //       response.json().then(function(data) {
// //         displayContainerEl(data, input);
// //       });
// //     } else {
// //       alert('Error:Found');
// //     }
// //   })
// // }
// // console.log(getUserInput);

// // NOTICE this `.catch()` That's the Fetch API's way of handling network errors.
//   // .catch(function(error) {
//   //   alert("Unable to connect");
// //   // });

// // getSearchTerm();


// //  CONTAINERS TO STORE A REFERENCE TO <FORM>.

// // var userFormEl = document.querySelector("#user-form");
// // var nameInputEl = document.querySelector("#username");

// // // 2ND. FUNCTION to be executed upon a form submission browser event.
// // var formSubmitHandler = function (event) {
// //   event.preventDefault(); //It stops the browser from performing the default action the event wants it to do. 

// //   // GET VALUE FROM INPUT FORM.
// //   var userinput = nameInputEl.value.trim(); // TRIM METHOD = this piece is useful if we accidentally leave a leading or trailing space in the <input> element.

// //   if (userinput) {
// //     getUserInput(userinput);
// //     nameInputEl.value = "";
// //   } else {
// //     alert("Please enter a GitHub username");
// //   }

// //   console.log(event);

// // };

// // userFormEl.addEventListener("#submit", formSubmitHandler);


// // // 3RD FUNCTION to Display Ingredients (W/2 PARAMETERES ACCEPT IN ARRAY AND ING DATA).
// // var displayInfo = function (title, searchTerm) {
// //   console.log(title);
// //   console.log(searchTerm);

// // // CHECK IF API RETURNED ANY REPO.
// // if (title.length === 0) {
// //   displayContainerEl.textContent = "No title found.";
// //   return;
// // }

// // }



// /////   FUNCTIONAL CODE TO REVIEW 

// // // CONTAINERS TO eference these DOM elements.
// // var repoContainerEl = document.querySelector("#repos-container");
// // var repoSearchTerm = document.querySelector("#repo-search-term");


// // // 1ST FUNCTION REQUEST DATA FROM A API.
// // var getUserRepos = function (user) {
// //   // format the github api url
// //   var apiUrl = "https://api.github.com/users/" + user + "/repos";

// //   // make a request to the url
// //   fetch(apiUrl)
// //   .then(function(response) {
// //     // request was successful
// //     if (response.ok) {
// //       response.json().then(function(data) {
// //         displayRepos(data, user);
// //       });
// //     } else {
// //       alert('Error: GitHub User Not Found');
// //     }
// //   })

// // // NOTICE this `.catch()` That's the Fetch API's way of handling network errors.
// //   .catch(function(error) {
// //     alert("Unable to connect to GitHub");
// //   });

// // };

// // getUserRepos();

// // // CONTAINERS TO STORE A REFERENCE TO <FORM>.
// // var userFormEl = document.querySelector("#user-form");
// // var nameInputEl = document.querySelector("#username");

// // // 2ND. FUNCTION to be executed upon a form submission browser event.
// // var formSubmitHandler = function (event) {
// //   event.preventDefault(); //It stops the browser from performing the default action the event wants it to do. 

// //   // GET VALUE FROM INPUT FORM.
// //   var username = nameInputEl.value.trim(); // TRIM METHOD = this piece is useful if we accidentally leave a leading or trailing space in the <input> element.

// //   if (username) {
// //     getUserRepos(username);
// //     nameInputEl.value = "";
// //   } else {
// //     alert("Please enter a GitHub username");
// //   }

// //   console.log(event);

// // };

// // userFormEl.addEventListener("submit", formSubmitHandler);


// // // 3RD FUNCTION to Display Repos. (W/2 PARAMETERES ACCEPTIN ARRAY AND REPO DATA).
// // var displayRepos = function (repos, searchTerm) {
// //   console.log(repos);
// //   console.log(searchTerm);

// // // CHECK IF API RETURNED ANY REPO.
// // if (repos.length === 0) {
// //   repoContainerEl.textContent = "No repositories found.";
// //   return;
// // }


// //   // ALWAYS BE SURE to CLEAR OUT the old content before displaying new content.
// //   repoContainerEl.textContent = "";
// //   repoSearchTerm.textContent = searchTerm;

// //   // loop over repos
// //   for (var i = 0; i < repos.length; i++) {

// //     // format repo name
// //     var repoName = repos[i].owner.login + "/" + repos[i].name;

// //     // create a container for each repo
// //     var repoEl = document.createElement("a");
// //     repoEl.classList = "list-item flex-row justify-space-between align-center";
    
// //     // add an expression to create a new href attribute
// //     repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
    
// //     // create a span element to hold repository name
// //     var titleEl = document.createElement("span");
// //     titleEl.textContent = repoName;

// //     // append to container
// //     repoEl.appendChild(titleEl);


// //     // create a status element
// //     var statusEl = document.createElement("span");
// //     statusEl.classList = "flex-row align-center";

// //     // CHECK IF current repo HAS ISSUES or not.
// //     if (repos[i].open_issues_count > 0) {
// //       statusEl.innerHTML =
// //         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
// //     } else {
// //       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
// //     }

// //     // append to container
// //     repoEl.appendChild(statusEl);


// //     // append container to the dom
// //     repoContainerEl.appendChild(repoEl);
// //   }
// // };

// }
