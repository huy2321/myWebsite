document.getElementById("login").addEventListener("click", () => {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    
    if(user === "" && pass == "") alert ("Enter your username and password");
    else if (user === "") alert ("Enter your username");
    else if (pass === "") alert ("Enter your password");
     let lisUser = JSON.parse(localStorage.getItem("users"));
     
     let check = lisUser.filter((item) => item.username == user && item.password == pass);

     if (check.length > 0 ) {
        alert("Đăng nhập thành công");

        location.replace("../tet.html");

     }else alert("Sai tài khoản hoặc chưa được đăng kí");
})
