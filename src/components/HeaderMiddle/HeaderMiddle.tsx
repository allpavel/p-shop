import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
export function HeaderMiddle() {
  return (
    <div className="mt-2 h-20">
      <Link href="/" className="inline-block h-16">
        <Image src={logo} alt="Сытая морда" className="inline-block" />
      </Link>
    </div>
  );
}
