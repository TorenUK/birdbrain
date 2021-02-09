export const updateQuantity = (itemObj, basket = []) => {
  if (basket.length) {
    const regex = new RegExp(itemObj.id);

    basket.forEach((basketItem, idx) => {
      if (regex.test(basketItem.id)) {
        console.log("yep");
        itemObj.qty = itemObj.qty + basket[idx].qty;
      } else {
        console.log("nope");
        return;
      }
    });
  }
  return itemObj;
};
