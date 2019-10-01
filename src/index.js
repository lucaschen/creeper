const populatePixels = (el, width, height) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel", `-pos-${x}-${y}`);
      el.appendChild(pixel);
    }
  }
};

const creeperHeadFront = document.getElementById("creeper-head-front");
populatePixels(creeperHeadFront, 8, 8);

const creeperHeadTop = document.getElementById("creeper-head-top");
populatePixels(creeperHeadTop, 8, 8);

const creeperHeadSide = document.getElementById("creeper-head-side");
populatePixels(creeperHeadSide, 8, 8);

const creeperBodyFront = document.getElementById("creeper-body-front");
populatePixels(creeperBodyFront, 8, 12);

const creeperBodySide = document.getElementById("creeper-body-side");
populatePixels(creeperBodySide, 4, 12);

const creeperFrontLegFront = document.getElementById("creeper-front-leg-front");
populatePixels(creeperFrontLegFront, 8, 6);

const creeperFrontLegTop = document.getElementById("creeper-front-leg-top");
populatePixels(creeperFrontLegTop, 8, 4);

const creeperFrontLegSide = document.getElementById("creeper-front-leg-side");
populatePixels(creeperFrontLegSide, 4, 6);

const creeperBackLegFront = document.getElementById("creeper-back-leg-front");
populatePixels(creeperBackLegFront, 8, 6);

const creeperBackLegTop = document.getElementById("creeper-back-leg-top");
populatePixels(creeperBackLegTop, 8, 4);

const creeperBackLegSide = document.getElementById("creeper-back-leg-side");
populatePixels(creeperBackLegSide, 4, 6);

(() => {
  const creeper = document.getElementById("creeper");
  let isRotated = false;

  setInterval(() => {
    isRotated = !isRotated;
    if (isRotated) creeper.classList.add("-rotate");
    else creeper.classList.remove("-rotate");
  }, 2500);
})();
