console.log("hello World");
const div = document.getElementsByTagName("div");
// const element = document.createElement("p");
// element.innerText = `hello my name is ashutosh`;
// div.append(element);
div[0].innerText = "hello World";
div[0].style.color = "brown";
div[0].style.backgroundColor = "white";

const container = document.getElementsByClassName("container");
console.log(container);
container[0].innerHTML = "<h2 style=color:cyan>ABES Engineering College</h2>";
console.log(container);
const h1 = document.createElement("h1");
h1.innerText = "Computer Science and Engineering";
h1.style.color = "red";
h1.style.border = "1px solid black";
h1.style.borderRadius = "10px";
container[0].append(h1);
const disp = document.querySelector(".disp");
const img = document.createElement("img");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s";
img.setAttribute("height", "200px");
img.setAttribute("width", "200px");
img.setAttribute("style", "border-radius:10px");
console.log(img);
// container[0].append(img);
// console.log(img.getAttribute());

const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const element = "Image is Loading...";
  disp.innerText = element;
  setTimeout(() => {
    disp.innerText = "";
    disp.append(img);
  }, 2000);
  //   console.log("heloo");
});
