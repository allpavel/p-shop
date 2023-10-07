import { useId } from "react";

export function SearchBar() {
  const searchBar = useId();
  return (
    <form>
      <label htmlFor={searchBar}>
        <input id={searchBar} type="search" />
      </label>
    </form>
  );
}
