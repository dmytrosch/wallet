import React, { useState } from "react";
import classNames from "classnames";

import styles from "./NewTransaction.module.css";

function NewTransaction() {
  // convert to work with backend
  const categories = ["Car", "Home", "Dog", "Health", "Sport"];

  const currentDate = new Date();
  const currentDateText = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "-");

  const [cost, setCost] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionDate, setTransactionDate] = useState(currentDateText);
  const [comment, setComment] = useState("");

  function handleInputChange(e) {
    switch (e.target.name) {
      case "cost":
        setCost(e.target.checked);
         break;
      case "categories":
        setCategory(e.target.value);
        break;

      case "amount":
        setAmount(e.target.value);
        break;

      case "transactionDate":
        setTransactionDate(e.target.value);
        break;

      case "comment":
        setComment(e.target.value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const objToPost = {
      transactionDate,
      type: !cost ? "INCOME" : "COST",
      categoryId: category,
      comment,
      amount,
    };

    console.log("Submitted", objToPost);
  }

  function handleCancel() {
    console.log("Close modal");
  }

  function textIncomeColorSelect() {
    if (!cost) {
      return classNames(styles.checkBox, styles.textGreen);
    } else return classNames(styles.checkBox);
  }

  function textCostColorSelect() {
    if (cost) {
      return classNames(styles.checkBox, styles.textRose);
    } else return classNames(styles.checkBox);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Добавить транзакцию</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <span className={classNames(textIncomeColorSelect())}>Income</span>

          <input type="checkbox" name="cost" onChange={handleInputChange} />

          <span className={classNames(textCostColorSelect())}>Cost</span>
        </div>

        {cost && (
          <select
            name="categories"
            className={styles.longInput}
            onChange={handleInputChange}
          >
            <option value="" hidden>
              Категория
            </option>

            {categories.map((category) => (
              <option value={category} placeholder="Категория" key={category}>
                {category}
              </option>
            ))}
          </select>
        )}

        <div className={styles.wrapper}>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
            name="amount"
            className={styles.shortInput}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="transactionDate"
            defaultValue={currentDateText}
            min={currentDateText}
            className={styles.shortInput}
            onChange={handleInputChange}
          ></input>
        </div>

        <input
          type="text"
          name="comment"
          placeholder="Комментарий"
          className={styles.longInput}
          onChange={handleInputChange}
        />

        <button type="submit" className={classNames(styles.button, styles.buttonAdd)}>
          Добавить
        </button>
        <button
          type="button"
          className={classNames(styles.button)}
          onClick={handleCancel}
        >
          Отмена
        </button>
      </form>
    </div>
  );
}

export default NewTransaction;
