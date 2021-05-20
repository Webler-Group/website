const IS_MOBILE_DEVICE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent);



const c = {
    o(x, y) {
        show($("#contextmenu"));
        css($("#contextmenu"), {left: x + "px", top: y + "px"});
        this._o = true;
    },
    c() {
        hide($("#contextmenu"));
        this._o = false;
    },
    _o: false
}



const _c = () => {
    let l = [["Sweetalerts", "Swal"]];
    for (let i = 0; i < l.length; i++) {
        if (window[l[i][1]] == undefined) {
            throw new Error(`The library ${l[i][0]} couldn't be loaded. Check your internet connection and try again.`);
        }
    }
}



// taken from GitHub/DonDejvo for loading reasons

const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const id = arg => document.getElementById(arg);
const cl = arg => document.getElementsByClassName(arg);
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const css = (html_elem, styles) => { for(let attr in styles) html_elem.style[attr] = styles[attr]; }
const hide = html_elem => { html_elem.style.display = "none"; }
const show = (html_elem, value = "block") => { html_elem.style.display = value; }



let p, b, y = 0, d = false; 


window.on("load", () => {
        _c();        
        if (window.localStorage) {
            if (eval(localStorage.getItem("activated"))) {
                $("#keepsettings").dataset.activated = "on";
                h = localStorage.getItem("theme"),
                $("body").setAttribute("class", h);
                $("#nightmode").dataset.activated = h == "dark-theme" ? "on" : "off";
            }
        }
        Array.from($$("a")).forEach(e => e.ondragstart = () => { return false; });
        if (!(window.CSS && CSS.supports("display", "flex"))) {
            document.write("<p align='center' style='position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);'>Your browser is outdated and is currently not supported by our website.</p>");
        }
    })
    .on("click", (e) => {
        p = $$(".page-content");
        b = $$(".menubar-item");
        c._o ? c.c() : [];
        _s = [e.target, Array.from(b)];
        _s[1].includes(_s[0].parentNode) ? _s[0] = _s[0].parentNode : _s[1].includes(_s[0].parentNode.parentNode) ? _s[0] = _s[0].parentNode.parentNode : _s[1].includes(_s[0].parentNode.parentNode.parentNode) ? _s[0] = _s[0].parentNode.parentNode.parentNode : null;
        if (_s[1].includes(_s[0])) {
            _s[0].dataset && _s[0].dataset.enabled !== "off" ? location.href = _s[0].dataset.redirect : _s[0].getAttribute("data-enabled") == "on" ? location.href = _s[0].getAttribute("data-redirect") : null;
        }
    })
    .on("keyup", (e) => {
        if (e.key == "Enter") {
            _s = [e.target, Array.from(b)];
            if (_s[1].includes(_s[0])) {
                _s[0].dataset && _s[0].dataset.enabled !== "off" ? location.href = _s[0].dataset.redirect : _s[0].getAttribute("data-enabled") == "on" ? location.href = _s[0].getAttribute("data-redirect") : null;
            }
        } else if (e.key == "Escape") {
            o();
        }
    })
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
        //c._o ? c.c() : c.o(e.clientX, e.clientY);
    })
    .on("scroll", () => {
        if (window.scrollY > 50) {
            $(".headbar").dataset.hidden = "false";
            $(".headbar-background").dataset.hidden = "false";
        } else {
            $(".headbar").dataset.hidden = "true";
            $(".headbar-background").dataset.hidden = "true";
        }
    })
    .on("offline", () => {
        document.write("<p align='center' style='position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);'><label for='offline-reload''>You are offline! Connect to the internet and reload the page.</label><br /><input id='offline-reload' type='button' value='Reload' onclick='location.reload();'/></p>");
    });

function _l() {
    if (window.localStorage) {
        if (!eval(localStorage.getItem("activated"))) {
            localStorage.setItem("activated", true);
            localStorage.setItem("theme", $("#nightmode").dataset.activated == "on" ? "dark-theme" : null);
        } else {
            localStorage.setItem("activated", false);
            localStorage.removeItem("theme");
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Outdated browser!",
            text: "Your browser is outdated and doesn't support this feature."
        });
        $("#keepsettings").dataset.activated = "off";
    }
}