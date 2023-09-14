const fontSizeChange = document.getElementById('font-size-control');
const textChange = document.getElementById('text');

const uptadeFontSize = () => {
    const fontSize = fontSizeChange.value + 'px';
    textChange.style.fontSize = fontSize
}

fontSizeChange.addEventListener('input', uptadeFontSize)
uptadeFontSize()