const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".result__user img");
const cpuResult = document.querySelector(".result__cpu img");
const result = document.querySelector(".result__text");
const optionImages = document.querySelectorAll(".result__options-image");

const figures = [
  {
    id: "rock",
    name: "Rock",
    index: 0,
    beats: ["scissors"],
    losesTo: ["paper"],
  },
  {
    id: "paper",
    name: "Paper",
    index: 1,
    beats: ["rock"],
    losesTo: ["scissors"],
  },
  {
    id: "scissors",
    name: "Scissors",
    index: 2,
    beats: ["paper"],
    losesTo: ["rock"],
  },
];

const outComes = {
  draw: "Match draw",
  win: "User",
  lose: "Cpu",
};

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // Set active class on clicked image
    image.classList.add("active");

    // Remove active class from other images
    optionImages.forEach((imageTwo, indexTwo) => {
      index !== indexTwo && imageTwo.classList.remove("active");
    });

    // Set user image
    const imgSrc = e.target.querySelector("img").src;
    userResult.src = imgSrc;

    // Set cpu image
    const randomNumber = Math.floor(Math.random() * 3);
    const cpuFigure = figures[randomNumber];
    cpuResult.src = `img/${cpuFigure.id}.png`;

    // Determine outcome
    const userFigure = figures[index];
    const userBeats = userFigure.beats.includes(cpuFigure.id);
    const cpuBeats = cpuFigure.beats.includes(userFigure.id);
    const outcome = userBeats ? "win" : cpuBeats ? "lose" : "draw";

    // Display result
    result.textContent =
      outcome === "draw" ? outComes.draw : `${outComes[outcome]} won!`;
  });
});
