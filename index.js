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
img.src = "/";
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s";
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

const button2 = document.querySelector(".btn");

function longData() {
  console.log("Start");
  // for (let i = 0; i < 1000; i++) {
  //   console.log(i);
  // }
  setTimeout(() => {
    console.log("hello world");
  }, 1000);
  console.log("end");
}
button2.addEventListener("click", longData);

function msg(mymsg) {
  return "hello" + mymsg;
}
function msgHandler(args, clbk) {
  // console.log("hello" + args);
  // clbk();
  const data = clbk(args);
  console.log(data);
}
const arr = ["amit", "rahu", "vansh"];
arr.forEach((element) => {
  msgHandler(element, msg);
});
msgHandler("ashutosh", msg);

setTimeout(() => {
  console.log("First MSG");
  setTimeout(() => {
    console.log("Second MSG");
    setTimeout(() => {
      console.log("Third MSG");
      setTimeout(() => {
        console.log("Fourth MSG");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

const myPromise = new Promise((resolve, reject) => {
  const password = "43fd2402";
  if (password.length > 8) {
    resolve("Password is accepted or valid");
  } else {
    reject("Password is rejected due to length");
  }
});
console.log(myPromise);

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((msg) => {
    console.log("Finally resources closed");
  });

async function handler() {
  try {
    const response = await myPromise;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
handler();

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
const printContainer = document.querySelector(".print-container");
const showData = document.querySelector(".show-data");
async function doubleHandler() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    console.log("first data", data[0]);
    const html = `
    <img src="${data[0].image}" style="border:1px solid red; border-radius: 10px; width: 200px">
    <div class="description">
    <p><b>Title:</b> ${data[0].title} </p>
    <p><b>Id:</b> ${data[0].id}</p>
    <p><b>Price:</b>${data[0].price} </p>
    <p><b>Description:</b> ${data[0].description}</p>
    </div>
    `;
    showData.addEventListener("click", () => {
      printContainer.innerHTML = html;
    });
  } catch (err) {
    console.log(err);
  }
}
doubleHandler();
