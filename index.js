document.querySelector("img.button").addEventListener("click", function() {
    document.querySelector("img.error").classList.toggle("hide");
    document.querySelector("p.err-message").classList.toggle("hide");
});