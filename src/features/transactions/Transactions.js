import React from "react";
import { useSelector } from "react-redux";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import { selectTransactions } from "./transactionsSlice";

const Transanctions = () => {
    const transacations = useSelector(selectTransactions);// need parameters

    return (
        <div className="comments-container">
            <TransactionList transactions={transacations} />
            <TransactionForm />
        </div>
    );
};

export default Transanctions;