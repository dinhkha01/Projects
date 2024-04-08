function searchProduct() {
  // Lấy từ khóa tìm kiếm từ ô nhập liệu
  let keyword = document
    .getElementById("searchInputP")
    .value.toLowerCase()
    .trim();

  // Lấy danh sách sản phẩm từ Local Storage
  let carPorsche = JSON.parse(localStorage.getItem("carPorsche")) || [];

  // Lọc các sản phẩm có tên chứa từ khóa tìm kiếm
  let filteredProducts = carPorsche.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  // Hiển thị kết quả tìm kiếm
  displaySearchResult(filteredProducts);
}

function displaySearchResult(products) {
  let out = "";
  if (products.length === 0) {
    out = "<p>Không tìm thấy sản phẩm nào.</p>";
  } else {
    products.forEach((product) => {
      out += `
        <div class="new-car_item">
          <div class="_left">
            <a><img src="${product.img1}" /></a>
            <a><img src="${product.img2}" /></a>
          </div>
          <div class="_right">
            <div class="the-content-new-car">
              <table class="m-09-techspecs-table">
                <tr class="m-09-techspecs-row">
                  <td class="m-09-techspecs-caption">Mã số</td>
                  <td class="m-09-techspecs-pdk">${product.maso}</td>
                </tr>
                <tr class="m-09-techspecs-row">
                  <td class="m-09-techspecs-caption">Name</td>
                  <td class="m-09-techspecs-pdk">${product.name}</td>
                </tr>
                <tr class="m-09-techspecs-row">
                  <td class="">Ngoại thất</td>
                  <td class="m-09-techspecs-pdk">${product.exterior}</td>
                </tr>
                <tr class="m-09-techspecs-row">
                  <td class="m-09-techspecs-caption">Nội thất</td>
                  <td class="m-09-techspecs-pdk">${product.interior}</td>
                </tr>
                <tr class="m-09-techspecs-row">
                  <td class="m-09-techspecs-caption">Tốc độ</td>
                  <td class="m-09-techspecs-pdk">${product.speed}</td>
                </tr>
                <tr class="m-09-techspecs-row">
                  <td class="m-09-techspecs-caption">Giá bán</td>
                  <td class="m-09-techspecs-pdk">${product.price} VNĐ</td>
                </tr>
              </table>
              <div class="m-132-button-bar">
                <button class="button" onclick="renderProductItem('${product.id}')"> > Xem thêm </button>
                  <button class="button" onclick="deleteProduct('${product.id}')"> > Xóa </button>
                <button class="button" onclick="editProduct('${product.id}')"> > Chỉnh sửa </button>
              
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      `;
    });
  }

  document.getElementById("load").innerHTML = out;
}

// Gọi hàm searchProduct khi người dùng nhấn Enter trong ô tìm kiếm
document
  .getElementById("searchInputP")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });
