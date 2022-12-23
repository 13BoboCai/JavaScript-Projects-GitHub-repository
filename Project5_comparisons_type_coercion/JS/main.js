//Assignment no 26:
document.write(typeof 25);
document.write("<br />");
document.write(typeof "Bobo");
document.write("<br />");

//Assignment no 27:
function NI() {
  document.getElementById("negaIN").innerHTML = -3e310;
}
function PI() {
  document.getElementById("posiIN").innerHTML = 3e310;
}

//Assignment no 28:
document.write(50 < 100);
document.write("<br/>");
document.write(50 > 10);
document.write("<br/>");

//Assignment no 29:
console.log(50 + 10);
console.log("Bobo");
document.write("<br/>");

//Assignment no 30:
document.write("50" + 25);
document.write("<br />");

//Assignment no 31:
document.write(20 == 20);
document.write("<br />");
document.write(100 == 1000);
document.write("<br />");

//Assignment no 32:
var x = 1000;
var y = 1000;
document.write(x === y);
document.write("<br />");

var w = "100";
var z = 101;
document.write(w === z);
document.write("<br />");

var m = "20";
var h = 20;

document.write(m === h);
document.write("<br />");

var i = "5";
var j = "5";
document.write(i === j);

document.write("<br />");
document.write("<br />");

//Assignment no 33:
//The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
document.write(20 > 10 && 100 > 60); //  true
document.write("<br />");
document.write(1000 < 100 && 1 > 6); //  false
document.write("<br />");
//he logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
document.write(100 > 10 || 1000 < 10); // true

//Assignment no 34:
document.write("<br />");
document.write("<br />");
//The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa. It is typically used with boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.
document.write(!(100 > 25));
document.write("<br />");

document.write(!(100 < 25));

document.write("<br />");
document.write("<br />");
