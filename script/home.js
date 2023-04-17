const sliderContent = document.getElementById("sliderContent");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const dotElement = document.getElementById("dot-child");
let sliderIndex = 0;

const dataSlider = [
  {
    id: 1,
    ImageUrl: "imageImage homepage 2.png",
  },

  {
    id: 1,
    ImageUrl: "imageImage homepage 3.png",
  },
  {
    id: 1,
    ImageUrl: "imagePhoto homepage 4.png",
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
}

slide();

function createDivTag() {
  let div = document.createElement("div");
  return div;
}

function createImgTag(item) {
  let backgroungImageTag = document.createElement("div");
  backgroungImageTag.style.backgroundImage = `url(${item.imageUrl})`;
  backgroungImageTag.classList.add("backgroung-image");

  return backgroungImageTag;
}

function createDots() {
  let dotParentElement = document.getElementById("div");
  dotParentElement.classList.add("dot-parent");

  dataSlider.forEach((Element) => {
    let dotItem = document.getElementById("div");
    dotItem.classList.add("dot-child");
    dotItem.setAttribute("data-Id", `${Element.id - 1}`);
    sliderIndex = dotId;
    slide();

    console.log(dotId);
  });
  dotParentElement.appendChild(dotItem);
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex == dataSLider.length - 1;
    slide();
    return;
  }
  sliderIndex -= 1;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == dataSLider.length - 1) {
    sliderIndex == 0;
    slide();
    return;
  }
  sliderIndex += 1;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);
