import React, { Component } from "react";

// components
import { FilterContainer } from "./Filter.elements";

export class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <h3 style={{ margin: "0.5rem" }}>Products</h3>
        <form>
          <select>
            <option name="All" value="All">
              All
            </option>
            <option name="Wax Melts" value="Wax Melts">
              Wax Melts
            </option>
            <option name="Candles" value="Candles">
              Candles
            </option>
            <option name="Coaster Sets" value="Coaster Sets">
              Coaster Sets
            </option>
            <option name="Soap Bars" value="Soap Bars">
              Soap Bars
            </option>
          </select>
        </form>
      </FilterContainer>
    );
  }
}

export default Filter;
