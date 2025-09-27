import Image from "next/image";
import AddToCart from "./components/AddToCart";
import BuyNow from "./components/BuyNow";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home Page</p>
      <br></br>
      {/* <a href="/about">About</a> */}
      <Link href="/about">About</Link>
      <br></br>
      <AddToCart />
      <br></br>
      <BuyNow />
    </div>
  );
}
