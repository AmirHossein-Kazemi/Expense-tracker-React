import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  // tnx => all transactions should be saved
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <p>add some tnx</p>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        className="search"
        placeholder="search for tnx ..."
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "Expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item match !"}
    </section>
  );
};

export default TransActionComponent;
