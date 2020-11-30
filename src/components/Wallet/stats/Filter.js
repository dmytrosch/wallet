import React, { Component, useState } from "react";
import StatsGraph from "./StatsGraph";
import moment from "moment";
import "moment/locale/ru";
import StatsTable from "./StatsTable";
import "chartjs-plugin-labels";
import styles from "./styles/Filter.module.css";
import { colors, optionsMonth, optionsYear } from "./assetsForStats";

export default class Filter extends Component {
  state = {
    currentMonth: moment().format("MMMM"),
    currentYear: moment().format("YYYY"),
    selectedMonth: { value: "Месяц", label: "Месяц" },
    selectedYear: { value: "Год", label: "Год" },
    months: optionsMonth,
    years: optionsYear,
    filteredData: [],
  };

  componentDidMount() {
    const { allTransactions } = this.props;
    this.allDataOnMount(allTransactions);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      currentMonth,
      currentYear,
      selectedMonth,
      selectedYear,
    } = this.state;
    const { allTransactions } = this.props;
    if (
      prevProps.allTransactions !== allTransactions ||
      prevState.currentMonth !== currentMonth ||
      prevState.currentYear !== currentYear
    ) {
      this.filterTransactionData(allTransactions, currentMonth, currentYear);
    }
    if (
      prevState.selectedMonth !== selectedMonth ||
      prevState.selectedYear !== selectedYear
    ) {
      this.changeCurrentMonthOrYear(selectedMonth.value, selectedYear.value);
    }
  }
  allDataOnMount = (data) => {
    this.setState({
      filteredData: data,
    });
  };

  filterTransactionData = (allTransactions, currentMonth, currentYear) => {
    this.setState({
      filteredData: allTransactions
        .filter(
          (el) => moment(el.transactionDate).format("YYYY") === currentYear
        )
        .filter(
          (el) => moment(el.transactionDate).format("MMMM") === currentMonth
        ),
    });
  };

  filterDataFromTable = (filteredData) =>
    filteredData
      .filter((el) => el.type === "EXPENCE")
      .map((el) => ({
        category: el.categoryId,
        amount: el.amount,
        comment: el.comment,
      }))
      .reduce((acc, el) => {
        if (acc.length > 0) {
          if (acc.find((item) => item.category === el.category)) {
            return acc.map((mapItem) =>
              mapItem.category === el.category
                ? { ...mapItem, amount: mapItem.amount + el.amount }
                : mapItem
            );
          }
          return [...acc, el];
        }
        return [...acc, el];
      }, [])
      .map((el) => ({
        category: el.category,
        totalAmount: el.amount,
        comment: el.comment,
      }));

  changeCurrentMonthOrYear = (newCurrentMonth, newCurrentYear) =>
    this.setState({
      currentMonth: newCurrentMonth,
      currentYear: newCurrentYear,
    });

  handleChangeMonth = (selectedOption) => {
    this.setState({ selectedMonth: selectedOption });
  };

  handleChangeYear = (selectedOption) => {
    this.setState({ selectedYear: selectedOption });
  };

  addColor = (arr) => arr.map((el, ind) => ({ ...el, color: colors[ind] }));
  render() {
    const {
      months,
      years,
      selectedMonth,
      selectedYear,
      filteredData,
    } = this.state;
    const totalMonthIncome = filteredData.reduce(
      (acc, el) => (el.type === "INCOME" ? acc + el.amount : acc),
      0
    );
    const totalMonthExpense = filteredData.reduce(
      (acc, el) => (el.type === "EXPENCE" ? acc + el.amount : acc),
      0
    );
    const arrData = this.addColor(this.filterDataFromTable(filteredData));

    return (
      <div className={styles.container}>
        <div className={styles.diagramContainer}>
          <p className={styles.label}>Cтатистика</p>
          <StatsGraph arrData={arrData} />
        </div>
        <div className={styles.tableContainer}>
          <StatsTable
            totalMonthIncome={totalMonthIncome}
            totalMonthExpense={totalMonthExpense}
            availableMonths={months}
            availableYears={years}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            handleChangeMonth={this.handleChangeMonth}
            handleChangeYear={this.handleChangeYear}
            arrDataForTable={arrData}
          />
        </div>
      </div>
    );
  }
}
