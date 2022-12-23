//Assignment no 35:
function Drive_Function() {
    var Age, Can_drive;
    Age = document.getElementById("Age").value;
    Can_drive = (Age < 52) ? "My age is 23" : "My age is 24";
    document.getElementById("Drive").innerHTML = Can_drive + " to drive.";
}

//Assignment no 36:

function Makeup(Blush, Foundation, Lipstick, Highlighter) {
    this.Makeup_Blush = Blush;
    this.Makeup_Foundation = Foundation;
    this.Makeup_Lipstick = Lipstick;
    this.Makeup_Highlighter = Highlighter;
}

var Bobo = new Makeup("Maybelline", "Huda Beauty", "Rivaj", "BBA");
var Jill = new Makeup("Nyx", "Maybelline", "Sweet Touch", "Too Faced");
var Jack = new Makeup("Emelie", "Face it", "Mussarat Misbah", "Makeup Revolution");


function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Bobo uses foundation from " + Bobo.Makeup_Foundation + " " +"and applies highlighter from " + Bobo.Makeup_Highlighter +
        " and loves blush from " + Bobo.Makeup_Lipstick
}


//Assignment no 37:

function Favourite_Food(Pizza, Broast, Wings){
    this.Pizza = Pizza
    this.Broast = Broast
    this.Wings = Wings
}
var Jack_loves = new Favourite_Food("Cheezy Extreme Pizza", "Al-Baik Broast", "KFC Wings")
var Gill_loves = new Favourite_Food("Pepperoni Pizza", "Mc_Donald Broast", "Oven-Baked Wings")

function Food(){
    document.getElementById("New_and_This").innerHTML = " I am gonna order " + Gill_loves.Pizza + "," +" " + Gill_loves.Broast +","+ " " + Gill_loves.Wings;
}

//Assignment no 38:
function Function_1(){
    function Function_2(){
        document.getElementById("Nested_Function").innerHTML = "Hello There! I am nested function that means a function within a function."
    }
    return Function_2()
}

function nest_Call(){
    Function_1()
}