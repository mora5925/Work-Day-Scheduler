console.log(moment().format("dddd, MMMM Do"));
console.log(moment().hour());
var now = moment().format("dddd, MMMM Do");
     // Saturday, June 9th, 2007, 5:46:21 PM
$("#currentDay").append(now);

console.log(moment().format("dddd, MMMM Do"));
console.log(moment().hour());

function storeDataNineAM() {
     var usernotes = document.getElementById("nineAMUserData");
     localStorage.setItem("nineAM", userNotes.value);
}

function storeDataTenAM() {
     var usernotes = document.getElementById("tenAMUserData");
     localStorage.setItem("tenAM", userNotes.value);
}

function storeDataElevenAM() {
     var usernotes = document.getElementById("elevenAMUserData");
     localStorage.setItem("elevenAM", userNotes.value);
}

function storeDataTwelvePM() {
     var usernotes = document.getElementById("twelvePMUserData");
     localStorage.setItem("twelvePM", userNotes.value);
}


function storeDataOnePM() {
     var usernotes = document.getElementById("onePMUserData");
     localStorage.setItem("onePM", userNotes.value);
}


function storeDataTwoPM() {
     var usernotes = document.getElementById("twoPMUserData");
     localStorage.setItem("twoPM", userNotes.value);
}


function storeDataThreePM() {
     var usernotes = document.getElementById("threePMUserData");
     localStorage.setItem("threePM", userNotes.value);
}


function storeDataFourPM() {
     var usernotes = document.getElementById("fourPMUserData");
     localStorage.setItem("fourPM", userNotes.value);
}


function storeDataFivePM() {
     var usernotes = document.getElementById("fivePMUserData");
     localStorage.setItem("fivePM", userNotes.value);
}

displayDateEl.textContent = moment() .format("dddd, MMMM Do");

function colorDisplay() {
     for (i = 9; i < 18; i++) {
          if (i < currentHour) {
               $(".hour-" + i).addClass("past");
          }
     else if (i === currentHour) {
          $(".hour-" + 1).addClass("present");    
     }
}} 

function initialize() {
     document.getElementById("nineAMUserData").innerHTML = localStorage.getItem("nineAM");
     document.getElementById("tenAMUserData").innerHTML = localStorage.getItem("tenAM");
     document.getElementById("elevenAMUserData").innerHTML = localStorage.getItem("elevenAM");
     document.getElementById("twelvePMUserData").innerHTML = localStorage.getItem("twelvePM");
     document.getElementById("onePMUserData").innerHTML = localStorage.getItem("onePM");
     document.getElementById("twoPMUserData").innerHTML = localStorage.getItem("twoPM");
     document.getElementById("threePMUserData").innerHTML = localStorage.getItem("threePM");
     document.getElementById("fourPMUserData").innerHTML = localStorage.getItem("fourPM");
     document.getElementById("fivePMUserData").innerHTML = localStorage.getItem("fivePM");
}

initialize();
colorDisplay();