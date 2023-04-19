let cardElement = document.querySelectorAll(".card");
let cardTitleElement = document.querySelectorAll(".card-title");

cardElement.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("activeCard");
    console.log(this);
  });
});

cardTitleElement.forEach((element) => {
  let iElement = document.createElement("i");
  iElement.classList.toggle("fa-minus");
});

// if (cardTitleElement.classList.contains(".fa-plus")) {
//   cardTitleElement.classList.remove("fa-plus");
// } else {
//   cardTitleElement.classList.add("fa-minus");
// }



