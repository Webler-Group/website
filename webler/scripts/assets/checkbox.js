$$(".checkbox").forEach(el => el.onclick = function() {
    if (el.dataset) {
        if (el.dataset.activated == "off")
            el.dataset.activated = "on";
        else el.dataset.activated = "off";
        eval(el.dataset.event);
    } else {
        if (el.getAttribute("data-activated") == "off")
            el.setAttribute("data-activated", "on");
        else el.setAttribute("data-activated", "off");
        eval(el.getAttribute("data-event"));
    }
});