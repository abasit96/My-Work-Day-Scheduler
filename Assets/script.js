$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });
  $("#displayCurrentDay").text(dayjs().format("dddd, MMMM Do"));
  $(function () {
    var currentHour = dayjs().hour();
    var timeBlock = document.getElementsByClassName("time-block");
    for (var i = 0; i < timeBlock.length; i++) {
      if (currentHour == Number.parseInt(timeBlock[i].getAttribute('id'))) {
        timeBlock[i].classList.add("present");
      } else {
        timeBlock[i].classList.add("past");
      }
    }
    function hourUpdater() {
    };
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
  })
});