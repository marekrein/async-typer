function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

//option 1 - async for loop
// async function draw(element) {
//   const text = element.textContent;
//   let soFar = "";
//   for (const letter of text) {
//     soFar += letter;
//     element.textContent = soFar;

//     const { typeMin, typeMax } = element.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

//option 2 - recursion

function draw(element) {
  let index = 1;
  const text = element.textContent;
  const { typeMin, typeMax } = element.dataset;

  async function drawLetter() {
    element.textContent = text.slice(0, index);
    index++;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

const elements = document.querySelectorAll("[data-type]").forEach(draw);
