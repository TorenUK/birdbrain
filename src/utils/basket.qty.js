export const updateQuantity = (itemObj, basket = []) => {
  let newBasket = [...basket];

  if (basket?.length) {
    const regex = new RegExp(itemObj.id);

    basket.forEach((basketItem, idx) => {
      if (regex.test(basketItem.id)) {
        console.log("yep");
        itemObj.qty = itemObj.qty + basket[idx].qty;

        newBasket.filter((item) => {
          return !regex.test(item);
        });
        newBasket[idx] = itemObj;
      } else {
        console.log("nope");
        newBasket.push(itemObj);
      }
    });
  } else {
    newBasket = [...newBasket, itemObj];
  }

  return newBasket;
};
