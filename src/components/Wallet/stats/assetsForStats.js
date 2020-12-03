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
    cursor: "pointer",
    width: "160px",
    height: "50px",
    border: "1px solid black",
    borderRadius: "30px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    "@media(min-width: 767px)": {
      width: "160px",
      marginRight: "26px",
    },
    "@media(max-width: 766px)": {
      width: "280px",
    },
  }),

  singleValue: () => ({
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Circe",
    marginLeft: "21px",
    lineHeight: "24px",
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

const transactions = [];
export default transactions;

export const colors = [
  "#67b7d0",
  "#5593d7",
  "#e28b20",
  "#3e6ba8",
  "#9cc254",
  "#73ad57",
  "#507c3a",
  "#ecb22a",
  "#d25925",
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
