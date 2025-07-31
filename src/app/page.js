import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { Limelight } from "next/font/google";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="my-8 ml-34">
          <div className="flex flex-col md:flex-row items-center gap-8 px-6">
            <div className="flex-shrink-0">
              <Image
                src="/Logo.jpg"
                alt="Company Logo"
                width={300}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="">
              <h1 className={`${lime.className} text-3xl font-bold mb-4`}>
                Creativity on a Cake
              </h1>
              <div className="text-base leading-relaxed text-gray-700 w-5/6">
                <p>
                  Hi, I’m Ashley! the heart and hands behind Canvas Bakery,
                  where every treat is a work of art! What started as a simple
                  love for baking, quickly turned into a passion for creating
                  desserts that not only taste amazing but also tell a story.
                  From custom cakes and cupcakes to detailed bento boxes, I
                  believe that sweets should be both beautiful and personal. The
                  name behind Canvas Bakery is because I genuinely believe every
                  cake, cupcake, baked good turns into art. It starts off as a
                  simple base and the more you add to it, it turns into an
                  art-piece; just like a canvas.
                </p>
                <p>
                  I run my home-based bakery under the Texas Cottage Food Law,
                  which means every item is lovingly made in my own kitchen
                  using quality ingredients and a whole lot of heart. Whether
                  you're celebrating a birthday, baby shower, or just craving
                  something sweet, I’m here to help bring your dessert vision to
                  life.
                </p>
                <p>
                  My goal is to make each order feel special, intentional, and
                  joyful: Inspired by your ideas, my creativity, and the little
                  moments worth celebrating. I’m also a woman of faith, and my
                  hope is that every part of this business reflects that purpose
                  and love.
                </p>
                <p>
                  Thank you for supporting my small business & I can’t wait to
                  bake something sweet for you!
                </p>
                <br></br>
                <p>With love, Ashley Owner & Baker | Canvas Bakery</p>
              </div>
            </div>
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
