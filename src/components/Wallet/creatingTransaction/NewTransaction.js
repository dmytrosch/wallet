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
  dropdownIncomeCategoriesSelector,
  dropdownExpenseCategoriesSelector,
  getBalance,
} from "../../../redux/wallet/walletSelectors";

import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";

function NewTransaction({ onClose }) {
  const categoriesIncome = useSelector(dropdownIncomeCategoriesSelector);
  const categoriesCost = useSelector(dropdownExpenseCategoriesSelector);

  const currentDate = new Date();

  const [cost, setCost] = useState(false);
  const [categoryName, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [pickerDate, setPickerDate] = useState(new Date());

  const dispatch = useDispatch();

  function handleInputChange(e) {
    switch (e.target.name) {
      case "cost":
        setCost(e.target.checked);
        break;
      case "amount":
        setAmount(e.target.value);
        break;
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
    const objToPost = {
      transactionDate: pickerDate.toISOString().slice(0, 10).replace(/-/g, "-"),
      type: !cost ? "INCOME" : "EXPENSE",
      categoryId: !cost
        ? categoriesIncome.find((category) => category.text === categoryName)
            .key
        : categoriesCost.find((category) => category.text === categoryName).key,

      comment,
      amount: !cost ? amount : -amount,
    };

    dispatch(addTransaction(objToPost));
    onClose();
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
              !cost && styles.textGreen
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
              cost && styles.textRose
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
            onChange={handleInputChange}
          />

          <div className={classNames(styles.datePickerContainer)}>
            <DatePicker
              selected={pickerDate}
              dateFormat="yyyy/MM/dd"
              maxDate={currentDate}
              onChange={(date) =>
                setPickerDate(new Date(date - date.getTimezoneOffset() * 60000))
              }
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
