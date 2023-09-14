import CreditCard from "../CreditCard";

const Cards = ({ userFirstName }: { userFirstName: string }) => {
  return (
    <div className="rounded-md bg-white p-4 shadow">
      <h1 className="font-quicksand text-lg font-bold text-zinc-900">Cards</h1>
      <div className="flex gap-4">
        <CreditCard userFirstName={userFirstName} />
        {/* Card Placeholder */}
        <div className="flex flex-col justify-around">
          {/* Current Balance */}
          <div className="flex flex-col">
            <span className="font-quicksand text-xl font-bold leading-none text-blue-500">
              $ 2850.75
            </span>
            <small className="font-quicksand text-zinc-600">
              Current balance
            </small>
          </div>
          {/* Income Status */}
          <div className="flex flex-col">
            <span className="font-quicksand text-xl font-bold leading-none text-green-500">
              $ 1500.50
            </span>
            <small className="font-quicksand text-zinc-600">Income</small>
          </div>
          {/* Outcome Status */}
          <div className="flex flex-col">
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
