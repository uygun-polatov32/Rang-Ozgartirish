const nameInput = document.getElementById("name-input");
const cardName = document.getElementById("card-name");
const colorBtn = document.getElementById("color-btn");
const card = document.querySelector(".card");

nameInput.addEventListener("input", (e) => {
    if (e.target.value === "") {
        cardName.textContent = "Ism bu yerad chiqadi";
    } else {
        cardName.textContent = e.target.value;
    }
});


colorBtn.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() *16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
});

































