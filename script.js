const uploadBtn = document.querySelector('#file');
const imageContainer = document.querySelector('.image-container');
const pickColor = document.querySelector('.pick-color-btn');
const copy = document.querySelector('.copy');
const upload = document.querySelector('.upload');
const hexValueContainer = document.querySelector('.hexValueContainer');

if (window.EyeDropper == undefined) {
    console.log('EyeDropper API not supported on this platform')
}

// let eyeDropper = new EyeDropper();

// pickColor.addEventListener('click', (e)=> {
//     eyeDropper.open()
//     .then(colorSelectionResult => {
//         // return hex value
//         console.log(colorSelectionResult.sRGBHex)
//     })
//     .catch(error => {
//         alert(error)
//     })
// })

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
