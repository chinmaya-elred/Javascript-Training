document.getElementById("dateButton").addEventListener("click", handleDateMethods);

function handleDateMethods() {
    var currentDate = new Date();

    var currentDateString = "Current Date and Time: " + currentDate;
    var year = "Year: " + currentDate.getFullYear();
    var month = "Month (0-11): " + currentDate.getMonth();
    var day = "Day of the Month (1-31): " + currentDate.getDate();
    var hours = "Hours (0-23): " + currentDate.getHours();
    var minutes = "Minutes (0-59): " + currentDate.getMinutes();
    var seconds = "Seconds (0-59): " + currentDate.getSeconds();
    var milliseconds = "Milliseconds: " + currentDate.getMilliseconds();
    var dayOfWeek = "Day of the Week (0-6): " + currentDate.getDay();
    
    alert(currentDateString + "\n" + year + "\n" + month + "\n" + day + "\n" + hours + "\n" + minutes + "\n" + seconds + "\n" + milliseconds + "\n" + dayOfWeek);
}