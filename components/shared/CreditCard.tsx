interface Props {
  user: {
    firstName: string;
    lastName?: string;
    id: string;
  };
}

const CreditCard = ({ userFirstName }: { userFirstName: string }) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 p-3">
      <header className="flex flex-col">
        <span className="font-quicksand font-bold leading-none text-zinc-50">
          cloudcoin
        </span>
        <span className="text-xs text-zinc-50/50">
          your financial dashboard
        </span>
      </header>
      <span className="font-lato text-2xl text-zinc-50">
        5789 **** **** 2847
      </span>

      <footer>
        <div>
          <span>Card holder</span>
          <span>{userFirstName}</span>
        </div>
      </footer>
    </div>
  );
};

export default CreditCard;
