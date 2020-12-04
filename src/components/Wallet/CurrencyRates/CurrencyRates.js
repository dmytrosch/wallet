import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "../../../redux/wallet/walletOperation";
import { getCurrencyRateFiltered } from "../../../redux/wallet/walletSelectors";
import CurrencyGraphSVG from "./CurrencyGraphSVG";
import css from "./CurrencyRates.module.css";
import formattingNumber from "../../../utils/formattingNumber";

export default function CurrencyRates() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const currencyRate = useSelector(getCurrencyRateFiltered);

  return (
    <>
      <div className={css.container}>
        <ul className={css.header}>
          <li className={css.header__item}>Валюта</li>
          <li className={css.header__item}>Покупка</li>
          <li className={css.header__item}>Продажа</li>
        </ul>

        <div className={css.container_body}>
          <div className={css.graphSVG}>
            <CurrencyGraphSVG />
          </div>
          {currencyRate.map((item) => (
            <ul key={item.ccy} className={css.body}>
              <li className={css.body__item}>{item.ccy}</li>
              <li className={css.body__item}>{formattingNumber(item.buy)}</li>
              <li className={css.body__item}>{formattingNumber(item.sale)}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
