import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { Limelight } from "next/font/google";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex my-8">
          <Image
            src="/Logo.jpg"
            alt="Company Logo"
            width={300}
            height={300}
            className="ml-40"
          />
          <div className="flex flex-col  ">
            <h1 className={lime.className}>Creativity on a Cake</h1>
            <p> Started this business in 2023</p>
          </div>
        </div>
        <div className={lime.className}>
          <div className="my-8 w-5/6 m-auto bg-[#ffe7e0b8]">
            <h1 className="w-96 text-center text-xl">Popular Orders</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
