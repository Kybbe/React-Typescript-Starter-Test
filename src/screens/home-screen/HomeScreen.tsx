import styles from './HomeScreen.module.css'

export const HomeScreen= () => {  
  return (
    <div className={styles.greetingContainer}>
      <h2>Hello and Welcome to</h2>
      <h1>Pablos Sportsbar!!!</h1>
      <h3>Go to either linked page in the navbar and pick out your choices!</h3>
    </div>
  )
}