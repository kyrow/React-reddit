import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {DropdownMenu} from "../../../Dropdown/DropdownMenu";
import {MenuIcon} from "../../../Icons";


export function Menu() {
  return (
		<div className={styles.menu}>
			<Dropdown
				button={<button className={styles.menuButton}>
				<MenuIcon/>
				</button>}>
				<DropdownMenu postId={'123'} />
			</Dropdown>
		</div>
  );
}
