import Navigations from "./components/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <Image
        src="/Logo.jpg"
        alt="Bakery Logo"
        className="rounded-lg m-auto"
        width={600}
        height={400}
      />

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg">I love to bake!!!!!</p>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Contact Me!!</h1>

        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
      </div>
    </main>
  );
}
