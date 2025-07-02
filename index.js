const accidentDate = new Date('2024-07-12T09:45:00');
let display = 0
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate - accidentDate;

    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const yearsSinceAccident = currentDate.getFullYear() - accidentDate.getFullYear();
    const monthsSinceAccident = (currentDate.getFullYear() - accidentDate.getFullYear()) * 12 + (currentDate.getMonth() - accidentDate.getMonth());

    const hoursSinceAccident = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesSinceAccident = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsSinceAccident = Math.floor((timeDifference / 1000) % 60);

    // Update countdown display
    document.getElementById('countdown').innerHTML =
        `${yearsSinceAccident} years ${monthsSinceAccident} months ${totalDays} days ${hoursSinceAccident} hours ${minutesSinceAccident} minutes ${secondsSinceAccident} seconds`;

    // Change color based on days
    if (totalDays < 10) {
        document.getElementById("countdown").style.color = "red";
    } else if (totalDays >= 10 && totalDays < 100) {
        document.getElementById("countdown").style.color = "#A020F0";
    } else {
        document.getElementById("countdown").style.color = "green";
    }
}


function Mausi(){
    
    var pakoda = document.getElementById("Pakoda") 
    
    if (pakoda.style.display === "none") {
        pakoda.style.display = "block";
      } else {
        pakoda.style.display = "none";
      }
}
// Update every second
setInterval(updateCountdown, 1000);

// Initial call to display the correct countdown immediately
updateCountdown();
