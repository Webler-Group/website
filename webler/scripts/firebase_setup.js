auth.createUserWithEmailAndPassword = () => { return "Nah"; };


auth.onAuthStateChanged(q => {
    if (q) {
        $("#login-submit").disabled = true;
        Array.from($$("#signIn input")).forEach(_e => _e.disabled = true);
        $("#logout-submit").disabled = false;
    }
});


let s = $("#signIn");
s.onsubmit = function(e) {
    e.preventDefault();


    const u = s["email"].value;
    const w = s["password"].value;

    auth.signInWithEmailAndPassword(u, w).then(_d => {
        $("#login-submit").disabled = true;
        Array.from($$("#signIn input")).forEach(_e => _e.disabled = true);
        $("#logout-submit").disabled = false;
        Swal.fire({
            icon: "success",
            title: "Successfully signed in!",
            text: "You can now publish codes and posts."
        });
    }, err => { 
        Swal.fire({
            icon: "error",
            title: "Authentication failed!",
            text: err.message
        });
        s.reset();
    });
}

let u = $("#signOut");
u.onsubmit = function(e) {
    e.preventDefault();
    auth.signOut().then(_e => {
        $("#login-submit").disabled = false;
        Array.from($$("#signIn input")).forEach(_e => _e.disabled = false);
        $("#logout-submit").disabled = true;
        u.reset();
        Swal.fire({
            icon: "info",
            title: "Bye!",
            text: "You're now logged out."
        });
    });
}

let a = $("#contact");
a.onsubmit = function(e) {
    e.preventDefault();

    const n = a["name"].value;
    const m = a["contact-email"];
    const x = a["email-text"].value;

    jsondb.ref().child("messages").set({
        [n]: {
            email: m,
            text: x
        }
    }).then(() => {
        delete window[n];
        Swal.fire({
            icon: "success",
            title: "Message has been send!"
        });
    }, (err) => {
        Swal.fire({
            icon: "error",
            title: "Message wasn't send!",
            text: "Something went wrong: " + err
        });
    });
}