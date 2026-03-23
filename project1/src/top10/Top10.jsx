import styles from './Top10.module.css'
import { Top10Item } from './Top10Item'

export function Top10(){
	let top10 = [
		{title: "The Final Empire", author: "Brandon Sanderson"},
		{title: "Game of Thrones", author: "George RR Martin"},
		{title: "Saga", author: "Brian K Vaughan"},
		{title: "The Girl Who Kicked the Hornet's Nest", author: "Stieg Larsson"},
		{title: "Harry Potter and the Prisoner of Azkaban", author: "JK Rowling"},
		{title: "Watchmen", author: "Alan Moore"}
	];

	return(
		<section className={styles.top10}>
			<h2>Top 10 Books "lijst is gemaakt met AI"</h2>
			<ol className={styles.list}>
				{top10.map((item, index) => {
					return <Top10Item title={item.title} author={item.author} number={index + 1} />
				})}
			</ol>
		</section>
	)
}
