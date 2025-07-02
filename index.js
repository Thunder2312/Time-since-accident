const accidentDate = new Date('2024-07-12T09:45:00');
let display = 0;
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - accidentDate.getTime();
    const yearsSinceAccident = Math.floor(timeDifference/ (1000 
    const daysSinceAccident = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursSinceAccident = Math.floor(timeDifference/ (1000 * 60 * 60) % 24);
    const minutesSinceAccident = Math.floor(timeDifference / (1000 * 60) % 60);
    const secondsSinceAccident = Math.floor(timeDifference / 1000 % 60);

    document.getElementById('countdown').innerHTML = `${daysSinceAccident} days ${hoursSinceAccident} hours ${minutesSinceAccident} minutes ${secondsSinceAccident} seconds`;
    if(daysSinceAccident < 10){
        document.getElementById("countdown").style.color="red";
    }
    else if(daysSinceAccident > 10 && daysSinceAccident < 100){
        document.getElementById("countdown").style.color="#A020F0";
    }
    else{
        document.getElementById("countdown").style.color="green";
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
