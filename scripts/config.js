const _c = () => {
    let l = [["Sweetalerts", "Swal"]];
    for (let i = 0; i < l.length; i++) {
        if (window[l[i][1]] == undefined) {
            throw new Error(`The library ${l[i][0]} couldn't be loaded. Check your internet connection and try again.`);
        }
    }
}


let p, b, y = 0, d = false; 


window.on("load", () => { 
    _c();
    $$("img").forEach(el => el.onmousedown = () => { return false; } );
    p = $$(".page-content");
    b = $$(".menubar-item");
    p.forEach(_e => _e.style.display = "none");
    p[0].style.display = "flex";
})
    .on("click", (e) => {
        c._o ? c.c() : [];
        _s = [e.target, Array.from(b)];
        if (_s[1].includes(_s[0].parentNode))
            _s[0] = _s[0].parentNode;
            _s[1].includes(_s[0]) ? (() => { p.forEach(_p => hide(_p)), show(p[_s[1].findIndex(i => i == _s[0])], "flex"); })() : null;
    }, true)
    .on("keyup", (e) => {
        if (e.key == "Enter") {
            _s = [e.target, Array.from(b)];
            _s[1].includes(_s[0]) ? (() => { p.forEach(_p => hide(_p)), show(p[_s[1].findIndex(i => i == _s[0])], "flex"); })() : null;
        }
    }, true)
    .on("beforeunload", () => { /webOS|iPhone|iPad|iPod/.test(navigator.userAgent) ? null : (() => { return "Are you sure you want to leave?"; })(); })
    .on("auxclick", (e) => {
        isNaN(Number(e.which)) ? [] : (() => {
            switch (e.which) {
                // fancy shit soon
                default: break;
            }
        })();
    })
    .on("contextmenu", (e) => {
        e.preventDefault();
        c._o ? c.c() : c.o(e.clientX, e.clientY);
    })
    .on("wheel", (e) => {
        y = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (y >= 0 && y <= Number(window.getComputedStyle($(".banner")).getPropertyValue("height").split("px").join(""))) {
            Math.sign(e.deltaY) == 1 ? window.scrollTo(0, Number(window.getComputedStyle($(".banner")).getPropertyValue("height").split("px").join(""))) : window.scrollTo(0, 0);
        }
    });