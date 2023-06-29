var Timedisplay = $("#currentDay");
var timeBlock = $(".time-block");
var content = $(".description");
var timeBox1 = $("#9").children().eq(1);
var timeBox2 = $("#10").children().eq(1);
var timeBox3 = $("#11").children().eq(1);
var timeBox4 = $("#12").children().eq(1);
var timeBox5 = $("#13").children().eq(1);
var timeBox6 = $("#14").children().eq(1);
var timeBox7 = $("#15").children().eq(1);
var timeBox8 = $("#16").children().eq(1);
var timeBox9 = $("#17").children().eq(1);

//Load content from the local storage
function loadContent() {
  timeBox1.text(localStorage.getItem("9"));
  timeBox2.text(localStorage.getItem("10"));
  timeBox3.text(localStorage.getItem("11"));
  timeBox4.text(localStorage.getItem("12"));
  timeBox5.text(localStorage.getItem("13"));
  timeBox6.text(localStorage.getItem("14"));
  timeBox7.text(localStorage.getItem("15"));
  timeBox8.text(localStorage.getItem("16"));
  timeBox9.text(localStorage.getItem("17"));
}

var now = dayjs().format("HH");
console.log(now);
var timeOnBlock = [];
$(".time-block").each(function () {
  timeOnBlock.push(this.id);
});

// changes color depending on time
dog();

function dog() {
  //9
  if (9 > now) {
    $("#9").addClass("future");
  } else if (9 == now) {
    $("#9").addClass("present");
  } else {
    $("#9").addClass("past");
  }
  //10
  if (10 > now) {
    $("#10").addClass("future");
  } else if (10 == now) {
    $("#10").addClass("present");
  } else {
    $("#10").addClass("past");
  }
  //11
  if (11 > now) {
    $("#11").addClass("future");
  } else if (11 == now) {
    $("#11").addClass("present");
  } else {
    $("#11").addClass("past");
  }
  //12
  if (12 > now) {
    $("#12").addClass("future");
  } else if (12 == now) {
    $("#12").addClass("present");
  } else {
    $("#12").addClass("past");
  }
  //13
  if (13 > now) {
    $("#13").addClass("future");
  } else if (13 == now) {
    $("#13").addClass("present");
  } else {
    $("#13").addClass("past");
  }
  //14
  if (14 > now) {
    $("#14").addClass("future");
  } else if (14 == now) {
    $("#14").addClass("present");
  } else {
    $("#14").addClass("past");
  }
  //15
  if (15 > now) {
    $("#15").addClass("future");
  } else if (15 == now) {
    $("#15").addClass("present");
  } else {
    $("#15").addClass("past");
  }
  //16
  if (16 > now) {
    $("#16").addClass("future");
  } else if (16 == now) {
    $("#16").addClass("present");
  } else {
    $("#16").addClass("past");
  }
  //17
  if (17 > now) {
    $("#17").addClass("future");
  } else if (17 == now) {
    $("#17").addClass("present");
  } else {
    $("#17").addClass("past");
  }
}

$(function () {
  var showTime = function () {
    var Rightnow = dayjs().format("DD MMM, YYYY [at] hh:mm:ss a");
    Timedisplay.text(Rightnow);
  };

  var t = setInterval(showTime, 1000);

  // Add timeblock content to local storage and print it out
  function saveContent(event) {
    event.preventDefault();

    console.log($(this));

    var timeBlockContent = $(this).siblings(".description");

    localStorage.setItem($(this).parent().attr("id"), timeBlockContent.val());
  }

  // click event on save button
  timeBlock.on("click", ".btn", saveContent);

  loadContent();
  showTime();
});
