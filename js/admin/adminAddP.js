const carPorsche = [
  {
    id: "Po1",
    img1: "/img/cayenne/cayenneTruoc.jpg",
    img2: "/img/cayenne/cayenneSau.jpg",
    img3: "/img/cayenne/cayenneDit.jpg",
    img4: "/img/cayenne/cayenneDen.jpg",
    img5: "/img/cayenne/cayenneMam.jpg",
    img6: "/img/cayenne/cayenneNoithat.jpg",
    maso: "243807",
    name: "Cayenne Coupé",
    exterior: "Xanh Ánh Kim",
    interior: "Đen - Be",
    speed: "248(km / h)",
    price: "6.211.800.000 ",
    // Thông số kỹ thuật
    engine: "Tăng áp kép, V6",
    displacement: "	2.995",
    maxPower: "	353 ",
    maxTorque: "	500 ",
    acceleration: "	5,7 ",
    maxSpeed: "248 ",
    weight: "	2.085 ",
    fuelConsumption: "	12.1 – 10.9",
    dimensions: "	4,930 x 2,194 x 1,678 ",
  },
  {
    id: "Po2",
    img1: "/img/Macan/Macan-GTS-Truoc.jpg",
    img2: "/img/Macan/Macan-GTS-Sau.jpg",
    img3: "/img/Macan/Macan-GTS-mam.jpg",
    img4: "/img/Macan/Macan-GTS-Bo.jpg",
    img5: "/img/Macan/Macan-GTS-Noithat.jpg",
    img6: "/img/Macan/Macan-GTS-Capo.jpg",

    maso: "233500",
    name: "Macan GTS",
    exterior: "Xanh Olive",
    interior: "Đen",
    speed: "272(km / h)",
    price: "6.579.900.000 ",
    // Thông số kỹ thuật
    engine: "Tăng áp kép, V6",
    displacement: "2.894 ",
    maxPower: "440 /5700 – 6600 ",
    maxTorque: "550 /1900 – 5600 ",
    acceleration: "4.5 ",
    maxSpeed: "272 ",
    weight: "1960 ",
    fuelConsumption: "9.9 l/100",
    dimensions: "4726 x 1927 x 1596 ",
  },
];

function load() {
  var out = "";
  let carPorsche = JSON.parse(localStorage.getItem("carPorsche")) || [];
  for (let i = 0; i < carPorsche.length; i++) {
    out += `<div class="new-car_item">
      <div class="_left">
        <a><img src="${carPorsche[i].img1}" /></a>
        <a><img src="${carPorsche[i].img2}" /></a>
      </div>
      <div class="_right">
        <div class="the-content-new-car">
          <table class="m-09-techspecs-table">
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Mã số</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].maso}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Name</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].name}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="">Ngoại thất</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].exterior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Nội thất</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].interior}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Tốc độ</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].speed}</td>
            </tr>
            <tr class="m-09-techspecs-row">
              <td class="m-09-techspecs-caption">Giá bán</td>
              <td class="m-09-techspecs-pdk">${carPorsche[i].price} VNĐ</td>
            </tr>
          </table>
          <div class="m-132-button-bar">
            
            
             <button class="button" onclick="renderProductItem('${carPorsche[i].id}')">Xem thêm >></button>
            <button class="buttonD" onclick="deleteProduct('${carPorsche[i].id}')">Xóa>></button>
            <button class="buttonE" onclick="editProduct('${carPorsche[i].id}')">Chỉnh sửa>></button>


           
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />`;
  }
  document.getElementById("load").innerHTML = out;
  localStorage.setItem("carPorsche", JSON.stringify(carPorsche));
}
function deleteProduct(id) {
  let carPorsche = JSON.parse(localStorage.getItem("carPorsche")) || [];

  const index = carPorsche.findIndex((product) => product.id === id);

  if (index !== -1) {
    carPorsche.splice(index, 1);

    // Cập nhật lại danh sách xe trong localStorage
    localStorage.setItem("carPorsche", JSON.stringify(carPorsche));

    // Gọi hàm load() để hiển thị danh sách xe sau khi xóa
    load();

    alert("Xóa sản phẩm thành công.");
  } else {
    alert("Không tìm thấy sản phẩm cần xóa.");
  }
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
    const carPorsche = JSON.parse(localStorage.getItem("carPorsche")) || [];
    // Tìm sản phẩm theo id
    const product = carPorsche.find((p) => p.id === id);
    if (!product) {
      alert("Không tìm thấy sản phẩm!");
      return;
    }

    // Lưu chi tiết sản phẩm vào Local Storage
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // Chuyển hướng đến trang hiển thị chi tiết sản phẩm
    window.location.href = "/pages/admin/adminHienthiPO.html";
  } else {
    // Nếu chưa đăng nhập, thông báo cho người dùng và chuyển hướng đến trang đăng nhập
    alert("Vui lòng đăng nhập để xem thông tin chi tiết sản phẩm.");
  }
}

// Lấy thông tin chi tiết sản phẩm từ Local Storage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Hiển thị thông tin chi tiết sản phẩm
if (product) {
  document.getElementById("Porsche").innerHTML = `
          <div class="new-cars-content">
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="name">
         <h2>${product.name}</h2>
      
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
  const carPorsche = JSON.parse(localStorage.getItem("carPorsche")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productToAdd = carPorsche.find((product) => product.id === id);

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

  // Chuyển hướng đến trang đăng nhập
  window.location.href = "/pages/homeInOut.html";
}
