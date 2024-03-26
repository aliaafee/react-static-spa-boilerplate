import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello webpack";
  element.classList.add("hello");
  element.classList.add("bg-red-300");

  return element;
}

document.getElementById("app").appendChild(component());
