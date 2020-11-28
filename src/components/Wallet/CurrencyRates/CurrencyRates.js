import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrency } from "../../../redux/wallet/walletOperation";
import { getCurrencyRateFiltered } from "../../../redux/wallet/walletSelectors";
import CurrencySVG from "./CurrencySVG";
import css from "./CurrencyRates.module.css";

export default function CurrencyRates() {
  const {
    container,
    CurrencyRates_text_Container,
    CurrencyRates_value_Container,
    span_text,
    span_value,
    container_span,
    box_span,
    svg,
  } = css;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const currencyRate = useSelector((state) => getCurrencyRateFiltered(state));

  return (
    <>
      {currencyRate.length && (
        <div className={container}>
          <div className={CurrencyRates_text_Container}>
            <span className={span_text}>Валюта</span>
            <span className={span_text}>Покупка</span>
            <span className={span_text}>Продажа</span>
          </div>
          <div className={CurrencyRates_value_Container}>
            {currencyRate.map((item) => (
              <div className={box_span} key={item.ccy}>
                <div className={container_span}>
                  <span className={span_value}> {item.ccy}</span>
                </div>
                <div className={container_span}>
                  <span className={span_value}>{item.buy}</span>
                </div>
                <div className={container_span}>
                  <span className={span_value}>{item.sale}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={svg}>
            <CurrencySVG />
          </div>
        </div>
      )}
    </>
  );
}
