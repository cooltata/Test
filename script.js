document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表单提交

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 在这里进行登录验证，可以使用AJAX请求发送用户名和密码给服务器进行验证

    // 示例：简单的用户名和密码验证
    if (username === "admin" && password === "password") {
        alert("登录成功！");
    } else {
        alert("用户名或密码错误！");
    }
});

