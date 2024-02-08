import Image from "next/image";
import { Button } from "@/components/ui/button";
import guy1 from "@/assets/guy1.svg";
import guy2 from "@/assets/guy2.svg";
import guy3 from "@/assets/guy3.svg";

export default function Home() {
  return (
    <main className="flex h-[92vh] min-h-[92vh] flex-col items-center p-24">
      <h1 className="text-6xl font-black">Unlock Your Financial Potential:</h1>
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-6xl font-black text-transparent">
        Empower Your Dreams
      </h1>
      <Button className="my-2 sm:hidden" size={"full"} variant={"outline"}>
        Register Now
      </Button>
      <div className="flex flex-row items-center justify-center">
        <Image src={guy1} alt="" />
        <Image src={guy2} alt="" />
        <Image src={guy3} alt="" />
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex aspect-square h-[20vh] items-center justify-center rounded-lg border-4 border-neutral-100 text-center text-xl font-medium hover:bg-neutral-100">
          Home
          <br />
          Loans
        </div>
        <div className="flex aspect-square h-[20vh] items-center justify-center rounded-lg border-4 border-neutral-100 text-center text-xl font-medium hover:bg-neutral-100">
          Personal
          <br />
          Loans
        </div>
        <div className="flex aspect-square h-[20vh] items-center justify-center rounded-lg border-4 border-neutral-100 text-center text-xl font-medium hover:bg-neutral-100">
          Credit
          <br />
          Cards
        </div>
        <div className="flex aspect-square h-[20vh] items-center justify-center rounded-lg border-4 border-neutral-100 text-center text-xl font-medium hover:bg-neutral-100">
          Business
          <br />
          Loans
        </div>
      </div>
    </main>
  );
}
