let cardElement = document.querySelectorAll(".card");

cardElement.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("activeCard");
    console.log(this);
  });
});

let cardTitleElement = document.querySelectorAll(".card-title");
cardTitleElement.forEach((element) => {
  let iElement = document.createElement("i");
  //   iElement.classList.toggle("fa-plus");
  element.appendChild(iElement);
  element.addEventListener("click", function () {
    // iElement.classList.toggle("fa-plus");
    iElement.removeClass("fa-plus").addClass("fa-minus");
    // iElement.classList.toggle("fa-minus");
  });
});

// cardTitleElement.forEach((element) => {
//   let iElement = document.createElement("i");
//   iElement.classList.toggle("fa-minus");
// });

// if (cardTitleElement.classList.contains(".fa-plus")) {
//   cardTitleElement.classList.remove("fa-plus");
// } else {
//   cardTitleElement.classList.add("fa-minus");
// }
