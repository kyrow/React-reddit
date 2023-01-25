import React from 'react';
import styles from './dropdownmenu.css';
import {BlockIcon, WarningIcon} from "../../Icons";
import ReactDOM from "react-dom";

interface IDropdownMenuProps{
    postId: string;
}


export function DropdownMenu({postId }:IDropdownMenuProps) {

    const node = document.querySelector('#dropdown_root');
    if (!node) return null

  return ReactDOM.createPortal( (
      <ul className={styles.container}>
        <li className={styles.menuBtn} onClick={()=> console.log(postId)}>
           <span className={styles.icon} >  <BlockIcon />  </span>
            Скрыть
        </li>
          <div className={styles.divider}></div>
        <li className={styles.menuBtn}>
           <span className={styles.icon} > <WarningIcon />  </span>
            Пожаловаться
        </li>
        <li className={styles.menuBtnClose}>Закрыть</li>
      </ul>
  ),node);
}
