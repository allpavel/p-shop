import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { SearchBar } from "../SearchBar/SearchBar";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { CartLink } from "../CartLink/CartLink";

export function HeaderMiddle() {
  return (
    <div className="mt-2 ps-4 h-20 flex">
      <Link href="/" className="inline-block h-16 me-16">
        <Image src={logo} alt="Сытая морда" className="inline-block" />
      </Link>
      <div className="flex items-center grow gap-3.5 ps-2 pe-4">
        <SearchBar />
        <CustomerLink />
        <CartLink />
      </div>
    </div>
  );
}
