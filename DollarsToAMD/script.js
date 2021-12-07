const usd = document.getElementById("usd");
const amd = document.getElementById("amd");

usd.addEventListener('input', function convert(event) {
    amd.value = 492.41 * event.target.value;
})