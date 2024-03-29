let loginForm = document.querySelector("form.login");
let signupForm = document.querySelector("form.sign-up");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");

// Ẩn form đăng ký ngay từ đầu
signupForm.style.display = "none";

// Hiển thị form đăng nhập ngay từ đầu
loginForm.style.display = "block"; // Set login form to display by default

signupBtn.onclick = (() => {
  loginForm.style.display = "none"; // Ẩn form đăng nhập
  signupForm.style.display = "block"; // Hiển thị form đăng ký
});

loginBtn.onclick = (() => {
  loginForm.style.display = "block"; // Hiển thị form đăng nhập
  signupForm.style.display = "none"; // Ẩn form đăng ký
  
});

