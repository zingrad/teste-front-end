import { useState } from "react";
import styles from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(0, prev)); 

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>−</button>
      <span>{count.toString().padStart(2, "0")}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
