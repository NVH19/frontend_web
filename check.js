document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    // Kiểm tra thông tin đăng nhập (demo, chưa thực hiện kiểm tra đối với backend)
    if (username === "B21DCCN280" && password === "12345678") {
        alert("Đăng nhập thành công!");
    } else {
        document.getElementById("error-message").innerText = "Tên đăng nhập hoặc mật khẩu không chính xác.";
    }
});
document.getElementById("register").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("register-username").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    // Kiểm tra tính hợp lệ của thông tin đăng ký (demo, chưa thực hiện kiểm tra đối với backend)
    if (password !== confirmPassword) {
        document.getElementById("error-message").innerText = "Mật khẩu và xác nhận mật khẩu không khớp.";
    } else {
        alert("Đăng ký thành công!");
    }
});