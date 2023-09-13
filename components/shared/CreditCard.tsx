interface Props {
  user: {
    firstName: string;
    lastName?: string;
    id: string;
  };
}

const CreditCard = ({ userFirstName }: { userFirstName: string }) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 p-3 w-full min-h-[180px] max-w-[400px]">
      <header className="flex flex-col">
        <span className="font-quicksand font-bold leading-none text-zinc-50 md:text-lg ">
          cloudcoin
        </span>
        <span className="text-xs text-zinc-50/50 md:text-sm">
          your financial dashboard
        </span>
      </header>
      <span className="font-lato text-2xl text-zinc-50 md:text-3xl">
        5789 **** **** 2847
      </span>

      <footer className="flex gap-4 items-center">
        <div className="flex flex-col">
          <span className="text-xs text-zinc-50/60 md:text-sm">Card holder</span>
          <span className="text-xs text-zinc-50 md:text-sm">{userFirstName}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-zinc-50/60 md:text-sm">Expire date</span>
          <span className="text-xs text-zinc-50 md:text-sm">05/24</span>
        </div>
      </footer>
    </div>
  );
};

export default CreditCard;
