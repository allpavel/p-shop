import { HeaderBottom } from "../HeaderBottom/HeaderBottom";
import { HeaderMiddle } from "../HeaderMiddle/HeaderMiddle";
import { HeaderTop } from "../HeaderTop/HeaderTop";
import { Container } from "../ui/Container/Container";

export function Header() {
  return (
    <Container>
      <header className="relative m-auto">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </header>
    </Container>
  );
}
