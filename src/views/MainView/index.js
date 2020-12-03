import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../common/Button";
import Layout from "../authLayout";
import TransactionsTable from "../../components/Wallet/TransactionsTable";
import styles from "./MainView.module.css";
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
  useEffect(() => (document.title = "Главная || Wallet"), []);

  return (
    <>
      <Layout>
        <TransactionsTable />
        <div className={styles.btnContainer}>
          <Button shape="circle" color="green" onClick={toggleModal}>
            <span className={styles.btnLogo}>+</span>
          </Button>
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
