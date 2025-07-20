import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Limelight } from "next/font/google";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <div className={lime.className}>
      <div className="bg-[#e7b6a9] flex justify-evenly w-5/6 h-40 m-auto">
        <div>
          <h1 className="text-xl">Contact me!</h1>
          <p>Phone#972-469-0865</p>
          <a
            href="https://www.instagram.com/canvas.bakery/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
            <p className="text-lg">canvas.bakery</p>
          </a>
        </div>

        <p>
          <Link href={"/faq"}>FAQ</Link>
        </p>

        <p>Based in Dallas, Tx 75228</p>
      </div>
    </div>
  );
}
