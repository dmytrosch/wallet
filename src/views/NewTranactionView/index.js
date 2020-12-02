import React from "react";
import NewTransaction from "../../components/Wallet/creatingTransaction/NewTransaction";

const NewTransactionView = ({ onClose, history }) => {
  return <NewTransaction onClose={() => history.push("/")} />;
};

export default NewTransactionView;
