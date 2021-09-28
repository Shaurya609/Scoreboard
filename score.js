var pointsa = 0;
var pointsb = 0;
var pointsd = 0;
var pointsc = 0;

function increasescore10(participant) {
    if (participant == "participant-a") {
        pointsa = pointsa + 10;
        document.getElementById("score-a").innerHTML = pointsa;
    }
    if (participant == "participant-b") {
        pointsb = pointsb + 10;
        document.getElementById("score-b").innerHTML = pointsb;
    }
    if (participant == "participant-c") {
        pointsc = pointsc + 10;
        document.getElementById("score-c").innerHTML = pointsc;
    }
    if (participant == "participant-d") {
        pointsd = pointsd + 10;
        document.getElementById("score-d").innerHTML = pointsd;
    }
}

function increasescore20(participant) {
    if (participant == "participant-a") {
        pointsa = pointsa + 20;
        document.getElementById("score-a").innerHTML = pointsa;
    }
    if (participant == "participant-b") {
        pointsb = pointsb + 20;
        document.getElementById("score-b").innerHTML = pointsb;
    }
    if (participant == "participant-c") {
        pointsc = pointsc + 20;
        document.getElementById("score-c").innerHTML = pointsc;
    }
    if (participant == "participant-d") {
        pointsd = pointsd + 20;
        document.getElementById("score-d").innerHTML = pointsd;
    }
}

function resetscore() {
    pointsa = 0;
    pointsb = 0;
    pointsd = 0;
    pointsc = 0;
    document.getElementById("score-a").innerHTML = pointsa;
    document.getElementById("score-b").innerHTML = pointsb;
    document.getElementById("score-c").innerHTML = pointsc;
    document.getElementById("score-d").innerHTML = pointsd;
}