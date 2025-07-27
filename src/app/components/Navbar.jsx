import Link from "next/link";
import { Limelight } from "next/font/google";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });
export default function Navigations() {
  return (
    <div className={lime.className}>
      <div className="flex justify-evenly text-xl bg-[#e7b6a9] w-5/6 m-auto">
        <Link href={"/"}>Home</Link>
        <Link href={"/ordering"}>How to Order</Link>
      </div>
    </div>
  );
}
