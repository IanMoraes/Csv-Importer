import React, { Dispatch, SetStateAction } from "react";
import styles from "./searchBar.module.css";
interface SearchBarComponentProps {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}
export default function SearchBar({
  searchInput,
  setSearchInput,
}: SearchBarComponentProps) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchInput}
        placeholder="Search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
