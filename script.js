const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText !== "" && item.id === "equal") {
      display.innerText = eval(
        display.innerText.replace(/×/g, "*").replace(/÷/g, "/")
      );
    } else if (display.innerText === "" && item.id === "equal") {
      display.innerText = "Please Enter Something To Calculate";
      setTimeout(() => {
        display.innerText = "";
      }, 3000);
    } else {
      display.innerText += item.innerText;
    }
  };
});
