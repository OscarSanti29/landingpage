import Link from "next/link";

export default function Navigations() {
  return (
    <div>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>BakedGoods</Link>
        <Link href={"/ordering"}>Order</Link>
      </div>
    </div>
  );
}
