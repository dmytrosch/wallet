import React from "react";
import Select from "react-select";
import style from "./StatsTable.module.css";

const StatsTable = ({
  totalMonthExpense,
  totalMonthIncome,
  availableMonths,
  availableYears,
  selectedMonth,
  selectedYear,
  handleChangeMonth,
  handleChangeYear,
  arrDataForTable,
}) => {
  const customStyles = {
    container: () => ({
      padding: "10px",
    }),
    control: () => ({
      width: "160px",
      height: "50px",
      border: "1px solid black",
      borderRadius: "30px",
      display: "flex",
      backgroundColor: "transparent",
    }),
    singleValue: () => ({
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Circe",
      marginLeft: "21px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorContainer: () => ({
      paddingLeft: "0px",
    }),
    menu: () => ({
      position: "absolute",
      backgroundColor: "white",
      width: "200px",
    }),
  };

  return (
    <div>
      <div className={style.selectContainer}>
        <Select
          styles={customStyles}
          options={availableMonths}
          value={selectedMonth}
          onChange={handleChangeMonth}
        />
        <Select
          styles={customStyles}
          options={availableYears}
          value={selectedYear}
          onChange={handleChangeYear}
        />
      </div>
      <ul>
        <li key="1" className={style.labelContainer}>
          <p className={style.labelText}>Категория</p>
          <p className={style.labelText}>Сумма</p>
        </li>
        {arrDataForTable.map((el, indx) => (
          <li key={indx} className={style.listItems}>
            <span
              className={style.listColor}
              style={{
                backgroundColor: el.color,
              }}
            ></span>
            <div className={style.transInfo}>
              <p>{el.comment}</p>
              <p className={style.totalAmount}>{el.totalAmount}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={style.amountContainer}>
        <div className={style.itemsAmount}>
          <p className={style.amounthCategory}>Расходы:</p>
          <p className={style.expensAmount}>{totalMonthExpense}.00</p>
        </div>
        <div className={style.itemsAmount}>
          <p className={style.amounthCategory}>Доходы:</p>
          <p className={style.incomeAmount}>{totalMonthIncome}.00</p>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
