let ball = document.getElementById('float-circle');

// Write your code below
let up = () => {
  ball.style.bottom = "250px";
}
let down = () => {
  ball.style.bottom = "50px";
}
document.addEventListener("keydown", up);
document.addEventListener("keyup", down);