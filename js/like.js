document.addEventListener("DOMContentLoaded", function () {
  displayFavoriteProducts();
});

function displayFavoriteProducts() {
  let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favoriteProducts.length === 0) {
    document.getElementById("favoriteProducts").innerHTML =
      "<p>Chưa có sản phẩm yêu thích.</p>";
  } else {
    let output = "";
    favoriteProducts.forEach(function (product) {
      output += `
                <div class="favorite-product">
                    <img src="${product.img1}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price} VNĐ</p>
                    <button onclick="removeFromFavorites('${product.id}')">Remove from Favorites</button>
                    
                </div>
                
            `;
    });
    document.getElementById("favoriteProducts").innerHTML = output;
  }
}

function removeFromFavorites(id) {
  let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

  favoriteProducts = favoriteProducts.filter(function (product) {
    return product.id !== id;
  });

  localStorage.setItem("favorites", JSON.stringify(favoriteProducts));

  displayFavoriteProducts();
}

function logOut() {
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favorites");
  localStorage.removeItem("cart");

  window.location.href = "/pages/homeInOut.html";
}
