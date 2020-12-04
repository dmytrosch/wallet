import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  transactions,
  getCategories,
} from "../../../redux/wallet/walletSelectors";
import StatsGraph from "./StatsGraph";
import moment from "moment";
import "moment/locale/ru";
import StatsTable from "./StatsTable";
import "chartjs-plugin-labels";
import styles from "./styles/Filter.module.css";
import { colors, optionsMonth, optionsYear } from "./assetsForStats";
import {filterDataFromTable, addColor} from '../../../utils/filter';
import {usePrevious} from '../../../hooks/usePrevious';

export default function Filter() {
  const allTransactions = useSelector(transactions);
  const Categories = useSelector(getCategories);

  const [currentMonth, setCurrentMonth] = useState(moment().format("MMMM"));
  const [currentYear, setCurrentYear] = useState(moment().format("YYYY"));
  const [selectedMonth, setSelectedMonth] = useState({
    value: currentMonth,
    label: currentMonth[0].toUpperCase() + currentMonth.substr(1),
  });
  const [selectedYear, setSelectedYear] = useState({
    value: currentYear,
    label: currentYear,
  });
  const [months] = useState(optionsMonth);
  const [years] = useState(optionsYear);
  const [filteredData, setFilteredData] = useState([]);

  const prevAllTransactions = usePrevious(allTransactions);
  const prevCurrentMonth = usePrevious(currentMonth);
  const prevCurrentYear = usePrevious(currentYear);
  const prevSelectedMonth = usePrevious(selectedMonth);
  const prevSelectedYear = usePrevious(selectedYear);

  const allDataOnMount = (data) => {
    setFilteredData(data);
  };

  const filterTransactionData = (
    allTransactions,
    currentMonth,
    currentYear
  ) => {
    setFilteredData(
      allTransactions
        .filter(
          (el) => moment(el.transactionDate).format("YYYY") === currentYear
        )
        .filter(
          (el) => moment(el.transactionDate).format("MMMM") === currentMonth
        )
    );
  };

  const changeCurrentMonthOrYear = (newCurrentMonth, newCurrentYear) => {
    setCurrentMonth(newCurrentMonth);
    setCurrentYear(newCurrentYear);
  };

  const handleChangeMonth = (selectedOption) => {
    setSelectedMonth(selectedOption);
  };

  const handleChangeYear = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  useEffect(() => {
    allDataOnMount(allTransactions);
  }, []);

  useEffect(() => {
    if (
      prevAllTransactions !== allTransactions ||
      prevCurrentMonth !== currentMonth ||
      prevCurrentYear !== currentYear
    ) {
      filterTransactionData(allTransactions, currentMonth, currentYear);
    }
    if (
      prevSelectedMonth !== selectedMonth ||
      prevSelectedYear !== selectedYear
    ) {
      changeCurrentMonthOrYear(selectedMonth.value, selectedYear.value);
    }
  }, [prevAllTransactions, allTransactions, prevCurrentMonth, currentMonth, prevCurrentYear, currentYear, prevSelectedMonth, selectedMonth, prevSelectedYear, selectedYear]);

  const totalMonthIncome = filteredData.reduce(
    (acc, el) => (el.type === "INCOME" ? acc + el.amount : acc),
    0
  );
  const totalMonthExpense = filteredData.reduce(
    (acc, el) => (el.type === "EXPENSE" ? acc + el.amount : acc),
    0
  );
  const arrData = addColor(filterDataFromTable(filteredData, Categories), colors);

  return (
    <div className={styles.container}>
      <div className={styles.diagramContainer}>
        <p className={styles.label}>Cтатистика</p>
        {arrData.length === 0 && (
          <p className={styles.notFoundData}>Нет данных за выбраный период!</p>
        )}
        {arrData.length > 0 && <StatsGraph arrData={arrData} />}
      </div>
      <div className={styles.tableContainer}>
        <StatsTable
          totalMonthIncome={totalMonthIncome}
          totalMonthExpense={totalMonthExpense}
          availableMonths={months}
          availableYears={years}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          handleChangeMonth={handleChangeMonth}
          handleChangeYear={handleChangeYear}
          arrDataForTable={arrData}
        />
      </div>
    </div>
  );
}

