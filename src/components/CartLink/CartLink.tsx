import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

export function CartLink() {
  return (
    <Link
      href="account"
      className="rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm h-14 flex items-center justify-center"
    >
      <MdOutlineShoppingCart className="me-2" /> 12 345 &#8381;
    </Link>
  );
}
