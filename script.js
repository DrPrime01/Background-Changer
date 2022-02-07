const body = document.body;
const button = document.querySelector('button');
const textColor = document.getElementById("rbg");

button.addEventListener('click', changeBG)

function changeRGB() {
    return Math.floor(Math.random()*256);
}

function changeBG() {
    let color1 = changeRBG();
    let color2 = changeRBG();
    let color3 = changeRBG();

    let rgb = `rgb(${color1}, ${color2}, ${color3})`
    body.style.backgroundColor = rgb;

    textColor.innerText = rgb;
}