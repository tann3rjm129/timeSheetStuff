$(document).ready(function(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXuKi1NjMgAgwAA-Y9VCPuc-08IclW4fs",
    authDomain: "timesheet-7dd35.firebaseapp.com",
    databaseURL: "https://timesheet-7dd35.firebaseio.com",
    projectId: "timesheet-7dd35",
    storageBucket: "timesheet-7dd35.appspot.com",
    messagingSenderId: "3643256883"
  };
  firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();
     var EmployeeName = " ";
     var Role = " ";
     var StartDate = " ";
     var MonthsWorked ="";
     var MonthlyRate = " ";
     var TotalBilled = " ";
    $("#addEmployee").on("click", function(){
            event.preventDefault();
        EmployeeName = $("#name").val().trim();
        Role = $("#role").val().trim();
        StartDate = $("#startDate").val().trim();
        MonthlyRate = $("#monthlyRate").val().trim();
        database.ref().set({
        EmployeeName: EmployeeName,
        Role: Role,
        StartDate: StartDate,
        MonthlyRate: MonthlyRate
        
      });
        database.ref().on("value", function(snapshot) {
        $("#rowRame").text(snapshot.val().EmployeeName);
        $("#rowRoll").text(snapshot.val().Role);
        $("#rowStart").text(snapshot.val().StartDate);
        $("#rowMonthlyRate").text(snapshot.val().MonthlyRate);
      
        });
        
        
      });
    });