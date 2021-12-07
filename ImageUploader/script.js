const uploadedFile = document.getElementById("file");
const outputImg = document.getElementById("output")
uploadedFile.addEventListener('input', function upload(event) {
    outputImg.src = URL.createObjectURL(event.target.files[0]);
})