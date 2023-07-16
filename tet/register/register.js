document.getElementById("register").addEventListener("click", () => {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "" && pass == "") alert("Enter your username and password");
    else if (user === "") alert("Enter your username");
    else if (pass === "") alert("Enter your password");
    else if (localStorage.users) {
        let ListUser = JSON.parse(localStorage.getItem("users"));
        ListUser.push(
            {
                username: user,
                password: pass,
            }
        )
        localStorage.setItem("users", JSON.stringify(ListUser))
        location.replace("../Login/login.html")

    }
    else {
        localStorage.setItem("users", JSON.stringify([
            {
                username: user,
                password: pass,
            }
        ])
        );
        location.replace("../Login/login.html")
    }
});
