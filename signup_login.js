// tạo tài khoản mặc định
var userDefault = {
    usernameDefault : 'duc',
    emailDefault: 'stu715105047@hnue.edu.vn',
    passwordDefault: 1234
}
// mảng danh sách tài khoản với userDefault là tài khoản đầu tiên và là tài khoản mặc định
// userList.push(userDefault); // đẩy userDefault vào danh sách
// localStorage.setItem('UserAccount', JSON.stringify(userList)) // khi vào trang đăng nhập đăng kí sẽ tự động lưu tài khoản mặc định

// xóa hết tất cả những gì đã nhập trong form đăng kí
function resetSignup() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
}
// Hàm xử lý đăng ký người dùng
function signUp(event){
    // Ngăn chặn sự kiện gửi mặc định của biểu mẫu
    event.preventDefault();

    // Lấy giá trị từ biểu mẫu
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    // Tạo đối tượng người dùng
    var user = {
        username: username,
        email: email,
        password: password,
    }

    // Chuyển đổi đối tượng người dùng thành chuỗi JSON
    var json = JSON.stringify(user);

    // Lưu chuỗi JSON vào localStorage với key là email
    localStorage.setItem(email, json);

    // Thông báo đăng ký thành công
    alert("Đăng ký thành công!");
    // reset lại ô input sign up
    resetSignup();
    
}

// Hàm xử lý đăng nhập người dùng
function login(event){
    // Ngăn chặn sự kiện gửi mặc định của biểu mẫu
    event.preventDefault();

    // Lấy giá trị từ biểu mẫu
    var email = document.getElementById("email_login").value;
    var password = document.getElementById("mk").value;

    // Lấy dữ liệu người dùng từ localStorage dựa trên địa chỉ email đã nhập
    var user = localStorage.getItem(email);

    if(email == "" && password == "" ){
        // Người dùng không được tìm thấy, thông báo người dùng cung cấp thông tin hợp lệ
        alert("Vui lòng nhập đủ thông tin!");
    } 
    // kiểm tra có khớp với tài khoản mặc định ko
    else if (email == userDefault.emailDefault && password == userDefault.passwordDefault ) {
                alert("Đăng nhập thành công");
                window.location.href = "trangchu.html";
    }
    else {
        // Người dùng được tìm thấy, chuyển từ JSON thành object
        var data = JSON.parse(user);

        // Kiểm tra xem mật khẩu đã nhập có khớp với mật khẩu đã lưu không
        if(email == data.email && password == data.password){
            // Đăng nhập thành công, chuyển hướng đến trang mong muốn
            alert("Đăng nhập thành công!");
            window.location.href = "trangchu.html";
        } else {
            // Mật khẩu không đúng, thông báo cho người dùng về việc đăng nhập thất bại
            alert("Đăng nhập thất bại");
        }
    }
}



