import React from "react";
import Select from "react-select";
import style from "./styles/StatsTable.module.css";
import { customStyles } from "./assetsForStats";
import NumberFormat from "react-number-format";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import animation from "../../../styles/tableItem.animation.module.css";
import formatNumber from "../../../utils/formatNumber";

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
      {totalMonthExpense > 0 && (
        <ul>
          <li key={"1"} className={style.labelContainer}>
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
                <p>{el.category}</p>
                <>{formatNumber(el.totalAmount, style.totalAmount)}</>
              </div>
            </li>
          ))}
        </ul>
      )}
      {totalMonthExpense === 0 && (
        <p className={style.titletrans}>
          За выбраный период времени нет данных о транзакциях
        </p>
      )}

      {totalMonthExpense > 0 && (
        <div className={style.amountContainer}>
          <div className={style.itemsAmount}>
            <p className={style.amounthCategory}>Расходы:</p>

            <>{formatNumber(totalMonthExpense, style.expensAmount, "₴ ")}</>
          </div>
          <div className={style.itemsAmount}>
            <p className={style.amounthCategory}>Доходы:</p>
            <>{formatNumber(totalMonthIncome, style.incomeAmount, "₴ ")}</>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsTable;
