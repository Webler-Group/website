window.on("DOMContentLoaded", () => {
    $(".loader").parentNode.removeChild($(".loader"));
    $("#loading-screen").style.opacity = 0;
    setTimeout(() => {
        hide($("#loading-screen"));
    }, 1000);
});