const uploadBtn = document.querySelector('#file');
const imageContainer = document.querySelector('.image-container');
const pickColor = document.querySelector('.pick-color-btn');
const copy = document.querySelector('.copy');
const upload = document.querySelector('.upload');
const hexValueContainer = document.querySelector('.hexValueContainer');
const browserSupport = document.querySelector('.unsupported');
if (window.EyeDropper == undefined) {
    browserSupport.style.display = 'block';
}

let eyeDropper = new EyeDropper();

pickColor.addEventListener('click', (e)=> {
    eyeDropper.open()
    .then(colorSelectionResult => {
        // return hex value
        hexValueContainer.value = colorSelectionResult.sRGBHex;
    })
    .catch(error => {
        alert(error)
    })
})

const fileButton = document.querySelector('.file-button');
const file = document.querySelector('.file');

function uploadButtonClick() {
    if (window.getComputedStyle(upload).color === 'rgb(128, 128, 128)') {
        return false
    }
    else {
        file.click();
    }
}

file.addEventListener('change', function (event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const selectedImage = document.getElementById('selectedImage');
        selectedImage.src = URL.createObjectURL(selectedFile);
        selectedImage.style.display = 'block';
        imageContainer.removeChild(fileButton);
        upload.classList.remove('block');
    }
});

const errorMessage = document.querySelector('.message');
copy.addEventListener('click', function () {
    if (hexValueContainer.value) {
        const hexValue = hexValueContainer.value;
        errorMessage.style.backgroundColor = 'lime';
        errorMessage.innerText = 'Copied!'
    navigator.clipboard.writeText(hexValue)
        .then(() => {
            console.log("Text copied to clipboard");
        })
        .catch((err) => {
            console.error("Error copying text to clipboard: ", err);
        });
    } else {
        errorMessage.style.display = 'flex';
    }
});