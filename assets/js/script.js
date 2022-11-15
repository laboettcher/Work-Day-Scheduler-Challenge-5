// Display current date
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").html(currentDate);

// Add save button click listener and save text input locally
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
  })

  // Current time in terms of hours and loop over each time block to check if past, present, or future
  function tracker() {
    var currentTime = moment().hour();
    // Test if times are working properly (colors for past, present, and future)
    console.log(currentTime)

    $(".time-block").each(function () {
      var block = parseInt($(this).attr("id").split("-")[1]);
      console.log(block)

      if (block < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (block === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

  // Use .val for textarea and get item from local storage for each hour
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Call function for tracking time
  tracker();
});
