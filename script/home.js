const sliderContent = document.getElementById("sliderContent");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const dotElement = document.getElementById("dot-child");
let sliderIndex = 0;

const dataSlider = [
  {
    id: 0,
    imageUrl: "../image/slide2.png" ,
  },

  {
    id: 1,
    imageUrl: "./image/slide3.png",
  },
  {
    id: 2,
    imageUrl: "./image/slide4.png",
  },
];

function slide() {
  sliderContent.innerText = " ";

  let slideItem = createDivTag();
  let imgItem = createImgTag(dataSlider[sliderIndex]);
  let dots = createDots();

  slideItem.appendChild(imgItem);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dots);

  console.log(slideItem, imgItem);
  dotElement[sliderIndex].classList.add("activeDot");
  slide();
}

function createDivTag() {
  let div = document.createElement("div");
  return div;
}

function createImgTag(item) {
  let backgroungImageTag = document.createElement("div");
  backgroungImageTag.style.backgroundImage = `${item.imageUrl}`;
  backgroungImageTag.classList.add("backgroung-image");

  return backgroungImageTag;
}

function createDots() {
  let dotParentElement = document.createElement("div");
  dotParentElement.classList.add("dot-parent");

  dataSlider.forEach((element) => {
    let dotItem = document.createElement("div");
    dotItem.classList.add("dot-child");
    // dotId = Element.id - 1;
    dotItem.setAttribute("data-Id", `${element.id - 1}`);
    dotId = sliderIndex;
    // sliderIndex = dotId;
    // slide();
    console.log(dotId);
    dotParentElement.appendChild(dotItem);
  });
}

function arrowLeftClick() {
  if ((sliderIndex = 0)) {
    sliderIndex = dataSlider.length - 1;
    slide();
    return;
  }
  sliderIndex -= 1;
  slide();
}

function arrowRightClick() {
  if ((sliderIndex = dataSlider.length - 1)) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex += 1;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

// let navBar = document.getElementById('navBar');

// window.onscroll = function(){
//     let top = window.scrollY;
//     if (top >= 50) {
//         navBar.classList.add("navBarActive");
//     }
//     else{
//         navBar.classList.remove("navBarActive");
//     }
// }
