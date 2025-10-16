// import Profile from './Profile.jsx'
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h2 = React.createElement(
//   "h2",
//   { style: { color: "brown", fontSize: "larger", textAlign: "center" } },
//   "ABES Engineering College"
// );
// const li1 = React.createElement("li", {}, "React");
// const li2 = React.createElement("li", {}, "Java");
// const li3 = React.createElement("li", {}, "Python");
// const Name = React.createElement("h2", {}, "Ashutosh Kumar");
// const ul = React.createElement(
//   "ul",
//   {
//     sytle: { backgroundColor: "black", color: "white" },
//   },
//   li1,
//   li2,
//   li3
// );
// const img = React.createElement("img", {
//   src: "https://picsum.photos/536/354",
//   style: { borderRadius: "50%", backgroundColor: "blue", width: "200px" },
// });
// const nameDiv = React.createElement(
//   "div",
//   { style: { display: "flex" } },
//   Name,
//   ul
// );
// const nameImg = React.createElement(
//   "div",
//   {
//     style: { display: "flex", justifyContent: "space-evenly", width: "100vh" },
//   },
//   img,
//   nameDiv
// );
// const wrapper = React.createElement("div", {}, h2, nameImg);
// root.render(wrapper);

import React from "react";
import Profile from "./Profile.jsx";
// import ICard from "./ICard";
function App() {
  return (
    <>
      <h1>Hello</h1>
      <Profile />
      {/* <ICard name="Ashutosh Kumar" /> */}
    </>
  );
}
export default App();
