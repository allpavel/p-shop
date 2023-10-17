import { TempMenu } from "../TempMenu/TempMenu";
import { Container } from "../ui/Container/Container";
// import { Temp2 } from "../temp2/Temp2";

export function Header() {
  return (
    <Container>
      <header className="relative m-auto">
        {/* <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom /> */}
        {/* <Temp2 /> */}
        <TempMenu />
      </header>
    </Container>
  );
}
