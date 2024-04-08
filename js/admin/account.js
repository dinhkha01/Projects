// Hàm này sẽ được gọi khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  const listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
  const tableBody = document
    .getElementById("users-table")
    .querySelector("tbody");

  // Hàm tạo hàng cho mỗi người dùng
  function createUserRow(user) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>
        
        <button onclick="deleteUser('${user.email}')">Xóa</button>
      ${
        user.isLocked
          ? `<button onclick="unlockUser('${user.email}')">Mở khóa</button>`
          : `<button onclick="lockUser('${user.email}')">Khóa</button>`
      }
      </td>
    `;
    return row;
  }
  window.lockUser = function (email) {
    updateLockStatus(email, true);
  };

  window.unlockUser = function (email) {
    updateLockStatus(email, false);
  };

  function updateLockStatus(email, isLocked) {
    let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
    let userIndex = listUsers.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      listUsers[userIndex].isLocked = isLocked;
      localStorage.setItem("listUsers", JSON.stringify(listUsers));
      alert(`Tài khoản đã được ${isLocked ? "khóa" : "mở khóa"} thành công.`);
      location.reload();
    } else {
      alert("Không tìm thấy người dùng.");
    }
  }

  window.deleteUser = function (email) {
    let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];

    const index = listUsers.findIndex((user) => user.email === email);

    if (index !== -1) {
      listUsers.splice(index, 1);

      localStorage.setItem("listUsers", JSON.stringify(listUsers));
      alert("Người dùng đã được xóa thành công.");
      location.reload();
    } else {
      alert("Không tìm thấy người dùng.");
    }
  };

  listUsers.forEach((user) => {
    tableBody.appendChild(createUserRow(user));
  });
});

function searchAccount() {
  const email = document.getElementById("search-email").value;
  const listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
  const account = listUsers.find((user) => user.email === email);
  const searchResults = document.getElementById("search-results");

  if (account) {
    searchResults.innerHTML = `
      <h3>Kết quả tìm kiếm:</h3>
      <p>Email: ${account.email}</p>
      <p>Mật khẩu: ${account.password}</p>
      <p>Tài khoản: ${account.isLocked ? "Đã khóa" : "Hoạt động"}</p>
    `;
  } else {
    searchResults.innerHTML =
      "<p>Không tìm thấy tài khoản với email: " + email + "</p>";
  }
}
