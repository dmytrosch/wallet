import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";
import Loader from './Loader'

import ModalPortal from './Wallet/creatingTransaction/ModalPortal'
import Modal from './Wallet/creatingTransaction/Modal'

import NewTransaction from './Wallet/creatingTransaction/NewTransaction';


function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleModal}>Show portal</button>
        <ModalPortal>
          {showModal && <Modal onClose={toggleModal}>
             {/* Сюда рендерить детей */}

            <NewTransaction onClose={toggleModal}/>

            </Modal>}
        </ModalPortal>
      </header>
      <Notification />
    </div>
  );
}

export default App;
