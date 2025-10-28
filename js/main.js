const myHeading = document.getElementById('myHeading');
myHeading.innerText = "Aaron"
const firstLink= document.querySelector('nav ul li a');
firstLink.setAttribute('href', 'https://www.google.com');
const colourPickers = document.querySelectorAll(".colPicker");
console.dir(colourPickers);
for (let i = 0; i < colourPickers.length; i++) {
  colourPickers[i].style.backgroundColor = "red";
}   

document.getElementById("myTestBtn").addEventListener("click", (ev)=>{
  console.info("Button clicked");
  console.info(ev.target);
});

    const redBtn = document.querySelector(".red");
    redBtn.addEventListener("click", function() {
        console.info("Red button clicked");
      document.body.setAttribute("class", "redBack");
    });

    const greenBtn = document.querySelector(".green");
    greenBtn.addEventListener("click", function() {
        console.info("green button clicked");
      document.body.setAttribute = ("class", "greenBack");
    });

    const blueBtn = document.querySelector(".blue");
    blueBtn.addEventListener("click", function() {
        console.info("blue button clicked");
      document.body.setAttribute("class", "blueBack");
    });