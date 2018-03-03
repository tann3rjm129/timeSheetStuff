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
     var MonthsWorked = " ";
     var MonthlyRate = " ";
     var TotalBilled = " ";

    $("#addEmployee").on("click", function(){

        event.preventDefault();

        EmployeeName = $("#name").val();
        Role = $("#role").val();
        StartDate = $("#startDate").val();
        MonthlyRate = $("#monthlyRate").val();

        database.ref().set({

        EmployeeName: EmployeeName,
        Role: Role,
        StartDate: StartDate,
        MonthlyRate: MonthlyRate
        
      });


        database.ref().on("child_added", function(snapshot) {

        var employeeRow = $("<tr>");

        employeeRow.append(snapshot.val().EmployeeName);
        employeeRow.append(snapshot.val().Role);
        employeeRow.append(snapshot.val().StartDate);
        employeeRow.append(snapshot.val().MonthlyRate);
      
        $("#tableRow").append(employeeRow);

        });
        
        
      });
    });