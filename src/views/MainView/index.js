import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../common/Button";
import Layout from "../Layout";
import Navigation from "../../components/Navigation";
import Balance from "../../components/Wallet/Balance/Balance";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";
import TransactionsTable from "../../components/Wallet/TransactionsTable";
import styles from "./MainView.module.css";
import Header from "../../components/Header";
import ModalPortal from "../../components/Wallet/creatingTransaction/ModalPortal";
import Modal from "../../components/Wallet/creatingTransaction/Modal";
import NewTransaction from "../../components/Wallet/creatingTransaction/NewTransaction";
import { isMobile } from "../../redux/clientWidth/clientWidthSelectors";

const MainView = (props) => {
  const [showModal, setShowModal] = useState(false);
  const _isMobile = useSelector(isMobile);
  const toggleModal = () => {
    _isMobile
      ? props.history.push("/new-transaction")
      : setShowModal((prevState) => !prevState);
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
              {!_isMobile && <CurrencyRates />}
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
