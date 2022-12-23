
// Assignment no 50:
function count_To_100() {
    var Counting = "";
    var A = 0;
    while (A <= 100) {
        Counting += "<br>" + A;
        A++;
    }
    document.getElementById("Counting_Till_100").innerHTML = Counting;

}


// Assignment no 51:

var Makeup = ["Foundation", "Lipstick", "Blush", "Highlighter"]
var content = ""
var a;

function for_Loop() {
    for (a = 0; a < Makeup.length; a++) {
        content += Makeup[a] + "<br>";
    }
    document.getElementById("StartforLoop").innerHTML = content;
}



// Assignment no 52:
function Array_List() {
    var Makeup = []
    Makeup[0] = "Foundation"
    Makeup[1] = "Concealer"
    Makeup[2] = "Blush"
    Makeup[3] = "Highlighter"

    document.getElementById("List").innerHTML = "My favourite makeup product is " + Makeup[2]

}

// Assignment no 53:
function constant_function() {
    const Makeup = { Foundation: "Huda", Concealer: "Too Faced" }
    Makeup.Concealer = "Too Faced";
    Makeup.Foundation="Huda"

    document.getElementById("Constant").innerHTML = "My all time favourite makeup products are" + "Foundation: " + Makeup.Foundation + " Concealer: " + Makeup.Concealer 

}


// Assignment no 54:

function Concept() {
    var number = 100;

    document.write(number)
    {
        let number = 1500;
        document.write("<br>" + number)
    }
    document.write("<br>" + number)


}
// Assignment no 55:
let Makeup = {
    Foundation: "Huda",
    Concealer: "Too Faced",
    Blush: "Maybelline",
    Mascara: "Essence",
    description: function(){
        return " Makeup includes: " + Makeup.Foundation + " " + Makeup.Concealer +  " " + Makeup.Blush + " " + Makeup.Mascara
    }

}

document.getElementById("Makeup_Fav").innerHTML = Makeup.description()

