function addCarToMer(newCar) {
  if (!newCar || typeof newCar !== "object") {
    console.error("Invalid car object.");
    return;
  }

  // Lấy mảng carBMW hiện tại từ localStorage hoặc tạo một mảng mới nếu không tồn tại
  const carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Thêm chiếc xe mới vào mảng
  carMer.push(newCar);

  // Lưu lại mảng đã cập nhật vào localStorage
  localStorage.setItem("carMer", JSON.stringify(carMer));

  console.log("Đã thêm xe mới vào danh sách P.");
}

// Trong hàm addCarForm.addEventListener("submit", ...)
addCarForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Lấy giá trị từ các trường input

  const carId = document.getElementById("carId").value;
  const img1 = document.getElementById("img1").value;
  const img2 = document.getElementById("img2").value;
  const img3 = document.getElementById("img3").value;
  const img4 = document.getElementById("img4").value;
  const img5 = document.getElementById("img5").value;
  const maso = document.getElementById("maso").value;
  const carName = document.getElementById("carName").value;
  const exterior = document.getElementById("exterior").value;
  const interior = document.getElementById("interior").value;
  const speed = document.getElementById("speed").value;
  const price = document.getElementById("price").value;
  const engine = document.getElementById("engine").value;
  const displacement = document.getElementById("displacement").value;
  const maxPower = document.getElementById("maxPower").value;
  const maxTorque = document.getElementById("maxTorque").value;
  const acceleration = document.getElementById("acceleration").value;

  const maxSpeed = document.getElementById("maxSpeed").value;
  const weight = document.getElementById("weight").value;
  const fuelConsumption = document.getElementById("fuelConsumption").value;
  const dimensions = document.getElementById("dimensions").value;
  // Tạo một đối tượng mới chứa thông tin của chiếc xe mới
  const newCar = {
    id: carId,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    maso: maso,

    name: carName,
    exterior: exterior,
    interior: interior,
    speed: speed,
    price: price,

    engine: engine,
    displacement: displacement,
    maxPower: maxPower,
    maxTorque: maxTorque,
    acceleration: acceleration,
    maxSpeed: maxSpeed,
    weight: weight,
    fuelConsumption: fuelConsumption,
    dimensions: dimensions,

    // Thêm các trường thông tin khác của chiếc xe vào đây
  };

  // Gọi hàm để thêm xe vào danh sách và lưu vào localStorage
  addCarToMer(newCar);

  // Reset form sau khi thêm xe thành công
  addCarForm.reset();

  // Thông báo cho người dùng biết rằng xe đã được thêm thành công
  alert("Xe đã được thêm !");

  // Cập nhật lại trang web để hiển thị sản phẩm mới
});
// Hàm lấy thông tin sản phẩm dựa trên ID
function getProductDetails(id) {
  // Lấy danh sách sản phẩm từ localStorage
  const carMer = JSON.parse(localStorage.getItem("carMer")) || [];

  // Tìm sản phẩm theo id trong danh sách sản phẩm đã lưu
  const product = carMer.find((p) => p.id === id);

  if (!product) {
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  // Điền thông tin sản phẩm vào các trường trong form chỉnh sửa
  document.getElementById("carId").value = product.id;
  document.getElementById("maso").value = product.maso;
  document.getElementById("carName").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("exterior").value = product.exterior;
  document.getElementById("interior").value = product.interior;
  document.getElementById("speed").value = product.speed;
  document.getElementById("img1").value = product.img1;
  document.getElementById("img2").value = product.img2;
  document.getElementById("img3").value = product.img3;
  document.getElementById("img4").value = product.img4;
  document.getElementById("img5").value = product.img5;
  document.getElementById("engine").value = product.engine;
  document.getElementById("displacement").value = product.displacement;
  document.getElementById("maxPower").value = product.maxPower;
  document.getElementById("maxTorque").value = product.maxTorque;
  document.getElementById("acceleration").value = product.acceleration;
  document.getElementById("maxSpeed").value = product.maxSpeed;
  document.getElementById("weight").value = product.weight;
  document.getElementById("fuelConsumption").value = product.fuelConsumption;
  document.getElementById("dimensions").value = product.dimensions;

  // Hiển thị form chỉnh sửa
  document.getElementById("editCarForm").style.display = "block";
}

// Khi nhấn vào nút chỉnh sửa
function editProduct(id) {
  // Chuyển sang trang chỉnh sửa
  window.location.href = "/pages/admin/editM.html";

  // Lưu ID của sản phẩm vào sessionStorage để truyền sang trang chỉnh sửa
  sessionStorage.setItem("editProductId", id);
}
