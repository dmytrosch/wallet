<<<<<<< HEAD
import React, {useState} from "react";
=======
import React, { useState } from "react";
>>>>>>> 5b2b78ff5890409dcab166cbd3cc09e958c67787
import Button from "../common/Button";
import Layout from "../views/Layout";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance/Balance";
import CurrencyRates from "../components/Wallet/CurrencyRates/CurrencyRates";
import TransactionsTable from "../components/Wallet/TransactionsTable";
import styles from "./MainView.module.css";
import Header from "../components/Header";
import ModalPortal from "../components/Wallet/creatingTransaction/ModalPortal";
import Modal from "../components/Wallet/creatingTransaction/Modal";
import NewTransaction from "../components/Wallet/creatingTransaction/NewTransaction";


import ModalPortal from "../components/Wallet/creatingTransaction/ModalPortal";
import Modal from "../components/Wallet/creatingTransaction/Modal";
import NewTransaction from "../components/Wallet/creatingTransaction/NewTransaction";

const MainView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      <Header />
      <Layout>
        <div className={styles.container}>
          <div className={styles.tabletContainer}>
            <div className={styles.navigation}>
              <Navigation />
              <Balance />
            </div>
            <div className={styles.currency}>
              <CurrencyRates />
            </div>
          </div>
          <div className={styles.transactions}>
            <TransactionsTable />
          </div>
          <div className={styles.btnContainer}>
            <Button shape="circle" color="green" onClick={toggleModal}>
              <span className={styles.btnLogo}>+</span>
            </Button>
          </div>
        </div>
        <ModalPortal>
          {showModal && (
            <Modal onClose={toggleModal}>
              <NewTransaction onClose={toggleModal} />
            </Modal>
          )}
        </ModalPortal>
      </Layout>

      <ModalPortal>
        {showModal && (
          <Modal onClose={toggleModal}>
            <NewTransaction onClose={toggleModal} />
          </Modal>
        )}
      </ModalPortal>
    </>
  );
};

export default MainView;
