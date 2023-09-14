import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

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
  async function fetchTransactions() {
    try {
      const response = await api.get(
        `/transactions/b574b781-c28d-471b-affe-c7de2dac9234`,
      );
      const transactionsArray: Transactions[] = response.data;
      return transactionsArray;
    } catch (error) {
      console.error("Fetch error: ", error);
      return null;
    }
  }
  const transactions = await fetchTransactions();
  return (
    <div>
      <h1 className="font-quicksand text-lg font-bold leading-relaxed text-zinc-900">
        Transaction history
      </h1>
      {transactions ? (
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
              <th className="text-left font-quicksand text-zinc-700 ">
                Amount
              </th>
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
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Not found any transaction"
            src={"/assets/notfound.svg"}
            width={160}
            height={160}
          />
          <h1>It seems you don't have any transactions registered yet.</h1>
          <Button variant={"outline"}>
            <Link href="/new-transaction">Create a new one!</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
