$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log(this);
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });
  $("#displayCurrentDay").text(dayjs().format("dddd, MMMM Do"));
  $(function () {
    var currentHour = dayjs().hour();
    var timeBlock = document.getElementsByClassName("time-block");
    for (var i = 0; i < timeBlock.length; i++) {
      console.log(currentHour)
      console.log(timeBlock[i].getAttribute('id'))
      if (currentHour == Number.parseInt(timeBlock[i].getAttribute('id'))) {
        timeBlock[i].classList.add("present");
      } else if (currentHour < Number.parseInt(timeBlock[i].getAttribute('id'))) {
        timeBlock[i].classList.add("future")
      }
      else {
        timeBlock[i].classList.add("past");
      } 
    };
    function hourUpdater() {
    };
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  })
});