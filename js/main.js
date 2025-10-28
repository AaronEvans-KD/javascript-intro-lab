const myHeading = document.getElementById('myHeading');
myHeading.innerText = "Aaron"
const firstLink= document.querySelector('nav ul li a');
firstLink.setAttribute('href', 'https://www.google.com');
const colourPickers = document.querySelectorAll(".colpicker");
console.dir(colourPickers);
for (let i = 0; i < colourPickers.length; i++) {
  colourPickers[i].style.backgroundColor = "red";
}   

document.getElementById("myTestBtn").addEventListener("click", (ev)=>{
  console.info("Button clicked");
});
    console.info(ev.target);

    const redBtn = document.querySelector(".red");
    redBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "redback";
    });

    const greenBtn = document.querySelector(".green");
    greenBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "greenback";
    });

    const blueBtn = document.querySelector(".blue");
    blueBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "blueback";
    });