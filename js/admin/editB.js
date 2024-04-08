window.onload = function () {
  const editProductId = sessionStorage.getItem("editProductId");
  getProductDetails(editProductId);
};

// Hàm cập nhật thông tin sản phẩm
function updateProductB() {
  // Lấy thông tin từ các trường input trong form chỉnh sửa

  // Ví dụ:
  const carId = document.getElementById("carId").value;
  const maso = document.getElementById("maso").value;
  const carName = document.getElementById("carName").value;
  const price = document.getElementById("price").value;
  const exterior = document.getElementById("exterior").value;
  const interior = document.getElementById("interior").value;
  const speed = document.getElementById("speed").value;
  const img1 = document.getElementById("img1").value;
  const img2 = document.getElementById("img2").value;
  const img3 = document.getElementById("img3").value;
  const img4 = document.getElementById("img4").value;
  const img5 = document.getElementById("img5").value;
  const engine = document.getElementById("engine").value;
  const displacement = document.getElementById("displacement").value;
  const maxPower = document.getElementById("maxPower").value;
  const maxTorque = document.getElementById("maxTorque").value;
  const acceleration = document.getElementById("acceleration").value;
  const maxSpeed = document.getElementById("maxSpeed").value;
  const weight = document.getElementById("weight").value;
  const fuelConsumption = document.getElementById("fuelConsumption").value;
  const dimensions = document.getElementById("dimensions").value;

  const updatedProduct = {
    id: carId,
    maso: maso,
    name: carName,
    price: price,
    exterior: exterior,
    interior: interior,
    speed: speed,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    engine: engine,
    displacement: displacement,
    maxPower: maxPower,
    maxTorque: maxTorque,
    acceleration: acceleration,
    maxSpeed: maxSpeed,
    weight: weight,
    fuelConsumption: fuelConsumption,
    dimensions: dimensions,
  };

  // Lưu thông tin sản phẩm đã cập nhật vào localStorage
  updateCarBMW(updatedProduct);

  // Thông báo cho người dùng biết rằng sản phẩm đã được cập nhật thành công
  alert("Đã cập nhật thành công !!!");

  // Chuyển hướng về trang danh sách sản phẩm sau khi cập nhật thành công
  window.location.href = "/pages/admin/adminmesOut.html";
}

// Hàm cập nhật thông tin sản phẩm trong localStorage
function updateCarBMW(updatedProduct) {
  // Lấy danh sách sản phẩm từ localStorage
  let carBMW = JSON.parse(localStorage.getItem("carBMW")) || [];

  // Tìm vị trí của sản phẩm cần cập nhật trong mảng
  const index = carBMW.findIndex((p) => p.id === updatedProduct.id);

  // Nếu không tìm thấy sản phẩm, thông báo lỗi và kết thúc hàm
  if (index === -1) {
    console.error("Product not found for updating.");
    return;
  }

  // Cập nhật thông tin sản phẩm trong mảng
  carBMW[index] = updatedProduct;

  // Lưu mảng sản phẩm đã cập nhật vào localStorage
  localStorage.setItem("carBMW", JSON.stringify(carBMW));
}
