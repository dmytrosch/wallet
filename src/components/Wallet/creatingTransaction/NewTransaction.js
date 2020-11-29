import React, { useState } from "react";
import classNames from "classnames";

import Input from "../../../common/Input";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";

import styles from "./NewTransaction.module.css";
import { useDispatch } from "react-redux";

import { addTransaction } from "../../../redux/wallet/walletOperation";

import { Dropdown } from "semantic-ui-react";

import categiries from "./categories.json";

import DatePicker from "react-datepicker";

import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";

function NewTransaction({ onClose }) {
  // convert to work with backend

  const categoriesIncome = categiries
    .filter((category) => category.type === "INCOME")
    .map((category) => {
      return {
        key: category.id,
        text: category.name,
        value: category.name,
        type: category.type,
      };
    });
  const categoriesCost = categiries
    .filter((category) => category.type === "EXPENSE")
    .map((category) => {
      return {
        key: category.id,
        text: category.name,
        value: category.name,
        type: category.type,
      };
    });

  const currentDate = new Date();
  // const currentDateText = currentDate
  //   .toISOString()
  //   .slice(0, 10)
  //   .replace(/-/g, "-");

  const [cost, setCost] = useState(false);
  const [categoryName, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  // const [transactionDate, setTransactionDate] = useState(currentDateText);
  const [comment, setComment] = useState("");

  const [pickerDate, setPickerDate] = useState(new Date());

  const dispatch = useDispatch();

  function handleInputChange(e) {
    switch (e.target.name) {
      case "cost":
        setCost(e.target.checked);
        break;
      // case "categories":
      //   setCategory(e.target.firstElementChild.textContent);
      //   break;

      case "amount":
        setAmount(e.target.value);
        break;

      // case "transactionDate":
      //   setTransactionDate(e.target.value);
      //   break;

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
      transactionDate: pickerDate.toISOString().slice(0, 10).replace(/-/g, "-"),
      type: !cost ? "INCOME" : "EXPENSE",
      categoryId: !cost
        ? categoriesIncome.find((category) => category.text === categoryName)
            .key
        : categoriesCost.find((category) => category.text === categoryName).key,
      // categoryId: categoryName,

      comment,
      amount: !cost ? amount : -amount,
    };

    dispatch(addTransaction(objToPost));

    // console.log("Submitted", objToPost);
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

          <Checkbox
            isOn={cost}
            name="cost"
            onChange={handleInputChange}
            width={410}
          />

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

        <Dropdown
          placeholder="Категория"
          search
          selection
          options={cost ? categoriesCost : categoriesIncome}
          onChange={(e) => {

            console.dir(e.target)

            if (e.target.className === "search" || e.target.className === "text") {
              return;
            }
            
            setCategory(e.target.firstElementChild.textContent);
          }}
        />

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

          <div className={styles.datePickerContainer}>
            <DatePicker
              selected={pickerDate}
              dateFormat="yyyy/MM/dd"
              maxDate={currentDate}
              // onChange={(date) => setPickerDate(date)}
              onChange={(date) =>
                setPickerDate(new Date(date - date.getTimezoneOffset() * 60000))
              }
              // customInput={<Input type="date"/>}
            />
          </div>
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

        <Button type="button" onClick={onClose}>
          Отмена
        </Button>
      </form>
    </div>
  );
}

export default NewTransaction;
