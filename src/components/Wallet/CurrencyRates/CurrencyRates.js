import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "../../../redux/wallet/walletOperation";
import { getCurrencyRateFiltered } from "../../../redux/wallet/walletSelectors";
import CurrencyGraphSVG from "./CurrencyGraphSVG";
import css from "./CurrencyRates.module.css";
import formattingNumber from '../../../utils/formattingNumber';

export default function CurrencyRates() {
  const {
    container,
    header,
    header__item,
    container_body,
    body,
    body__item,
    graphSVG,
  } = css;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const currencyRate = useSelector((state) => getCurrencyRateFiltered(state));

  return (
    <>
      <div className={container}>
        <ul className={header}>
          <li className={header__item}>Валюта</li>
          <li className={header__item}>Покупка</li>
          <li className={header__item}>Продажа</li>
        </ul>

        <div className={container_body}>
          {currencyRate.map((item) => (
            <ul key={item.ccy} className={body}>
              <li className={body__item}>{item.ccy}</li>
              <li className={body__item}>{formattingNumber(item.buy)}</li>
              <li className={body__item}>{formattingNumber(item.sale)}</li>
            </ul>
          ))}
          <div className={graphSVG}>
            <CurrencyGraphSVG />
          </div>
        </div>
      </div>
    </>
  );
}
