import Link from "next/link";
import { MdLogin } from "react-icons/md";

export function CustomerLink() {
  return (
    <Link
      href="account"
      className="rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm h-14 flex items-center justify-center"
    >
      <MdLogin className="me-2" /> Войти
    </Link>
  );
}
