import { Card } from '@components';
import styles from '@styles/containers/Home.module.css';

export function Container_Home() {
  return (
    <main className={styles.Main}>
      <h1>Trending Movies Of The Week</h1>
      <section>
        <Card type='POSTER' />
        <Card type='POSTER'/>
      </section>
      <h2>Lastest Trailers</h2>
      <section>
        <Card type='TRAILER'/>
        <Card type='TRAILER'/>
      </section>
    </main>
  );
}