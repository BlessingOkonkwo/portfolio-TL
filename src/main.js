let save = document.getElementById("save");
let hover_dd = document.getElementById("hover-dd");
let nav_div = document.getElementById("nav-div");
let x = document.getElementById("x");
let bars = document.getElementById("bars");
let display_nav = true;
let hamburger = document.getElementById("hamburger");

save.addEventListener("mouseover", function() {
    hover_dd.classList.remove("hidden");
    hover_dd.classList.add("df");
});

save.addEventListener("mouseout", function() {
    hover_dd.classList.remove("df");
    hover_dd.classList.add("hidden");
});

bars.addEventListener("click", function() {
    if (display_nav == true) {
        nav_div.classList.remove("hidden");
        bars.classList.add("hidden");
        x.classList.remove("hidden");
        display_nav = false;
    }else {
        nav_div.classList.add("hidden");
        x.classList.add("hidden");
        bars.classList.remove("hidden");
        display_nav = true;
    }
    
});

x.addEventListener("click", function() {
    if (display_nav == true) {
        nav_div.classList.remove("hidden");
        bars.classList.add("hidden");
        x.classList.remove("hidden");
        display_nav = false;
    }else {
        nav_div.classList.add("hidden");
        x.classList.add("hidden");
        bars.classList.remove("hidden");
        display_nav = true;
    }
    
});

hamburger.addEventListener("click", function() {
    hamburger.classList.add("m-20");
})

const addred = () => {
    hamburger.classList.add("m-20");
}
