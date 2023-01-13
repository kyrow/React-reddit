import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

export function Title() {
  const [isModalOpened,setIsModalOpened] = useState(false)

  return (
<h2>
  <button
     className={styles.cardTitle}
     onClick={()=>{setIsModalOpened(true)}}>
    Реплицированные с зарубежных источников возможности </button>

  {isModalOpened && (
      <Post
      onClose={()=>{setIsModalOpened(false)}}
      />
  )}
</h2>
  );
}
