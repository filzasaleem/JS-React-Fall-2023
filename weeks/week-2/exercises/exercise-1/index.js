// DOM Manipulation Exercise



console.log("helloqqqqqq there")

let changePara = document.querySelector(".box");
      changePara.style.backgroundColor = "red";
     
      // select the id of the input //


document.getElementById("dark").addEventListener("change", function() {
   changePara.style.backgroundColor = "black";
});

document.getElementById("light").addEventListener("change", function() {
    changePara.style.backgroundColor = "white";
});

document.getElementById("crazy").addEventListener("change", function() {
    changePara.style.backgroundColor = "red";
});



console.log("now changes")