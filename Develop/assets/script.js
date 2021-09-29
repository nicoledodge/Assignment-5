// tells computer to load css& html first.
$(document).ready(function () {
    var currentDate = moment()
    $("#currentDay").text(currentDate.format('LL'));
    console.log(currentDate.format('dddd MMMM Do YYYY'));

    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        //makes changes inside the text box 
        var text = $(this).siblings(".insideBox").val(); 
        var time = $(this).parent().attr("id"); 
        //set items in local storage.
        localStorage.setItem(time, text);
    })

    $("#hour8 .insideBox").val(localStorage.getItem("hour8"));
    $("#hour9 .insideBox").val(localStorage.getItem("hour9"));
    $("#hour10 .insideBox").val(localStorage.getItem("hour10"));
    $("#hour11 .insideBox").val(localStorage.getItem("hour11"));
    $("#hour12 .insideBox").val(localStorage.getItem("hour12"));
    $("#hour13 .insideBox").val(localStorage.getItem("hour13"));
    $("#hour14 .insideBox").val(localStorage.getItem("hour14"));
    $("#hour15 .insideBox").val(localStorage.getItem("hour15"));
    $("#hour16 .insideBox").val(localStorage.getItem("hour16"));
    $("#hour17 .insideBox").val(localStorage.getItem("hour17"));
    $("#hour18 .insideBox").val(localStorage.getItem("hour18"));

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over each row time-blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
            //if/then deciding if the hour has already passed using CSS features to indicate
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
})
