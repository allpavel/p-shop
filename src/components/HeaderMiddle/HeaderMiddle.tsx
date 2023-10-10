import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { SearchBar } from "../SearchBar/SearchBar";

export function HeaderMiddle() {
  return (
    <div className="mt-2 ps-4 h-20 flex">
      <Link href="/" className="inline-block h-16 me-8">
        <Image src={logo} alt="Сытая морда" className="inline-block" />
      </Link>
      <SearchBar />
    </div>
  );
}
