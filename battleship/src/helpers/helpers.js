/* eslint-disable import/prefer-default-export */
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
