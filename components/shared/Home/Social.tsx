import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

export const Social = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 bg-white rounded-md shadow p-4">
        <h1 className="font-quicksand text-lg text-zinc-900 font-bold mb-2">New transaction</h1>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/diego3g.png" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/viniciusaborba.png" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/gustavogarciac.png" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/maykbrito.png" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/gustavoguanabara.png" />
          </Avatar>

          <div>
            <Plus className="cursor-pointer rounded-full bg-yellow-500 text-blue-800" />
          </div>
        </div>

        <form className="mt-3 flex flex-row items-center gap-6">
          <Input placeholder="Send money to your friends" />
          <Button
            type="submit"
            className="bg-yellow-500 font-quicksand font-bold text-blue-800 transition-colors ease-in-out hover:bg-yellow-600"
          >
            Transfer
            <ChevronRight />
          </Button>
        </form>
      </div>

      <div className="h-36 w-32 bg-red-800 rounded-md relative p-4 overflow-hidden">
        <h1 className="font-quicksand text-sm text-zinc-50 font-bold leading-snug absolute bottom-2 z-10">Get great offers!</h1>
        <Image src={'/assets/popup.svg'} height={120} width={120} alt="popup" className="absolute top-[-8px] left-[-8px]"/>
      </div>
    </div>
  );
};
