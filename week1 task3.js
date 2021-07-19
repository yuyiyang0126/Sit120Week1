function Gettext1() {
  document.getElementById("demo").innerHTML = "At Deakin you won't just learn about the future, you'll prepare for it with real-world learning fuelled by progressive thinking. Explore our practical, industry-shaped courses and get ready to launch a career with impact.";
}

let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo1").innerHTML = d.toLocaleTimeString();}