export const customStyles = {
  container: () => ({
    padding: "10px",
    "@media(min-width: 730px)": {
      padding: "10px",
      width: "180px",
    },
    "@media(max-width: 730px)": {
      padding: "10px",
      display: "flex",
      flexWrap: "wrap",
    },
  }),
  control: () => ({
    width: "160px",
    height: "50px",
    border: "1px solid black",
    borderRadius: "30px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    "@media(min-width: 730px)": {
      width: "160px",
      marginRight: "26px",
    },
    "@media(max-width: 730px)": {
      width: "280px",
    },
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
    zIndex: "999",
    border: "1px solid black",
  }),
};

const transactions = [
  {
    transactionDate: "2020-10-26",
    type: "INCOME",
    categoryId: "Дом",
    comment: "pay",
    amount: 50,
  },
  {
    transactionDate: "2020-10-26",
    type: "EXPENCE",
    categoryId: "Жена",
    comment: "pay",
    amount: 50,
  },
  {
    transactionDate: "2020-10-26",
    type: "INCOME",
    categoryId: "Машина",
    comment: "pay",
    amount: 10,
  },
  {
    transactionDate: "2020-10-25",
    type: "INCOME",
    categoryId: "Робота",
    comment: "pay",
    amount: 50,
  },
  {
    transactionDate: "2020-09-25",
    type: "INCOME",
    categoryId: "Машина",
    comment: "pay",
    amount: 50,
  },
  {
    transactionDate: "2020-09-25",
    type: "INCOME",
    categoryId: "Отдых",
    comment: "pay",
    amount: 50,
  },
  {
    transactionDate: "2020-09-25",
    type: "EXPENCE",
    categoryId: "Отдых",
    comment: "pay",
    amount: 100,
  },
  {
    transactionDate: "2020-09-25",
    type: "EXPENCE",
    categoryId: "Дом",
    comment: "pay",
    amount: 10,
  },
  {
    transactionDate: "2020-09-25",
    type: "EXPENCE",
    categoryId: "Робота",
    comment: "pay",
    amount: 10,
  },
  {
    transactionDate: "2020-09-25",
    type: "EXPENCE",
    categoryId: "Интернет",
    comment: "pay",
    amount: 10,
  },
  {
    transactionDate: "2020-09-25",
    type: "EXPENCE",
    categoryId: "Покупки",
    comment: "pay",
    amount: 10,
  },
];
export default transactions;

export const colors = [
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

export const optionsMonth = [
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

export const optionsYear = [
  { value: "Год", label: "Год" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
];
