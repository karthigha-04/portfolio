// Typing effect
const text = "Karthigha";
const typedText = document.querySelector('.typed-text');
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

document.addEventListener('DOMContentLoaded', type);
