import React from "react";
import Transaction from "./Transaction";

export default function TransactionList({transactions}) {

    return (
        <section className="new-transaction-section">
            <h2>Transanctions</h2>
            <ul className="new-transaction-list">
                {transactions.map((t) => (
                   <Transaction transaction={t} key={t.id} /> 
                ))}
            </ul>
        </section>
    )
}