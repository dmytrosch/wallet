import React, { Component } from "react";
import StatsGraph from "./StatsGraph";
import moment from "moment";
import "moment/locale/ru";
import StatsTable from "./StatsTable";
import "chartjs-plugin-labels";
import styles from "./Filter.module.css";

const colors = [
  "#ecb22a",
  "#e28b20",
  "#d25925",
  "#67b7d0",
  "#5593d7",
  "#3e6ba8",
  "#9cc254",
  "#73ad57",
  "#507c3a",
];

const optionsMonth = [
  { value: "Месяц", label: "Месяц" },
  { value: "январь", label: "Январь" },
  { value: "февраль", label: "Февраль" },
  { value: "март", label: "Mарт" },
  { value: "апрель", label: "Апрель" },
  { value: "май", label: "Май" },
  { value: "июнь", label: "Июнь" },
  { value: "июль", label: "Июль" },
  { value: "август", label: "Август" },
  { value: "сентябрь", label: "Сентябрь" },
  { value: "октябрь", label: "Октябрь" },
  { value: "ноябрь", label: "Ноябрь" },
  { value: "декабрь", label: "Декабрь" },
];

const optionsYear = [
  { value: "Год", label: "Год" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
];

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
    console.log(allTransactions);
    const { currentMonth, currentYear } = this.state;
    this.filterTransactionData(allTransactions, currentMonth, currentYear);
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
          if (acc.find((item) => item.category === el.categoryId)) {
            return acc.map((mapItem) =>
              mapItem.category === el.categoryId
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

    const diagramData = () => {
      let option = {
        labels: arrData.map(({ comment }) => comment),
        datasets: [
          {
            label: "wallet",
            fill: false,
            lineTension: 0.1,
            data: arrData.map(({ totalAmount }) => totalAmount),
            backgroundColor: arrData.map(({ color }) => color),
          },
        ],
      };
      return option;
    };
    return (
      <div className={styles.container}>
        <div className={styles.diagramContainer}>
          <p className={styles.label}>Cтатистика</p>
          <StatsGraph chartData={diagramData} />
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
