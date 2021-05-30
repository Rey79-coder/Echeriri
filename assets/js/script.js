myStorage = window.localStorage;

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

//////// WIKIPEDIA SEARCH Function  //////////

// API WIKIPEDIA / FECTH A LIBRARY

$(document).ready( function() {
    
  $('#searchForm').on('submit', function(e) {
      $('#result').empty();
      e.preventDefault();
      var search = $('#searchQuery').val();
      $.ajax({
       url:    "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&prop=info&inprop=url&utf8=&format=json",
       dataType: "jsonp",
       success: function(data){
          if(data.query.searchinfo.totalhits !== 0) {
              var title = [];
              var desc = [];
              for(var i = 0; i < data.continue.sroffset ; i++) {
                 title.push(data.query.search[i].title);
                 desc.push(data.query.search[i].snippet);
                 var wiki = '<div class="column is-full" id="box"><div class="column is-full box-title"><a href="https://en.wikipedia.org/wiki/'+title[i]+'" target = "_blank">'+ title[i] + '</a></div><div class="column is-full box-description">'+ desc[i] +'...</div></div>';
                 $('#result').append(wiki);
             }
          }
       }
   });
  });
});

//  FUNCTION TO HIDE RETURN BUTTON //

$(document).ready( function() {
  $('#result').hide();
  $('#return').hide();
 $('#submit').click( function() {
     $('#searchForm').hide();
     $('#return').fadeIn(1000);
     $('#result').fadeIn(1000);
 });
});

// FUNCTION TO RESET SEARCH FUNCTION //

$(document).ready( function() {
  $('#return').click( function() {
      $('#result').hide();
      $('#searchForm').fadeIn(1000);
      $('#return').hide();
  });
});


// CREATE AN ARRAY TO HOLD ALL OF THE NATURAL INGREDIENTS WE HAVE USED.
// ON CLICK, IT WILL DISPLAY ITS PROPERTIES INSIDE ITS DESIGNATED FIELD.


// ARRAY 'STRINGS' FOR INGREDIENTS. // THE FOLLOWING CREATES ELEMENT IN HTML.

// THIS VAR IS COMPOSED BY FOUR CONTAINERS.
// var fruits, text, fLen, i;

// FRUITS CONTAINS FOUR FRUITS.
// fruits = ["Almond", "Aloe Vera", "Beewax", "Coconut", "Essential", "Grapeseed", "Honey", "Jojoba", "Oatmeal", "Olive", "Vitamin E"];
// console.log(fruits);

// // HERE IS THE INDICATOR FOR WHAT ELEMENT WE ARE CREATING IN HTML.
// text = "<ul>";

// // THIS INDICATES LENGHT STATING FROM i[0].
// fLen = fruits.length;


// // THIS ITERATES THROUGH PREV ARRAY THE ELEMENT UL FOR EACH FRUIT.
// for (i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// // HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
// document.getElementById("display-container").innerHTML = text;


//////////////// CHAD GIPHY SECTION ////////////////


/* NOTEPAD */

var textbox = document.querySelector("#textbox");
var save = document.querySelector("#save");

save.addEventListener("click", function() {
  console.log(textbox.value)
  localStorage.setItem('textvalue', textbox.value)
});
textbox.value = localStorage.getItem('textvalue');

/* GIPHY SEARCH FUNCTION*/

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


////////// CAPTURE USER'S INPUT /////////

// var input = "";
// var submit = "";
// var myBtn = document.querySelector("#myBtn");

// var input, ccText, ccLen, i;

// input = document.querySelector("#demo");
// //console.log(input + "This is user input");

// if (input = fruits === true); {

// var input = "";
// var submit = "";
// var myBtn = document.querySelector("#myBtn");

// var input, ccText, ccLen, i;

// var input = "";
// var submit = "";
// var myBtn = document.querySelector("#myBtn");

// var input, ccText, ccLen, i;

// input = document.querySelector("#demo");
// //console.log(input + "This is user input");

// if (input = fruits === true); {

// ccText = "The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos. The term" +
// "coconut (or the archaic 'cocoanut') can refer to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut." + 
// "The name comes from the old Portuguese word coco, meaning 'head' or 'skull', after the three indentations on the coconut shell that resemble" + 
// "facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics." +

// "It is one of the most useful trees in the world and is often referred to as the 'tree of life'. It provides food, fuel, cosmetics," + 
// "folk medicine and building materials, among many other uses. The inner flesh of the mature seed, as well as the coconut milk extracted from it,"
// "form a regular part of the diets of many people in the tropics and subtropics. Coconuts are distinct from other fruits because their endosperm" + 
// "contains a large quantity of clear liquid, called coconut water or coconut juice. Mature, ripe coconuts can be used as edible seeds, or processed" +
// "for oil and plant milk from the flesh, charcoal from the hard shell, and coir from the fibrous husk. Dried coconut flesh is called copra,"
// "and the oil and milk derived from it are commonly used in cooking – frying in particular – as well as in soaps and cosmetics.",
// //console.log(ccText);

// ccText = "<p>";

// ccLen = input.length;

// HERE WE TELL THEM WHERE WE WANT TO BE DISPLAYED.
//i[3] = document.getElementById("disDes").innerHTML = ccText;

// };












