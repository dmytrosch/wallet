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
  "#d50000",
  "#f50057",
  "#aa00ff",
  "#673ab7",
  "#3d5afe",
  "#42a5f5",
  "#00bcd4",
  "#1de9b6",
  "#4caf50",
  "#76ff03",
  "#f9a825",
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
