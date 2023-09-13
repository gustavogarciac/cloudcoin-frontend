import { api } from "@/services/api";
import { format } from "date-fns";

interface Transactions {
  id: string;
  receiver: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  created_at: Date;
}
const TransactionHistory = async ({ userId }: { userId: String }) => {
  // const [transactions, setTransactions] = useState<Transactions[]>([]);
  // useEffect(() => {
  //   async function fetchTransactions() {
  //     try {
  //       const response = await api.get(
  //         `/transactions/b574b781-c28d-471b-affe-c7de2dac9234`,
  //       );
  //       const transactionsArray: Transactions[] = response.data;
  //       setTransactions(transactionsArray);
  //     } catch (error) {
  //       console.error("Fetch error: ", error);
  //     }
  //   }
  //   fetchTransactions();
  // }, [userId]);
  async function fetchTransactions() {
    try {
      const response = await api.get(
        `/transactions/b574b781-c28d-471b-affe-c7de2dac9234`,
      );
      const transactionsArray: Transactions[] = response.data;
      return transactionsArray;
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }
  const transactions = await fetchTransactions();
  return (
    <div>
      <h1>Transaction history</h1>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <th className="text-left font-quicksand text-zinc-700 ">
              Receiver
            </th>
            <th className="text-left font-quicksand text-zinc-700 ">
              Category
            </th>
            <th className="text-left font-quicksand text-zinc-700 ">Date</th>
            <th className="text-left font-quicksand text-zinc-700 ">Amount</th>
          </tr>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.receiver}
                </td>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {transaction?.category}
                </td>
                <td className="border-t-zic-400 border-b border-t py-2">
                  {format(transaction?.created_at, "dd'/'MM'/'yyyy")}
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
