let movies = [
  {
    name: "falcon the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil",
    image: "slider 2.PNG"
  },

  {
    name: "loki",
    des:
      "Loki, the God of Mischief, steps out of his brothers shadow to embark on an adventure that takes place after the events of Avengers: Endgame",
    image: "slider 1.PNG"
  },

  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil",
    image: "slider 3.PNG"
  },

  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil",
    image: "slider 4.PNG"
  },

  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil",
    image: "slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elemets
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  imgElement.className = "slider-img";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%  - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".vedio-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
