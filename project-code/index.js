const charSlider = document.getElementById('char-length-input');
const charOutput = document.querySelector('.char-length-output');


const styleCharSlider = () => {
    const min = charSlider.min;
    const max = charSlider.max;
    const val = charSlider.value;
  
    charSlider.style.backgroundSize = (val - min) * 99 / (max - min) + '% 100%';
}

const getSliderValue = () => {
    charOutput.textContent = charSlider.value;
}

const handleSlider = () => {
    styleCharSlider();
    getSliderValue();
}

charSlider.addEventListener('input', handleSlider);

