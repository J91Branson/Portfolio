
var config = {
  apiKey: "AIzaSyButx5BRRMUZ_XsaEyqIvS2PgqDCdRxBGA",
  authDomain: "myportfolio-e0745.firebaseapp.com",
  databaseURL: "https://myportfolio-e0745.firebaseio.com",
  projectId: "myportfolio-e0745",
  storageBucket: "myportfolio-e0745.appspot.com",
  messagingSenderId: "618355092736"
};
firebase.initializeApp(config);



var database = firebase.database();
var info = database.ref('/contactMessage');

$("#submit-btn").on("click", function (event) {
  event.preventDefault();

  var fName = $("#fname").val().trim();
  var lName = $("#lname").val().trim();
  var email = $("#email").val().trim();
  var text = $("#text").val().trim();

  var newInfo ={
      fName: fName,
      lastName: lName,
      email: email,
      text: text,
  }
  database.ref().push(newInfo);
  $("#fname").val("");
  $("#lname").val("");
  $("#email").val("");
  $("#text").val("");
});