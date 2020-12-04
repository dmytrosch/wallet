import React from "react";
import NewTransaction from "../../components/Wallet/creatingTransaction/NewTransaction";

const NewTransactionView = ({ onClose, history }) => {
  React.useEffect(() => {
    document.title = "Новая транзакция || Wallet";
  }, []);
  return <NewTransaction onClose={() => history.push("/")} />;
};

export default NewTransactionView;
