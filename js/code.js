let button_up = document.querySelector(".scroll");

// scroll up
window.onscroll = function(){
    if (window.scrollY >= 600) {
        button_up.style.display = "block";
    }else {
        button_up.style.display = "none";
    }
}
button_up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}