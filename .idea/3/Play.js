const inputs =document.querySelectorAll('input');
function handle() {
    const suffix = this.dataset.unit || "";
    console.log(this.id);
    document.documentElement.style.setProperty('--'+this.id, this.value+suffix);
}
inputs.forEach(function (input) {
    input.addEventListener('change', handle);
});