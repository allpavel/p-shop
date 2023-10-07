import { HeaderMiddle } from "../HeaderMiddle/HeaderMiddle";
import { HeaderTop } from "../HeaderTop/HeaderTop";

export function Header() {
  return (
    <header className="container m-auto">
      <HeaderTop />
      <HeaderMiddle />
    </header>
  );
}
