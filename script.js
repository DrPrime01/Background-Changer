const body = document.body;
const button = document.querySelector('button');
const text = document.getElementsByTagName('p')

button.addEventListener('click', changeBG)

function changeRGB() {
    return Math.floor(Math.random()*256);
}

function changeBG() {
    let color1 = changeBG();
    let color2 = changeBG();
    let color3 = changeBG();

    let rgb = `rgb(${color1}, ${color2}, ${color3})`
    body.style.backgroundColor = rgb;

    text.innerText = rgb;
}