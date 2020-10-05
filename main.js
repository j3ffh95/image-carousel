const imgsContainer = document.getElementById("imgs");
const imgs = document.querySelectorAll("#imgs img");
// console.log(imgsContainer);

let index = 0;

const move = () => {
  index++;

  // if the index is more than how many images are in there then re assignit with 0
  if (index > imgs.length - 1) index = 0;

  //THis is the logic in order to move the picture and show the next one
  imgsContainer.style.transform = `translateX(${-index * 500}px)`;
};

setInterval(move, 2000);
