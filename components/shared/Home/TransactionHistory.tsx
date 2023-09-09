"use client";

import { api } from "@/services/api";
import { useEffect, useState } from "react";

// const transactions = [
//   {
//     _id: "231muedi912h3021dn0128bns081",
//     reciever: "Tesco Market",
//     type: "Shopping",
//     date: "13 Dec 2022",
//     amount: -5.98,
//   },
//   {
//     _id: "dhwb19ty3vb19o2ny39170db0a",
//     reciever: "eBook Sales",
//     type: "Sales",
//     date: "11 Dec 2022",
//     amount: 10.24,
//   },
// ];
interface Transactions {
  _id: string;
  reciever: string;
  type: string;
  title: string;
  description: string;
  amount: number;
  date: string;
}
const TransactionHistory = ({ userId }: { userId: String }) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await api.get(`/transactions/${userId}`);
        const transactionsArray: Transactions[] = response.data;
        setTransactions(transactionsArray);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    }
    fetchTransactions();
  }, [userId]);
  return (
    <div>
      <h1>Transaction history</h1>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <th className="text-left font-quicksand text-zinc-700 ">
              Reciever
            </th>
            <th className="text-left font-quicksand text-zinc-700 ">Type</th>
            <th className="text-left font-quicksand text-zinc-700 ">Date</th>
            <th className="text-left font-quicksand text-zinc-700 ">Amount</th>
          </tr>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.reciever}
                </td>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.type}
                </td>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.date}
                </td>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.amount}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
