import axios from "axios";

// const lookup = {
//   "600612d67035ed00178b36ae": 0, //blue whiite soapbar
//   "5ff8a6038f77aa00171897ce": 0, //tote bag
//   "5ff8a4aa8f77aa00171897cb": 0, //pink marble
//   "60060f487035ed00178b369f": 0, // mocha wax melt
//   "600b33991c5a9e0017cc0172": 0, // pumpkink wax melt
//   "600b34201c5a9e0017cc0174": 0, // fresh wax melt
//   "600b34c81c5a9e0017cc0176": 0, // vanilla wax melt
//   "600b355d1c5a9e0017cc0178": 0, // citrus wax melt
//   "600b35cc1c5a9e0017cc017a": 0, // orange wwax melt
//   "600b369a1c5a9e0017cc017c": 0, //sweet fig wax melt
//   "600612997035ed00178b36ab": 0, // pink white soapbar
//   "600612217035ed00178b36a5": 0, // purple white soapbar
//   "600610b47035ed00178b36a2": 0, //small amber candle
//   "6006126e7035ed00178b36a8": 0, // white green soapbar
//   "600a06e76e758500175ccde7": 0, //blue marble
//   "600a06676e758500175ccde4": 0, //green marble
//   "600a072d6e758500175ccde9": 0, //yellow marble
//   "600b378c1c5a9e0017cc017f": 0, // matte black glass candle
//   "600b2edd1c5a9e0017cc016f": 0, // amber 4 wick
// };

export const updateStock = async (basket = []) => {
  basket.forEach((i) => {
    console.log(i);
    axios
      .get(`https://birdbrain.herokuapp.com/products/:${i.id}`)
      .then((r) => console.log(r, "**"))
      .catch((e) => console.log(e));

    // axios.put(`https://birdbrain.herokuapp.com/products/:${regex}`, {
    //   stock: -1,
    // });
  });
};
