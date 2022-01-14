const fontSizeСontrolRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${fontSizeСontrolRef.value}px`;
fontSizeСontrolRef.addEventListener('input', sizeText);

function sizeText(event) {
  const currentFontSize = event.currentTarget.value;
  console.log(currentFontSize);

  textRef.style.fontSize = `${currentFontSize}px`;
  textRef.style.transition = '250ms linear';
}
