import { useState } from "react";

const TransActionForm = ({ addTransactions, setIsShow }) => {
  const [formValue, setFormValue] = useState({
    type: "Expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransactions(formValue);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
        placeholder="description"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        // value={formValue.amount}
        placeholder="amount"
      />
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="Expense"
          checked={formValue.type === "Expense"}
          onChange={changeHandler}
          id="Expense"
        />
        <label htmlFor="Expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="Income"
          onChange={changeHandler}
          checked={formValue.type === "Income"}
          id="Income"
        />
        <label htmlFor="Income">Income</label>
      </div>
      <button className="btn primary-btn" type="submit">
        Add Transactions
      </button>
    </form>
  );
};

export default TransActionForm;
