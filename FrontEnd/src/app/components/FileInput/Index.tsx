import React, { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./fileInput.module.css";
import FilesService from "@/app/services/FilesService";
import User from "@/app/interfaces/User";
interface FileInputComponentProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}export default function FileInput({
    users,
    setUsers,
  }: FileInputComponentProps) {
    const handleFileChange = async (files: FileList | null) => {
      const data = await FilesService.sendFile(files);
      if(data){
        setUsers((prevUsers) => [...prevUsers, ...data]);
      }
    };
    return (
      <div>
        <input
          className={styles.fileInput}
          type="file"
          name="file"
          onChange={(e) => handleFileChange(e.target.files)}
        />
      </div>
    );
  }
  