// Assignment no 39:
// Global
var num1 = 200
function GlobalFunction() {
    document.getElementById("global").innerHTML = num1 + 55
}
// Local
function LocalFunction() {
    var num2 = 60;
    document.getElementById("local").innerHTML = num2 + 25


}

function Error_Generated() {
    document.getElementById("Incorrect").innerHTML = local;
}

//Assignment no 40:

function showDate() {
    if (new Date().getHours() < 20) {
        document.getElementById("date").innerHTML = "Hope you are fine"
    }

}


// Assignment no 41:
function Show_Result() {
    var excellent=100;
    if(excellent===100){
        document.getElementById("Result").innerHTML="You Got the First Position"
    }
    else {
        document.getElementById("Result").innerHTML = "You Failed"
    }

}

// Assignment no 42:
function Food(){
    var Menu=document.getElementById("myFood")
    if (Menu==="Burger"){
        document.getElementById("FavouriteFood").innerHTML="Please add extra cheese in burger"
    }
    else{
        document.getElementById("FavouriteFood").innerHTML="Not my thing"
    }
}



// Assignment no 43:

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!"
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is evening time."
    }
    else{
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}

