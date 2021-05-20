function o() {
    if (window.getComputedStyle($(".sidebar")).getPropertyValue("left").split("px").join("") != 0) {
        hide($(".sidebar-open"));
        $(".sidebar").style.left = 0;
    } else {
        show($(".sidebar-open"), "flex");
        $(".sidebar").style.left = "-1" + window.getComputedStyle($(".sidebar")).getPropertyValue("width");
    }
}

function C() {
    show($(".sidebar-open"), "flex");
    $(".sidebar").style.left = "-1" + window.getComputedStyle($(".sidebar")).getPropertyValue("width");
}

$(".sidebar-open").onclick = () => { o(); }, $(".sidebar-open").onkeyup = (e) => { e.key == "Enter" ? o() : null; };

$(".sidebar-close").onclick = () => { C(); }, $(".sidebar-close").onkeyup = (e) => { e.key == "Enter" ? C() : null; };

window.onload = () => {
    $(".header-caption-text").style.width = 1300 + "px";
    setTimeout(() => { $$(".fadein-bottom")[0].style.marginTop = 0; }, 700);
    setTimeout(() => { $$(".fadein-bottom")[1].style.marginTop = 0; }, 1000);
}

function toggleNightmode() {
    if (String($("body").getAttribute("class")).includes("dark-theme")) {
        $("body").removeAttribute("class", "dark-theme");
        eval(localStorage.getItem("activated")) ? localStorage.removeItem("theme") : null;
    } else {
        $("body").setAttribute("class", "dark-theme");
        eval(localStorage.getItem("activated")) ? localStorage.setItem("theme", String($("body").getAttribute("class"))) : null;
    }
}