"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Limelight } from "next/font/google";
import { useState } from "react";
const lime = Limelight({ subsets: ["latin"], weight: ["400"] });
const faq = [
  {
    question: "Where are you located? Can I visit your bakery?",
    answer:
      "I run a licensed cottage bakery from my home in Dallas TX, 75228. While I don't have a storefront, you can place orders online and schedule pickups or deliveries as available",
  },
  {
    question: "Do you offer same-day or last-minute orders?",
    answer:
      "All items are made to order, and I typically require at least a week’snotice. Rush orders may be available for an additional fee, but aren'tguaranteed.",
  },
  {
    question: " Can I get a refund or cancel my order?",
    answer:
      "Due to the custom nature of my products, all sales are final. Cancellations must be made within 24 hours of placing your order to qualify for a partial refund.",
  },
  {
    question: "Is it safe to push someone into their cakes?",
    answer:
      " No it is not safe to push someone into their own cake. This is because I use boba straws as supports for the cake, and this could potentially cause injury. Also someone paid a pretty penny for their cake, why destroy it?",
  },
  {
    question: "Do you offer allergy-friendly or gluten-free options?",
    answer:
      "While I do my best to accommodate requests, my kitchen is not allergen-free. I use common allergens like wheat, dairy, eggs, and nuts, and cross-contamination may occur.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes! Custom orders require a 50% non-refundable deposit to secure your date. The remaining balance is due morning of pickup.",
  },
  {
    question: "What happens if I miss my pickup time?",
    answer:
      " Please arrive on time for your pickup. I allow a 30-minute grace period. After that, I may not be available, and a late fee may be applied on the method of payment..",
  },
  {
    question: "Can I use a design I found online or on Pinterest?",
    answer:
      " I use inspiration photos as references, but I will not copy another baker’s work exactly. Each cake is made with my own artistic touch!",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      " I accept payments through Zelle, Venmo, Apple pay or cash. Payment must be made in full before pickup unless we’ve arranged a deposit plan.",
  },
  {
    question: "Do you provide cake tastings or sample boxes?",
    answer:
      " I do offer sample boxes by request for weddings and larger events or sometimes when you want a variety of sweet treats.",
  },
];
export default function Questions() {
  const [openindex, setOpenindex] = useState(null);

  const toggle = (index) => {
    setOpenindex(openindex === index ? null : index);
  };
  return (
    <div className="w-5/6 ml-40">
      <h1 className={`${lime.className} text-3xl my-10`}>
        Frequently Asked Questions
      </h1>
      <div>
        {faq.map((faq, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggle(index)}
              className={`${lime.className} text-2xl my-10 cursor-pointer`}
            >
              {faq.question}
              {openindex === index ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
            {openindex === index && <p className="text-xl ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
