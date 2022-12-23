// Assignment no 13:
function Function() {
    var sentence = "Hello i am a new function created using getElementById,Based on the parameter that is supplied inside of it, JavaScript's getElementById() method performs its function. When using the getElementById() function, the element with the supplied value for the ID property is returned.";
    var outcome = sentence.fontcolor("orange");
    document.write(outcome);
    document.getElementById("New").innerHTML = outcome;
}

// Assignment no 14:
function myFunction(){
    var random="This is Javascript";
    random +=",It is a complete programming language!!";
    document.getElementById("Value").innerHTML=random;
}