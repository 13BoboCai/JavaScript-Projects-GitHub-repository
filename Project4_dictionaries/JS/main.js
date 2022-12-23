// Assignment no 24:


var makeup = {
    Foundation:"Huda Beauty",
    Lipstick: "Elf Cosmetics",
    Mascara: "Maybelline",
    Highlighter:"Too Faced"
}
function show() {
    // Although JavaScript lacks a native dictionary type, it does provide many ways to build a data structure resembling a dictionary. It becomes quite simple to create a dictionary of different data kinds when using objects and maps.
    
    document.getElementById("makeup").innerHTML = makeup.Foundation;
}


// Assignment no 25:

function delete_List() {
    delete makeup.Foundation;

    document.getElementById("remove").innerHTML = makeup.Foundation;
}


