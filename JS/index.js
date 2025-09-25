// const data = function (name, age, branch) {
//   return "Hi " + name + " My age is " + age + " My branch is " + branch;
// };

// console.log(data("Ashutosh", 20, "CSE"));

// const info = (...key) => {
//   console.dir(key);
// };
// console.log(info("Ashutosh", "helo"));

function info(str = "hii") {
  console.log("hello" + str);
}
info();

//IIFE -> Immediately Invoked function
(function () {
  console.log("Hi, inside function");
})();

function selectLanguages(lang = "java") {
  let data = "what the hell";
  if (lang == "java") {
    function javaCompiler() {
      return "java compiler calling";
    }
    data = javaCompiler();
  } else if (lang == "c") {
    function cCompiler() {
      return "c compiler calling";
    }
    data = cCompiler();
  }
  return data;
}

console.log(selectLanguages());
