export const filterDataFromTable = (filteredData, Categories) =>
  filteredData
    .filter((el) => el.type === "EXPENSE")
    .map((el) => ({
      category: el.categoryId,
      amount: el.amount,
      comment: el.comment,
    }))
    .reduce((acc, el) => {
      if (acc.length > 0) {
        if (acc.find((item) => item.category === el.category)) {
          return acc.map((mapItem) =>
            mapItem.category === el.category
              ? { ...mapItem, amount: mapItem.amount + el.amount }
              : mapItem
          );
        }
        return [...acc, el];
      }
      return [...acc, el];
    }, [])
    .map((el) => ({
      category: Categories.filter((e) => e.id === el.category)
        .map((el) => el.name)
        .join(),
      totalAmount: el.amount,
      comment: el.comment,
    }));

export const addColor = (arr, colors) => {
  const arrayLength = arr.length;
  let colorArray = [];

  for (let i = 0; i <= arrayLength; i++) {
    let selectedColor = colors[Math.floor(Math.random() * colors.length)];
    if (colorArray.includes(selectedColor)) {
      i = i - 1;
    } else {
      colorArray.push(selectedColor);
    }
  }

  const itemsArray = arr.map((el, ind) => ({
    ...el,
    color: colorArray[ind],
  }));

  return itemsArray;
};


