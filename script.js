const imageThumbnails = document.querySelectorAll(".image-thumbnail");
const displayImage = document.querySelector(".display-image img");
const addToCartButton = document.querySelector(".add-to-cart-button");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const quantity = document.querySelector(".quantity-selector .quantity");
let productQuantity = 1;
const colors = document.querySelectorAll(".color");
const sizeButtons = document.querySelectorAll('input[name="size"]');
const toastMessage = document.querySelector(".toast-message");

let selectedColor = "";
let selectedSize = "";

imageThumbnails.forEach((img) => {
  img.addEventListener("click", (e) => {
    const imgSrc = e.target.getAttribute("src");
    displayImage.src = imgSrc;

    imageThumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });

    e.target.parentElement.classList.add("active");
  });
});

addToCartButton.addEventListener("click", () => {
  toastMessage.innerHTML = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart`;
  toastMessage.style.display = "block";
});

plusButton.addEventListener("click", () => {
  productQuantity++;
  quantity.innerHTML = productQuantity;
});

minusButton.addEventListener("click", () => {
  if (productQuantity == 1) {
    return;
  }

  productQuantity--;
  quantity.innerHTML = productQuantity;
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    colors.forEach((color) => {
      color.innerHTML = "";
    });

    color.innerHTML = `<i class="fa-solid fa-check"></i>`;
    selectedColor = color.dataset.color;
  });
});

sizeButtons.forEach((sizeBtn) => {
  sizeBtn.addEventListener("click", (e) => {
    selectedSize = e.target.dataset.size;
  });
});
