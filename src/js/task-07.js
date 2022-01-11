const fontSizeСontrolRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeСontrolRef.addEventListener('input', sizeText);

function sizeText(event) {
  const currentFontSize = event.currentTarget.value;

  textRef.style.fontSize = `${currentFontSize}px`;
}
