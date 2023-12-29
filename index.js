// Create variables for grabbing the score elements on the web page. 
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
// create variables to hold the game score. 
let homeScore = 0
let guestScore = 0
// Create functions to update the guest and homescore when they are clicked on the scoreboard. 
function add1home(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    
}

function add2home(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
}

function add3home(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    
}
//create functions for the guest scoreboard
function add1guest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    
}

function add2guest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    
}

function add3guest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
   
}
