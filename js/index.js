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
    total += cardPrice;
    const totalPriceElement = document.getElementById("total-price-value");
    totalPriceElement.textContent = total.toFixed(2) + " ";
  });
});


