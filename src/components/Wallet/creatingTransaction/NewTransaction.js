import React, { useState } from "react";
import classNames from "classnames";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";

import styles from "./NewTransaction.module.css";
import { useDispatch, useSelector } from "react-redux";

import { addTransaction } from "../../../redux/wallet/walletOperation";

import { Dropdown } from "semantic-ui-react";

import DatePicker from "react-datepicker";

import {
  makeAlertNotification,
  makeSuccessNotification,
} from "../../../redux/notifications/notificationOperations";
import {
  getCategories,
  getBalance,
} from "../../../redux/wallet/walletSelectors";

import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";

function NewTransaction({ onClose }) {
  const categiries = useSelector(getCategories);

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

  const balanceAfterLastTransaction = useSelector(getBalance);

  function handleSubmit(e) {
    e.preventDefault();

    if (!categoryName) {
      dispatch(makeAlertNotification("Выберите категорию"));
      return;
    }

    if (amount <= 0) {
      dispatch(
        makeAlertNotification("Значение суммы операции должно быть больше 0")
      );
      return;
    }

    if (cost && amount > balanceAfterLastTransaction) {
      dispatch(
        makeAlertNotification("Значение операции больше чем доступный баланс")
      );
      return;
    }

    // if(!categoriesIncome || !categoriesCost) {
    //   dispatch(makeAlertNotification("Выберите категорию"));
    // }

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

    // console.log(objToPost);

    dispatch(addTransaction(objToPost));
    onClose();
    dispatch(makeSuccessNotification("Транзакция успешно добавлена!"));

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
            Доход
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
            Расход
          </span>
        </div>

        <Dropdown
          placeholder="Выберите категорию"
          search
          selection
          options={cost ? categoriesCost : categoriesIncome}
          onChange={(e, data) => {
            console.log(data.value);
            // if (
            //   e.target.className === "search" ||
            //   !e.target.firstElement.textContent
            // ) {
            //   console.log("returned");
            //   return;
            // }
            setCategory(data.value);
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
            // labelClassNames={styles.labelNumber}
            onChange={handleInputChange}
            // onChange={e=>console.dir(e.target)}
          />

          <div className={classNames(styles.datePickerContainer)}>
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
