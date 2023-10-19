import { DesktopNavigationMenu } from "../DesktopNavigationMenu/DesktopNavigationMenu";
import { MobileNavigationBar } from "../MobileNavigationMenu/MobileNavigationMenu";

export function HeaderTop() {
  return (
    <>
      <DesktopNavigationMenu />
      <MobileNavigationBar />
    </>
  );
}
