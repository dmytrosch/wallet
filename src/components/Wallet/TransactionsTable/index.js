import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { getAlltransactions } from "../../../redux/wallet/walletSelectors";

import styles from "./TransactionsTable.module.css";

function TransactionsTable({ allTransactions }) {
  const INCOME = "INCOME";

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
      {allTransactions.map((item) => (
        <li
          key={item.id}
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
                `${item.type === INCOME ? styles.colorGreen : styles.colorRed}`,
                styles.itemData
              )}
            >
              {item.amount}
            </span>
          </div>
          <div className={classNames(styles.item, styles.balanceAfter)}>
            <span className={styles.itemTitle}>Баланс</span>
            <span className={styles.itemData}>{item.balanceAfter}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  allTransactions: getAlltransactions(state),
});

export default connect(mapStateToProps)(TransactionsTable);

TransactionsTable.defaultProps = {
  allTransactions: [],
};
