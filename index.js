const accidentDate = new Date('2024-07-01T09:39:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - accidentDate.getTime();
    const daysSinceAccident = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursSinceAccident = Math.floor(timeDifference/ (1000 * 60 * 60) % 24);
    const minutesSinceAccident = Math.floor(timeDifference / (1000 * 60) % 60);
    const secondsSinceAccident = Math.floor(timeDifference / 1000 % 60);

    document.getElementById('countdown').innerHTML = `${daysSinceAccident} days ${hoursSinceAccident} hours ${minutesSinceAccident} minutes ${secondsSinceAccident} seconds`;
    if(daysSinceAccident < 10){
        document.getElementById("countdown").style.color="red";
    }
    else if(daysSinceAccident > 10 && daysSinceAccident < 100){
        document.getElementById("countdown").style.color="purple";
    }
    else{
        document.getElementById("countdown").style.color="green";
    }
}

// Update every second
setInterval(updateCountdown, 1000);

// Initial call to display the correct countdown immediately
updateCountdown();
