export const fetchCurrency = () => {
  return fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );
};
