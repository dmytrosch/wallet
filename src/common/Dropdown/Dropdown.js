import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

const categoriesCost = [1, 2, 3];
const categoriesIncome = [3, 4, 5];

const Dropdown = ({ income }) => {
  return (
    <>
      <select name="categories" className={styles.select}>
        <option value="" hidden className={styles.option}>
          Категория
        </option>

        {income
          ? categoriesCost.map((category) => (
              <option value={category} placeholder="Категория" key={category}>
                {category}
              </option>
            ))
          : categoriesIncome.map((category) => (
              <option value={category} placeholder="Категория" key={category}>
                {category}
              </option>
            ))}
      </select>
    </>
  );
};

Dropdown.proprTypes = {
  income: PropTypes.bool,
};

Dropdown.defaultProps = {
  income: true,
};

export default Dropdown;
