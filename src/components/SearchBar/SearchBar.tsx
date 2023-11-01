import { DesktopSearchBar } from "../DesktopSearchBar/DesktopSearchBar";
import { MobileSearchBar } from "../MobileSearchBar/MobileSearchBar";

export function SearchBar() {
  return (
    <>
      <DesktopSearchBar />
      <MobileSearchBar />
    </>
  );
}
