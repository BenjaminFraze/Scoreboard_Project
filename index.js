homeCounter = 0
guestCounter = 0
console.log("JS is connected!");


function addOneHome(){
    homeCounter += 1
    document.getElementById("homeScore").textContent = homeCounter    
}

function addTwoHome(){
    homeCounter += 2
    document.getElementById("homeScore").textContent = homeCounter    
}


function addThreeHome(){
    homeCounter += 3
    document.getElementById("homeScore").textContent = homeCounter
    console.log("it worked?")
    console.log(homeScore)
    
}


function addOneGuest(){
    homeCounter += 1
    document.getElementById("guestScore").textContent = guestCounter    
}

function addTwoGuest(){
    homeCounter += 2
    document.getElementById("guestScore").textContent = guestCounter    
}


function addThreeGuest(){
    homeCounter += 3
    document.getElementById("guestScore").textContent = guestCounter    
}



function resetScore(){
    homeCounter = 0
    guestCounter = 0
    document.getElementById("homeScore").textContent = homeCounter
    document.getElementById("guestScore").textContent = guestCounter
}