let itemCount = 1;
let total = 0;
const cardElement = document.querySelectorAll(".card");
cardElement.forEach((card) => {
  card.addEventListener("click", () => {
    const selectedItem = document.getElementById("select-items");
    const itemName = card.querySelector(".card-title").innerText;
    const cardPrice = parseFloat(card.querySelector(".card-price").innerText);
    const li = document.createElement("li");
    li.innerText = `${itemCount}. ${itemName}`;
    selectedItem.appendChild(li);
    itemCount++;
    total = total + cardPrice;
    const totalPriceElement = document.getElementById("total-price-value");
    totalPriceElement.innerText = total.toFixed(2);
    const discountPriceElement = document.getElementById(
      "discount-price-value"
    );
    const grandTotalPriceElement = document.getElementById("grand-total-value");
    grandTotalPriceElement.innerText = total.toFixed(2);
    const button = document.getElementById('modal-btn');
    if(total > 0){
      button.disabled = false;
      return total;
    }
  });
});

function closeModal() {
  const selectedItemList = document.getElementById("select-items");
  selectedItemList.innerHTML = "";
  const totalValuePrice = document.getElementById("total-price-value");
  totalValuePrice.innerText = "0.00";
  const discountValuePrice = document.getElementById("discount-price-value");
  discountValuePrice.innerText = "0.00";
  const grandTotalValuePrice = document.getElementById("grand-total-value");
  grandTotalValuePrice.innerText = "0.00";
  itemCount = 1;
  total = 0;
  discount = 0;
  updateTotalPrice();
  const modal = document.getElementById("my_modal_5");
  modal.close();
}
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price-value");
  const discountPriceElement = document.getElementById("discount-price-value");
  const grandTotalElement = document.getElementById("grand-total-value");
  if (total >= 200) {
    discount = total * 0.2;
    grandTotal = total - discount;
    totalPriceElement.innerText = total.toFixed(2);
    discountPriceElement.innerText = discount.toFixed(2);
    grandTotalElement.innerText = grandTotal.toFixed(2);
  }
}
