const carBMW = [
  {
    id: "B1",
    img1: "/img/BMW X3/truoc.jpg",
    img2: "/img/BMW X3/tong.jpg",
    img3: "/img/BMW X3/cop.jpg",
    img4: "/img/BMW X3/ghe.jpg",
    img5: "/img/BMW X3/lai.jpg ",
    maso: "243800 ",
    name: "BMW X3",

    exterior: "Xanh Dương",
    interior: "Nâu",
    speed: "207 (km / h)",
    price: "2.299.000.000 ",
    // Thông số kỹ thuật
    engine: "B48, Xăng, I4, 2.0 TwinPower Turbo",
    displacement: "1.998	",
    maxPower: "	184hp/5000 – 6500    ",
    maxTorque: "	300 Nm/1350 – 4000",
    acceleration: "	9,1s ",
    maxSpeed: "207 ",
    weight: "1.805 ",
    fuelConsumption: "	 7,3 ",
    dimensions: "	4708 x1891x1676 ",
  },
  {
    id: "B2",
    img1: "/img/BMW X6/truoc.jpg",
    img2: "/img/BMW X6/sau.jpg",
    img3: "/img/BMW X6/lai.jpg",
    img4: "/img/BMW X6/den.jpg",
    img5: "/img/BMW X6/ghe.jpg",

    maso: "233599",
    name: "BMW X6",
    exterior: "Đen - Be",
    interior: "Đỏ",
    speed: "250(km / h)",
    price: "4.549.000.000 ",
    // Thông số kỹ thuật
    engine: "B58, Xăng, I6, 3.0 TwinPower Turbo",
    displacement: "2.998",
    maxPower: "340/5500 – 6500 ",
    maxTorque: "450/1500 – 5200 ",
    acceleration: "6 ",
    maxSpeed: "300",
    weight: "2.130",
    fuelConsumption: "8,6",
    dimensions: "4935x2004x1696 ",
  },
];

function load() {
  var out = "";
  let carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];
  for (let i = 0; i < carBMW.length; i++) {
    out += `<div class="new-car_item">
      <div class="_left">
        <a><img src="${carBMW[i].img1}" /></a>
        <a><img src="${carBMW[i].img2}" /></a>
      </div>
      <div class="_right">
        <div class="the-content-new-car">
          <table class="m-09-techspecs-table">
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Mã số</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].maso}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Name</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].name}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="">Ngoại thất</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].exterior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Nội thất</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].interior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Tốc độ</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].speed}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Giá bán</td>
              <td class="m-09-techspecs-pdk">${carBMW[i].price} VNĐ</td>
            </tr>
          </table>
          <div class="m-132-button-bar">
          <button class="buttonL" onclick="addToFavorites('${carBMW[i].id}')"> <i class="fas fa-heart"></i></button>
            <button class="button" onclick="renderProductItem('${carBMW[i].id}')" > > Xem thêm </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />`;
  }
  document.getElementById("loadB").innerHTML = out;
  // Cập nhật lại danh sách xe trong localStorage
  localStorage.setItem("carBMW", JSON.stringify(carBMW));
}
function addToFavorites(id) {
  const carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

  // Lấy danh sách sản phẩm yêu thích từ Local Storage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Kiểm tra xem sản phẩm đã được thêm vào yêu thích trước đó chưa
  if (favorites.some((product) => product.id === id)) {
    alert("Sản phẩm đã được thêm vào yêu thích trước đó.");
    return;
  }

  // Lấy sản phẩm từ danh sách sản phẩm Porsche theo id
  const productToAdd = carBMW.find((product) => product.id === id);

  // Kiểm tra xem sản phẩm tồn tại hay không
  if (!productToAdd) {
    alert("Không tìm thấy sản phẩm.");
    return;
  }

  // Thêm sản phẩm vào danh sách yêu thích
  favorites.push(productToAdd);

  // Lưu danh sách yêu thích vào Local Storage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert("Sản phẩm đã được thêm vào trang yêu thích.");
}
function checkLoggedIn() {
  // Thực hiện các kiểm tra để xác định trạng thái đăng nhập của người dùng
  // Ví dụ: kiểm tra xem có thông tin đăng nhập của người dùng trong localStorage không
  const userEmail = localStorage.getItem("checkLogin");
  if (userEmail) {
    // Nếu đã đăng nhập, trả về true
    return true;
  } else {
    // Ngược lại, trả về false
    return false;
  }
}
function renderProductItem(id) {
  // Kiểm tra trạng thái đăng nhập của người dùng
  const isLoggedIn = checkLoggedIn();

  // Nếu người dùng đã đăng nhập, hiển thị thông tin chi tiết sản phẩm
  if (isLoggedIn) {
    // Lấy danh sách sản phẩm từ localStorage
    const carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

    // Tìm sản phẩm theo id trong danh sách sản phẩm đã lưu
    const product = carBMW.find((p) => p.id === id);

    if (!product) {
      alert("Không tìm thấy sản phẩm!");
      return;
    }

    // Lưu chi tiết sản phẩm vào Local Storage
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // Chuyển hướng đến trang hiển thị chi tiết sản phẩm
    window.location.href = "/pages/bmw/hienthiB.html";
  } else {
    // Nếu chưa đăng nhập, thông báo cho người dùng và chuyển hướng đến trang đăng nhập
    alert("Vui lòng đăng nhập để xem thông tin chi tiết sản phẩm.");
  }
}

// Lấy thông tin chi tiết sản phẩm từ Local Storage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Hiển thị thông tin chi tiết sản phẩm
if (product) {
  document.getElementById("bmw").innerHTML = `
          <div class="new-cars-content">
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="name">
         <h2>${product.name}</h2>
         <button class="buttonAdd" onclick="addToCart('${product.id}')"> <i class="fas fa-shopping-cart fa-lg"></i></button>
         </div>
            
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${product.img1}" class="d-block w-100" alt="${product.name}" />
          </div>
          <div class="carousel-item">
            <img src="${product.img2}" class="d-block w-100" alt="${product.name}" />
          </div>
          <div class="carousel-item">
            <img src="${product.img3}" class="d-block w-100" alt="${product.name}" />
          </div>
          <div class="carousel-item">
            <img src="${product.img4}" class="d-block w-100" alt="${product.name}" />
          </div>
           <div class="carousel-item">
            <img src="${product.img5}" class="d-block w-100" alt="${product.name}" />
          </div>
        
          
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    <div class="parameter">
        <table>
            <tbody>
                <h2>${product.name}</h2>
                
                <tr>
                    <td>Giá bán</td>
                    <td>${product.price} VNĐ </td>
                </tr>
                <tr>
                    <td>Mã số</td>
                    <td>${product.maso}</td>
                </tr>
                <tr>
                    <td>Ngoại thất</td>
                    <td>${product.exterior}</td>
                </tr>
                <tr>
                    <td>Nội thất</td>
                    <td>${product.interior}</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <table style="width: 538px;">
            <tbody>
                <h2>Thông số kỹ thuật</h2>
                <tr style="height: 48.8125px;">
                    <td style="height: 48.8125px; width: 383px;"><span style="color: #000000;">Động cơ</span></td>
                    <td style="text-align: right; height: 48.8125px; width: 139px;"><span style="color: #000000;">${product.engine}</span></td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Dung tích (cc)</span></td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span
                            style="color: #000000;">${product.displacement}</span></td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Công suất tối đa
                            (hp/rpm)</span></td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span style="color: #000000;">${product.maxPower}</span></td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Mô-men xoắn cực đại
                            (Nm/rpm)</span></td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span style="color: #000000;">${product.maxTorque}</span></td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Thời gian tăng tốc (s/giây)
                            (0~100km/giờ)</span></td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span style="color: #000000;">${product.acceleration}</span>
                    </td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Tốc độ tối đa (km/giờ)</span>
                    </td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span style="color: #000000;">${product.maxSpeed}</span>
                    </td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Tự trọng (DIN) (kg)</span>
                    </td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span
                            style="color: #000000;">${product.weight}</span></td>
                </tr>
                <tr style="height: 24px;">
                    <td style="height: 24px; width: 383px;"><span style="color: #000000;">Tiêu hao nhiên liệu
                            (l/100km)</span></td>
                    <td style="text-align: right; height: 24px; width: 139px;"><span style="color: #000000;">${product.fuelConsumption}</span>
                    </td>
                </tr>
                <tr style="height: 48px;">
                    <td style="height: 48px; width: 383px;"><span style="color: #000000;">Kích thước 
                            hậu (dài/rộng/cao)(m) </span></td>
                    <td style="text-align: right; height: 48px; width: 139px;"><span style="color: #000000;">${product.dimensions}</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    `;
} else {
  alert("Không có thông tin sản phẩm để hiển thị!");
}
function addToCart(id) {
  const carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productToAdd = carBMW.find((product) => product.id === id);

  if (!productToAdd) {
    alert("Sản phẩm không tồn tại.");
    return;
  }

  let existingProduct = cart.find((product) => product.id === productToAdd.id);

  if (existingProduct) {
    // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
    existingProduct.quantity += 1;
  } else {
    // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
    productToAdd.quantity = 1; // Thiết lập số lượng ban đầu là 1
    cart.push(productToAdd);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Sản phẩm đã được cập nhật trong giỏ hàng.");
}

// Gọi hàm load khi trang web được tải để hiển thị thông tin xe và lưu vào localStorage
load();

// Hàm kiểm tra trạng thái đăng nhập của người dùng
function logOut() {
  // Xóa thông tin đăng nhập
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favorites");
  localStorage.removeItem("cart");

  // Chuyển hướng đến trang đăng nhập
  window.location.href = "/pages/homeInOut.html";
}

function searchProduct() {
  // Lấy từ khóa tìm kiếm từ ô nhập liệu
  let keyword = document
    .getElementById("searchInputB")
    .value.toLowerCase()
    .trim();

  // Lấy danh sách sản phẩm từ Local Storage
  let carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

  // Lọc các sản phẩm có tên chứa từ khóa tìm kiếm
  let filteredProducts = carBMW.filter((product) =>
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
                <button class="button" onclick="renderProductItem('${product.id}')">Xem thêm >></button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
      `;
    });
  }

  document.getElementById("loadB").innerHTML = out;
}

// Gọi hàm searchProduct khi người dùng nhấn Enter trong ô tìm kiếm
document
  .getElementById("searchInputB")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });
function sortByPrice(order) {
  // Lấy danh sách sản phẩm từ Local Storage
  let carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

  // Sắp xếp sản phẩm theo giá từ thấp đến cao
  if (order === "asc") {
    carBMW.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (order === "desc") {
    // Nếu muốn sắp xếp từ cao đến thấp
    carBMW.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  // Hiển thị danh sách sản phẩm đã được sắp xếp
  displaySearchResult(carBMW);
}
function sortByPrice(order) {
  // Lấy danh sách sản phẩm từ Local Storage
  let carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

  // Sắp xếp sản phẩm theo giá từ cao đến thấp
  if (order === "desc") {
    carBMW.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (order === "asc") {
    // Nếu muốn sắp xếp từ thấp đến cao
    carBMW.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }

  // Hiển thị danh sách sản phẩm đã được sắp xếp
  displaySearchResult(carBMW);
}
