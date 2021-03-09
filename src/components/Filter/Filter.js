import React, { useEffect } from "react";

// components
import { FilterContainer } from "./Filter.elements";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, filterStuff } from "../../features/filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterStuff(e.target.value));
  };

  return (
    <FilterContainer>
      <h3 style={{ margin: "0.5rem" }}>Products</h3>
      <form onChange={handleChange}>
        <select>
          <option name="All" value="all">
            All
          </option>
          <option name="Wax Melts" value="wax">
            Wax Melts
          </option>
          <option name="Candles" value="candle">
            Candles
          </option>
          <option name="Coaster Sets" value="coaster">
            Coaster Sets
          </option>
          <option name="Soap Bars" value="soap">
            Soap Bars
          </option>
        </select>
      </form>
    </FilterContainer>
  );
};

export default Filter;
