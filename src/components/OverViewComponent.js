import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ expense, income, addTransactions }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button
          className={isShow ? "btn cancel-btn" : "btn"}
          onClick={() => {
            setIsShow((prevState) => !prevState);
          }}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransactions={addTransactions} setIsShow={setIsShow}/>}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          Income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
