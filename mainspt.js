const circles = document.querySelectorAll(".circle");
const send = document.getElementById("rate");

circles.forEach((circle) => circle.addEventListener("click", () => {
  if(circle.classList.contains("active")){
    circle.classList.toggle("active")
  }else{
    circles.forEach((circle)=> circle.classList.remove("active"))
    circle.classList.add("active")
  }
}));

const sent = () => {
  rate.addEventListener("click",() => {
    rate.parentNode.classList.toggle("active")
  })
}

const rt = (n) => {
  remove();
  for (let i = 0; i < n; i++) {
      if (n == 1) cls = "one";
      else if (n == 2) cls = "two";
      else if (n == 3) cls = "three";
      else if (n == 4) cls = "four";
      else if (n == 5) cls = "five";
      circles[i].className = "circle " + cls;
  }
  output.innerText = "You selected " + n + " out of 5";
}

const remove = () => {
  let i = 0;
  while (i < 5) {
    circles[i].className = "circle";
      i++;
  }
}