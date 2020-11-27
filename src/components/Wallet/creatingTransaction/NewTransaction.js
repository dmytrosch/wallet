import React, { useState } from "react";
import classNames from "classnames";

import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
import Checkbox from "../../../common/Checkbox/Checkbox";

import styles from "./NewTransaction.module.css";
import { useDispatch } from "react-redux";

import {addTransactionRequest} from '../../../redux/wallet/walletActions'
import walletReducer from '../../../redux/wallet/walletReducer'


function NewTransaction() {
  // convert to work with backend
  const categoriesCost = ["Car", "Home", "Dog", "Health", "Sport"];
  const categoriesIncome = ["Regular", "Non Regular"];

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

  const dispatch = useDispatch();

  // console.log(walletReducer);


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

    // () => {
    //   dispatch(addTransactionRequest())
    // }

    console.log("Submitted", objToPost);
  }

  function handleCancel() {
    console.log("Close modal");
  }

  function textIncomeColorSelect() {
    if (!cost) {
      return classNames(styles.textGreen);
    } else return classNames("");
  }

  function textCostColorSelect() {
    if (cost) {
      return classNames(styles.textRose);
    } else return classNames("");
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Добавить транзакцию</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wrap}>
          <span
            className={classNames(
              styles.spanText,
              styles.spanTextLeft,
              textIncomeColorSelect()
            )}
          >
            Income
          </span>

          <Checkbox isOn={cost} name="cost" onChange={handleInputChange} />

          <span
            className={classNames(
              styles.spanText,
              styles.spanTextRight,
              textCostColorSelect()
            )}
          >
            Cost
          </span>
        </div>

        <select
          name="categories"
          className={styles.longInput}
          onChange={handleInputChange}
        >
          <option value="" hidden className={styles.categoryOption}>
            Категория
          </option>

          {cost
            ? categoriesCost.map((category) => (
                <option value={category} placeholder="Категория" key={category}>
                  {category}
                </option>
              ))
            : categoriesIncome.map((category) => (
                <option value={category} placeholder="Категория" key={category}>
                  {category}
                </option>
              ))}
        </select>

        <div className={styles.wrapper}>
          <Input
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
            name="amount"
            inputClassNames={styles.shortInput}
            onChange={handleInputChange}
          />

          <Input
            type="date"
            name="transactionDate"
            defaultValue={currentDateText}
            min={currentDateText}
            inputClassNames={styles.shortInput}
            onChange={handleInputChange}
          ></Input>
        </div>

        <Input
          type="text"
          name="comment"
          placeholder="Комментарий"
          inputClassNames={styles.longInput}
          onChange={handleInputChange}
        />

        <Button
          color="green"
          type="submit"
          buttonCustomClass={styles.buttonAdd}
        >
          Добавить
        </Button>

        <Button type="button" onClick={handleCancel}>
          Отмена
        </Button>
      </form>
    </div>
  );
}

export default NewTransaction;
