import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "../../../redux/wallet/walletOperation";
import {
  getCurrencyRateFiltered,
} from "../../../redux/wallet/walletSelectors";

export default function CurrencyRates() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);
  const currencyRate = useSelector((state) => getCurrencyRateFiltered(state));
;
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
