import { Separator } from "@/components/ui/separator";
import CreditCard from "../CreditCard";

const Cards = ({ userFirstName }: { userFirstName: string }) => {
  return (
    <div className="rounded-md bg-white p-4 shadow">
      <h1 className="font-quicksand text-lg font-bold text-zinc-900">Cards</h1>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="border border-red-500 w-full">
          <CreditCard userFirstName={userFirstName} />
        </div>
        {/* Card Placeholder */}
        <div className="sm:space-y-3 flex justify-between sm:flex-col sm:justify-start">
          {/* Current Balance */}
          <div className="flex flex-col items-end">
            <span className="font-quicksand text-xl font-bold leading-none text-blue-500">
              $ 2850.75
            </span>
            <small className="font-quicksand text-zinc-600">
              Current balance
            </small>
          </div>
          {/* Income Status */}
          <div className="flex flex-col items-end">
            <span className="font-quicksand text-xl font-bold leading-none text-green-500">
              $ 1500.50
            </span>
            <small className="font-quicksand text-zinc-600">Income</small>
          </div>
          {/* Outcome Status */}
          <div className="flex flex-col items-end">
            <span className="font-quicksand text-xl font-bold leading-none text-red-500">
              $ 350.60
            </span>
            <small className="font-quicksand text-zinc-600">Outcome</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
