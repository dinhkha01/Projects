function uuid() {
  return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999);
}

document.addEventListener("DOMContentLoaded", function () {
  Validator({
    form: "#form-1",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [
      Validator.isEmail("#email"),
      Validator.minLength("#password", 6),
      Validator.isRequired("#password_confirmation"),
      Validator.isConfirmed(
        "#password_confirmation",
        function () {
          return document.querySelector("#form-1 #password").value;
        },
        "Mật khẩu nhập lại không chính xác"
      ),
    ],
    onSubmit: function (data) {
      let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
      let flag = true;
      for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].email == data.email) {
          flag = false;
          break;
        }
      }
      if (flag) {
        data.idUser = uuid();
        data.cartUser = [];
        data.purchaseHistory = [];

        listUsers.push(data);
        localStorage.setItem("listUsers", JSON.stringify(listUsers));
        alert("Đăng kí thành công");
        function changeToLoginPage() {
          window.location.href = "/pages/loginForm.html";
        }
        setTimeout(changeToLoginPage, 1000);
      } else {
        alert("Email đã tồn tại");
      }
    },
  });
});
