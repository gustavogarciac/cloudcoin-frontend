// "use client";

import { api } from "@/services/api";
import { MountainSnow, Plus } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface Goal {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  user_id: string;
  current_amount: number;
  wished_amount: number;
  initial_date: Date;
  end_date: string;
  category: string;
}

export default async function Goals() {
  // const [goals, setGoals] = useState<Goal[]>([]);

  // useEffect(() => {
  //   const fetchGoals = async () => {
  //     const response = await api.get(
  //       "/goals/index/b574b781-c28d-471b-affe-c7de2dac9234",
  //     );
  //     setGoals(response.data);
  //   };

  //   fetchGoals();
  // }, []);
  async function fetchGoals() {
    try {
      const response = await api.get(
        "/goals/index/b574b781-c28d-471b-affe-c7de2dac9234",
      );
      const goalsArray: Goal[] = response.data;
      return goalsArray;
    } catch (error) {
      console.error("Error fetching goals: ", error);
    }
  }
  const goals = await fetchGoals();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h1 className="font-quicksand text-lg font-bold text-zinc-900">
          Goals
        </h1>
        <Link
          href={"/goals"}
          className="aspect-square cursor-pointer rounded-full bg-yellow-400  transition-colors hover:bg-yellow-600"
        >
          <Plus className="h-4 w-4 font-bold text-blue-800" />
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {goals &&
          goals.map((goal) => (
            <article
              className="flex w-full max-w-[150px] flex-col gap-8 rounded-md bg-white p-4 shadow"
              key={goal.id}
            >
              <div className="flex flex-col">
                <span className="font-quicksand text-lg font-bold leading-none text-zinc-600 ">
                  $ {goal.current_amount}
                </span>
                <small className="text-sm text-zinc-500">
                  {format(goal?.initial_date, "dd'/'MM'/'yyyy")}
                </small>
              </div>

              <div className="flex flex-col">
                <MountainSnow className="text-blue-600" />
                <h2 className="font-quicksand text-lg">{goal.category}</h2>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
