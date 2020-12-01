import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import formatNumber from "../../../utils/formatNumber";

import { getAllTransactions } from "../../../redux/wallet/walletSelectors";
import { isLoading } from "../../../redux/loading/loadingSelector";

import styles from "./TransactionsTable.module.css";
import animation from "../../../styles/tableItem.animation.module.css";

export default function TransactionsTable() {
  const INCOME = "INCOME";
  const allTransactions = useSelector(getAllTransactions);
  const loading = useSelector(isLoading);
  return (
    <ul className={styles.table}>
      <li className={classNames(styles.row, styles.header)}>
        <div className={classNames(styles.item, styles.date)}>Дата</div>
        <div className={classNames(styles.item, styles.type)}>Тип</div>
        <div className={classNames(styles.item, styles.category)}>
          Категория
        </div>
        <div className={classNames(styles.item, styles.comment)}>
          Комментарий
        </div>
        <div className={classNames(styles.item, styles.amount)}>Сумма</div>
        <div className={classNames(styles.item, styles.balanceAfter)}>
          Баланс
        </div>
      </li>
      <TransitionGroup component={null}>
        {allTransactions.map((item) => (
          <CSSTransition
            timeout={250}
            key={item.id}
            classNames={animation}
            unmountOnExit
          >
            <li
              className={item.type === INCOME ? styles.rowGreen : styles.rowRed}
            >
              <div className={classNames(styles.item, styles.date)}>
                <span className={styles.itemTitle}>Дата</span>
                <span className={styles.itemData}>{item.transactionDate}</span>
              </div>
              <div className={classNames(styles.item, styles.type)}>
                <span className={styles.itemTitle}>Тип</span>
                <span className={styles.itemData}>
                  {item.type === INCOME ? "+" : "-"}
                </span>
              </div>
              <div className={classNames(styles.item, styles.category)}>
                <span className={styles.itemTitle}>Категория</span>
                <span className={styles.itemData}>{item.category}</span>
              </div>
              <div className={classNames(styles.item, styles.comment)}>
                <span className={styles.itemTitle}>Комментарий</span>
                <span className={styles.itemData}>{item.comment}</span>
              </div>
              <div className={classNames(styles.item, styles.amount)}>
                <span className={styles.itemTitle}>Сумма</span>
                <span
                  className={classNames(
                    item.type === INCOME ? styles.colorGreen : styles.colorRed,
                    styles.itemData
                  )}
                >
                  {formatNumber(item.amount)}
                </span>
              </div>
              <div className={classNames(styles.item, styles.balanceAfter)}>
                <span className={styles.itemTitle}>Баланс</span>
                <span className={styles.itemData}>
                  {formatNumber(item.balanceAfter)}
                </span>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {!loading && !allTransactions.length && (
        <li className={styles.text}>
          <span>Список операций пуст</span>
        </li>
      )}
    </ul>
  );
}
