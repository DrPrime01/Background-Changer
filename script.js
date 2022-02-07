const body = document.body;
const button = document.querySelector("button");
const textColor = document.getElementById("rgb");

button.addEventListener('click', changeBG);

function changeRGB() {
    return Math.floor(Math.random() * 256);
}

function changeBG() {
    let color1 = changeRGB();
    let color2 = changeRGB();
    let color3 = changeRGB();

    let rgb = `rgb(${color1}, ${color2}, ${color3})`;
    body.style.backgroundColor = rgb;

    textColor.innerText = rgb;
}

/*const body = document.body;
const button = document.querySelector("button");
const textColor = document.getElementById("rgb");

button.addEventListener("click", changeBG);

function changeBG() {
  let color1 = changeRGB();
  let color2 = changeRGB();
  let color3 = changeRGB();

  let rgb = `rgb(${color1}, ${color2}, ${color3})`;
  body.style.backgroundColor = rgb;
  console.log(rgb);
  textColor.innerText = rgb;
}

function changeRGB() {
  return Math.floor(Math.random() * 256);
}*/
