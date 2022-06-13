function getRandomNumber(max, min = 0) {
  return Math.random() * (max - min + 1) + min;
}

export function getRandomColor() {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
}