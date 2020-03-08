var bill = document.getElementById("bill");
var tip = document.getElementById("tip");
var people = document.getElementById("people");
var calcButton = document.getElementById("calculate");
var resetBut = document.getElementById("reset");
var tipTotal = document.getElementById("tiptotal");  





// Calculate Tip Total
function calcTotal(){
var b = bill.value;
var t = tip.value;
var p = people.value; 

    return Number((b * t) / 100) / p

}




// Action for Calculate button
calcButton.addEventListener("click", function(){
    var c = calcTotal();
    tipTotal.textContent = c.toFixed(2);
});



// Action for Reset button
resetBut.addEventListener("click", function(){
bill.value = "";
tip.value = "";
people.value = ""; 
tipTotal.textContent = "";

});


