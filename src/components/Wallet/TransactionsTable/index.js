import React from "react";
import classNames from "classnames";

import styles from "./TransactionsTable.module.css";

export default function TransactionsTable() {
  const allTransactions = [
    {
      id: "1",
      transactionDate: "04.01.19",
      type: "INCOME",
      category: "home",
      userId: "string",
      comment: "food fsjklds fsdfsdfsdsdf sdfsd sdfsdfsd",
      amount: 30,
      balanceAfter: 1300,
    },
    {
      id: "2",
      transactionDate: "04.01.19",
      type: "EXPENSE",
      category: "work",
      userId: "string",
      comment: "car",
      amount: 200,
      balanceAfter: 1100,
    },
    {
      id: "3",
      transactionDate: "04.01.19",
      type: "INCOME",
      category: "home",
      userId: "string",
      comment: "food fsjklds fsdfsdfsdsdf sdfsd sdfsdfsd",
      amount: 30,
      balanceAfter: 1300,
    },
    {
      id: "4",
      transactionDate: "04.01.19",
      type: "EXPENSE",
      category: "work",
      userId: "string",
      comment: "car",
      amount: 200,
      balanceAfter: 1100,
    },
  ];

  const INCOME = "INCOME";

  return (
    <div className={styles.container}>
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
                  `${
                    item.type === INCOME ? styles.colorGreen : styles.colorRed
                  }`,
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
    </div>
  );
}
