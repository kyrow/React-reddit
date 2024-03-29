import React, {useState} from 'react';
import styles from './controls.css';

export function Controls() {
const [rateCount, rateCountCalc] = useState(0);
  return (
<div className={styles.controls}>
	<div className={styles.carmaCounter}>
		<button className={styles.carmaUp} onClick={()=>rateCountCalc(rateCount+1)}>
		<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/></svg>
		</button>
		<p className={styles.carmaNumber}>{rateCount}</p>
		<button className={styles.carmaDown} onClick={()=>rateCountCalc(rateCount-1)}>
		<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
		</svg>
		</button>
	</div>
	<div className={styles.comments}>
		<button className={styles.commentsLogo} >
			<svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.75 1H1.41667C0.6375 1 0 1.6375 0 2.41667V10.9167C0 11.6958 0.6375 12.3333 1.41667 12.3333H11.3333L14.1667 15.1667V2.41667C14.1667 1.6375 13.5292 1 12.75 1ZM11.3333 9.5H2.83333V8.08333H11.3333V9.5ZM11.3333 7.375H2.83333V5.95833H11.3333V7.375ZM11.3333 5.25H2.83333V3.83333H11.3333V5.25Z" fill="#C4C4C4"/>
			</svg>
			<div className={styles.commentNumber}>321</div>
		</button>
		
	</div>
	<div className={styles.controlButtons}>
		<button className={styles.share}>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
			<path d="M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z" fill="white"/>
			</svg>
		</button>
		<button className={styles.cancel}>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#C4C4C4"/>
			</svg>
		</button>
	</div>
</div>
  );
}
