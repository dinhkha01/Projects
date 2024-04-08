const carMer = [
  {
    id: "M1",
    img1: "/img/MerGLB/Truoc.webp",
    img2: "/img/MerGLB/sau.webp",
    img3: "/img/MerGLB/mam.webp",
    img4: "/img/MerGLB/so.webp",
    img5: "/img/MerGLB/ghe.webp",
    maso: "243800 ",
    name: "GLB",

    exterior: "Xám",
    interior: "Nâu",
    speed: "207 (km / h)",
    price: "2,089,000,000 ",
    // Thông số kỹ thuật
    engine: "I4",
    displacement: "	1332",
    maxPower: "	120 kW [163 hp]    ",
    maxTorque: "	250 Nm",
    acceleration: "	9,1s ",
    maxSpeed: "207 ",
    weight: "	1681/604 ",
    fuelConsumption: "	12.1 ",
    dimensions: "	4655 x 1840 x 1680 ",
  },
  {
    id: "M2",
    img1: "/img/GLC 300/truoc.webp",
    img2: "/img/GLC 300/sau.webp",
    img3: "/img/GLC 300/lai.webp",
    img4: "/img/GLC 300/tay.webp",
    img5: "/img/GLC 300/mam.webp",

    maso: "233503",
    name: "GLC 300",
    exterior: "Xanh ",
    interior: "Đen",
    speed: "272(km / h)",
    price: "2.978.017.000 ",
    // Thông số kỹ thuật
    engine: "I4 2.0",
    displacement: "1.991",
    maxPower: "258hp tại 6100 vòng/phút ",
    maxTorque: "370/1800-4000 ",
    acceleration: "4.5 ",
    maxSpeed: "272 ",
    weight: "1960 ",
    fuelConsumption: "10,48",
    dimensions: "4670x1900x1650 ",
  },
];

function load() {
  var out = "";
  const carMer = JSON.parse(localStorage.getItem("carMer")) || [];
  for (let i = 0; i < carMer.length; i++) {
    out += `<div class="new-car_item">
      <div class="_left">
        <a><img src="${carMer[i].img1}" /></a>
        <a><img src="${carMer[i].img2}" /></a>
      </div>
      <div class="_right">
        <div class="the-content-new-car">
          <table class="m-09-techspecs-table">
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Mã số</td>
              <td class="m-09-techspecs-pdk">${carMer[i].maso}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Name</td>
              <td class="m-09-techspecs-pdk">${carMer[i].name}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="">Ngoại thất</td>
              <td class="m-09-techspecs-pdk">${carMer[i].exterior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Nội thất</td>
              <td class="m-09-techspecs-pdk">${carMer[i].interior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Tốc độ</td>
              <td class="m-09-techspecs-pdk">${carMer[i].speed}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Giá bán</td>
              <td class="m-09-techspecs-pdk">${carMer[i].price} VNĐ</td>
            </tr>
          </table>
          <div class="m-132-button-bar">
            
            <button class="buttonL" onclick="addToFavorites('${carMer[i].id}')"> <i class="fas fa-heart"></i></button>
            <button class="button" onclick="renderProductItem('${carMer[i].id}')"> > Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />`;
  }
  document.getElementById("loadM").innerHTML = out;
  localStorage.setItem("carMer", JSON.stringify(carMer));
}
function addToFavorites(id) {
  const carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Lấy danh sách sản phẩm yêu thích từ Local Storage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Kiểm tra xem sản phẩm đã được thêm vào yêu thích trước đó chưa
  if (favorites.some((product) => product.id === id)) {
    alert("Sản phẩm đã được thêm vào yêu thích trước đó.");
    return;
  }

  // Lấy sản phẩm từ danh sách sản phẩm Porsche theo id
  const productToAdd = carMer.find((product) => product.id === id);

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
    const carMer = JSON.parse(localStorage.getItem("carMer")) || [];
    // Tìm sản phẩm theo id
    const product = carMer.find((p) => p.id === id);
    if (!product) {
      alert("Không tìm thấy sản phẩm!");
      return;
    }

    // Lưu chi tiết sản phẩm vào Local Storage
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // Chuyển hướng đến trang hiển thị chi tiết sản phẩm
    window.location.href = "/pages/mer/hienthiM.html";
  } else {
    // Nếu chưa đăng nhập, thông báo cho người dùng và chuyển hướng đến trang đăng nhập
    alert("Vui lòng đăng nhập để xem thông tin chi tiết sản phẩm.");
  }
}

// Lấy thông tin chi tiết sản phẩm từ Local Storage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Hiển thị thông tin chi tiết sản phẩm
if (product) {
  document.getElementById("Mec").innerHTML = `
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
  const carMer = JSON.parse(localStorage.getItem("carMer")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productToAdd = carMer.find((product) => product.id === id);

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
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  // Lấy danh sách sản phẩm từ Local Storage
  let carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Lọc các sản phẩm có tên chứa từ khóa tìm kiếm
  let filteredProducts = carMer.filter((product) =>
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

  document.getElementById("loadM").innerHTML = out;
}

// Gọi hàm searchProduct khi người dùng nhấn Enter trong ô tìm kiếm
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProduct();
    }
  });
function sortByPrice(order) {
  // Lấy danh sách sản phẩm từ Local Storage
  let carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Sắp xếp sản phẩm theo giá từ thấp đến cao
  if (order === "asc") {
    carMer.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (order === "desc") {
    // Nếu muốn sắp xếp từ cao đến thấp
    carMer.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  // Hiển thị danh sách sản phẩm đã được sắp xếp
  displaySearchResult(carMer);
}
function sortByPrice(order) {
  // Lấy danh sách sản phẩm từ Local Storage
  let carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Sắp xếp sản phẩm theo giá từ cao đến thấp
  if (order === "desc") {
    carMer.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (order === "asc") {
    // Nếu muốn sắp xếp từ thấp đến cao
    carMer.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }

  // Hiển thị danh sách sản phẩm đã được sắp xếp
  displaySearchResult(carMer);
}
