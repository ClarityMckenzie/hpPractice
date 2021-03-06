// hide-reveal section header functionality

$(document).ready();

$('#intro').hide();

$('#exp-placeholder').hide();

$('#ram-1').hide();

$("#introductions").click(function() {
  $('#intro').slideToggle('fast');
});

$("#experiments").click(function() {
  $('#exp-placeholder').slideToggle('fast');
});

$("#ramblings").click(function() {
  $('#ram-1').slideToggle('fast');
});


// Initialize Firebase

var config = {
  apiKey: "AIzaSyB3vZhU2rsZBiU46EK6TmxzcLh8NswxGaY",
  authDomain: "hakp-ef752.firebaseapp.com",
  databaseURL: "https://hakp-ef752.firebaseio.com",
  projectId: "hakp-ef752",
  storageBucket: "hakp-ef752.appspot.com",
  messagingSenderId: "720860637676"
};

firebase.initializeApp(config);

// Reference message collection

var messagesRef = firebase.database().ref('messages');

//listen for submit
document.getElementById('comment-form').addEventListener('submit', submitForm);

// submit form

function submitForm (e) {
  e.preventDefault();

//get values
var message = getInputVal('message');


saveMessage(message);
document.getElementById('comment-form').reset();

  }
// function to get message values
function getInputVal(id){
return document.getElementById(id).value;
}
// save messages

function saveMessage(message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    message: message,
  });
}


    // Udon Slideshow

    var udonIndex = 1;
    showUdons(udonIndex);

    function plusUdons(n) {
      showUdons(udonIndex += n);
    }

    function currentUdon(n) {
      showUdons(udonIndex = n);
    }

    function showUdons(n) {
      var i;
      var udons = document.getElementsByClassName("myUdons");
      var circles = document.getElementsByClassName("circle");
      if (n > udons.length) {
        udonIndex = 1
      }
      if (n < 1) {
        undonIndex = udons.length
      }
      for (i = 0; i < udons.length; i++) {
        udons[i].style.display = "none";
      }
      for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
      }
      udons[udonIndex - 1].style.display = "block";
      circles[udonIndex - 1].className += " active";
    }

    // Muji Slideshow

    var mujiIndex = 1;
    showMujis(mujiIndex);

    function plusMujis(n) {
      showMujis(mujiIndex += n);
    }

    function currentMuji(n) {
      showMujis(mujiIndex = n);
    }

    function showMujis(n) {
      var i;
      var mujis = document.getElementsByClassName("myMujis");
      var dots = document.getElementsByClassName("dot");
      if (n > mujis.length) {
        mujiIndex = 1
      }
      if (n < 1) {
        mujiIndex = muji.length
      }
      for (i = 0; i < mujis.length; i++) {
        mujis[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      mujis[mujiIndex - 1].style.display = "block";
      dots[mujiIndex - 1].className += " active";
    }

    // What I use to study Japanese

    var wiutsjIndex = 1;
    showWiutsjs(wiutsjIndex);

    function plusWiutsjs(n) {
      showWiutsjs(wiutsjIndex += n);
    }

    function currentWiutsj(n) {
      showWiutsjs(wiutsjIndex = n);
    }

    function showWiutsjs(n) {
      var i;
      var wiutsjs = document.getElementsByClassName("myWiutsjs");
      var rounds = document.getElementsByClassName("round");
      if (n > wiutsjs.length) {
        wiutsjIndex = 1
      }
      if (n < 1) {
        wiutsjIndex = wiutsj.length
      }
      for (i = 0; i < wiutsjs.length; i++) {
        wiutsjs[i].style.display = "none";
      }
      for (i = 0; i < rounds.length; i++) {
        rounds[i].className = rounds[i].className.replace(" active", "");
      }
      wiutsjs[wiutsjIndex - 1].style.display = "block";
      rounds[wiutsjIndex - 1].className += " active";
    }

    // scroll-to-top arrow functionality

    $('#up-nav').hide();

    $(window).scroll(function() {
      if ($(window).scrollTop() > 200) {
        $("#up-nav").fadeIn();
      }
    });
    $(window).scroll(function() {
      if ($(window).scrollTop() < 200) {
        $("#up-nav").fadeOut();
      }
    });
