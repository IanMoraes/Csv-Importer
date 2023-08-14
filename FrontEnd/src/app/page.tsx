"use client";
import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import Card from "./components/Card/Index";
import UserSevice from "./services/UserSevice";
import User from "./interfaces/User";
import SearchBar from "./components/SearchBar/Index";
import FileInput from "./components/FileInput/Index";
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const populateUsers = async() =>{
    const initialValues = await UserSevice.getUsers(searchInput);
    setUsers(initialValues);
  }
  useEffect(() => {
    populateUsers()
  }, [searchInput]);

  return (
    <main className={styles.main}>
      <div className={styles.interactiveBox}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <FileInput users={users} setUsers={setUsers}/>

      </div>

      <div className={styles.grid}>
        {users.length >0 &&users.map((user) => {
          return <Card user={user} key={user.id}/>;
        })}
      </div>
    </main>
  );
}
