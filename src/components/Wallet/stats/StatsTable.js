import React from "react";
import Select from "react-select";
import style from "./styles/StatsTable.module.css";
import { customStyles } from "./assetsForStats";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import animation from "../../../styles/tableItem.animation.module.css";
import formattingNumber from "../../../utils/formattingNumber";

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
  console.log(arrDataForTable);
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
        <li key={"1"} className={style.labelContainer}>
          <p className={style.labelText}>Категория</p>
          <p className={style.labelText}>Сумма</p>
        </li>
        <TransitionGroup component={null}>
          {arrDataForTable.map((el, indx) => (
            <CSSTransition
              timeout={250}
              key={indx}
              classNames={animation}
              unmountOnExit
            >
              <li className={style.listItems}>
                <span
                  className={style.listColor}
                  style={{
                    backgroundColor: el.color,
                  }}
                ></span>
                <div className={style.transInfo}>
                  <p>{el.category}</p>
                  {formattingNumber(el.totalAmount, style.totalAmount)}
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>

      <div className={style.amountContainer}>
        <div className={style.itemsAmount}>
          <p className={style.amounthCategory}>Расходы:</p>
          {formattingNumber(totalMonthExpense, style.expensAmount, "₴ ")}
        </div>
        <div className={style.itemsAmount}>
          <p className={style.amounthCategory}>Доходы:</p>
          {formattingNumber(totalMonthIncome, style.incomeAmount, "₴ ")}
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
