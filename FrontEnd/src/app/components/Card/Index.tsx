import React from "react";
import styles from "./card.module.css";
import User from "@/app/interfaces/User";
interface CardComponentProps {
    user: User;
  }
export default function Card({user}:CardComponentProps) {
    
  return (
    <div className={styles.card} >
      <h2>
        {user.name}
      </h2>
      <p>🏴{user.country}</p>
      <p>🌆{user.city}</p>
      <p>🏀{user.favorite_sport}</p>
    </div>
  );
}
