import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
<div className={styles.textContent}>
	<div className={styles.userInfo}>
		<div className={styles.userLink}>
			<img className={styles.userAvatar} src="https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg" alt="avatar" />
			<a href='#' className={styles.userName}>Хан Александр</a>
		</div>
		<div className={styles.published}>
		<span className={styles.publishedWord}>Опубликовано</span> 
		<span className={styles.publishedTime}>8 часов назад</span>
		</div>
	</div>
	<a href='#' className={styles.cardTitle}>Реплицированные с зарубежных источников возможности </a>
</div>
  );
}
