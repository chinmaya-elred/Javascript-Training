document.getElementById("checkBatteryButton").addEventListener("click", checkBatteryStatus);

function checkBatteryStatus() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            var level = battery.level * 100;
            var charging = battery.charging;

            alert("Battery Level: " + level + "%" + 
                  "\nCharging: " + (charging ? "Yes" : "No"));
        });
    } else {
        alert("Battery Status API not supported in this browser.");
    }
}