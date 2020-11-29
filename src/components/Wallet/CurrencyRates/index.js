import React from "react";
import { useSelector } from "react-redux";
import { getCurrencyRateFiltered } from "../../../redux/wallet/walletSelectors";

export default function CurrencyRates() {
  const currencyRate = useSelector((state) => getCurrencyRateFiltered(state));
  return (
    <>
      {currencyRate.length && (
        <div>
          <div>
            <span>Валюта</span>
            <span>Покупка</span>
            <span>Продажа</span>
          </div>
          {currencyRate.map((item) => (
            <div key={item.ccy}>
              <span>{item.ccy}</span>
              <span>{item.buy}</span>
              <span>{item.sale}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
