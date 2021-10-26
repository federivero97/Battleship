export function getFreeId(array) {
  let id = 1;
  const sortArray = array.sort((a, b) => {
    return a.id - b.id;
  });

  sortArray.forEach((item) => {
    if (id === item.id) {
      id += 1;
    }
  });

  return id;
}

export function isHorizontal(array) {
  return array.every((val, i, arr) => {
    return val.row === arr[0].row;
  });
}

export function isVertical(array) {
  return array.every((val, i, arr) => {
    return val.column === arr[0].column;
  });
}

export function getMinByAttribute(array, attr) {
  let min = array[0];

  array.forEach((c) => {
    if (c[attr] < min[attr]) {
      min = c;
    }
  });

  return min;
}

export function getMaxByAttribute(array, attr) {
  let max = array[0];

  array.forEach((c) => {
    if (c[attr] > max[attr]) {
      max = c;
    }
  });

  return max;
}

export function shuffle(array) {
  const shuffleArray = array;

  for (let i = shuffleArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = array[i];
    shuffleArray[i] = array[j];
    shuffleArray[j] = x;
  }
  return shuffleArray;
}
