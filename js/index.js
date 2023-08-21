// function handleClickBtn(target){
//   const selectedItem = document.getElementById('select-items');
//   const itmeName = target.parentNode.childNodes[3].innerText;
//   const li = document.createElement('li');
//   li.innerText = itmeName;
//   selectedItem.appendChild(li);
//   console.log(itmeName);

// }


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
    totalPriceElement.textContent = total.toFixed(2);
    const discountPriceElement = document.getElementById('discount-price-value');
document.getElementById('apply-btn').disabled == true;
    const grandTotalPriceElement = document.getElementById('grand-total-value');
    grandTotalPriceElement.textContent = total.toFixed(2);
  });
});

function closeModal() {
  // Clear the selected items and reset the item count
  const selectedItemList = document.getElementById("select-items");
  selectedItemList.innerHTML = "";
  itemCount = 1;
  total = 0;
  discount = 0;
  updateTotalPriceDisplay();
  const modal = document.getElementById("my_modal_5");
  modal.close();
}


