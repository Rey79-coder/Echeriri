myStorage = window.localStorage;

window.onscroll = function() {myHeader()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
}}


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


$(document).ready( function() {
  $('#result').hide();
  $('#return').hide();
 $('#submit').click( function() {
     $('#searchForm').hide();
     $('#return').fadeIn(1000);
     $('#result').fadeIn(1000);
 });
});


$(document).ready( function() {
  $('#return').click( function() {
      $('#result').hide();
      $('#searchForm').fadeIn(1000);
      $('#return').hide();
  });
});


var textbox = document.querySelector("#textbox");
var save = document.querySelector("#save");

save.addEventListener("click", function() {
  console.log(textbox.value)
  localStorage.setItem('textvalue', textbox.value)
});
textbox.value = localStorage.getItem('textvalue');


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