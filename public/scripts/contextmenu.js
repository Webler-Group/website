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