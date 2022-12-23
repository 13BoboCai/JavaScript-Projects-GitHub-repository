// Assignment no 44
function complete_sentence() {
    var part1 = "I "
    var part2 = "haven't slept "
    var part3 = "well from past few days "

    var complete = part1.concat(part2, part3)
    document.getElementById("Concatenation").innerHTML = complete
}


// Assignment no 45:
function Slice_Method(){
    var line = "I have been really busy with work load and meetings"
    var Sliced_done = line.slice(5, 10)
    document.getElementById("Slice_Method").innerHTML = Sliced_done
}


// Assignment no 46:

function string_Method(){
    var number = 60
    document.getElementById("string_Method").innerHTML = typeof number.toString() + " " + number.toString()
}


// Assignment no 47:

function precision_Method(){
    var number = 0.0006248115
    document.getElementById("Precise").innerHTML = number.toPrecision(4)
}
