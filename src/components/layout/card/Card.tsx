import { useState } from 'react';
import styles from './Card.module.css'

interface Props {
  subject: {
    id: number,
    title: string,
    description: string,
    url: string
  },
  screen: string,
  deleteCard: Function
}

export const Card: React.FC<Props> = (props) => {
  let {id, title, description, url} = props.subject;

  let [deleting, setDeleting] = useState(false);

  function handleClick() {
    setDeleting(true);
    props.deleteCard(id, props.screen);
  }

  return (
    <div className={styles.card + " " + (deleting ? styles.deletingCard : "")}>
      <div className={styles.cardImage}>
        <img src={url} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.cardDeleter} onClick={handleClick}>
          ❌
        </div>
      </div>
    </div>
  )
}