import { useState } from "react";
import styles from "./Counter.module.scss";

interface CounterProps {
  onChange?: (value: number) => void;
}

export default function Counter({ onChange }: CounterProps) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev => {
      const newCount = prev + 1;
      onChange?.(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newCount = Math.max(0, prev - 1);
      onChange?.(newCount);
      return newCount;
    });
  };

  return (
    <div className={styles.counter} role="group" aria-label="Seletor de quantidade">
      <button onClick={decrement} aria-label="Diminuir quantidade" type="button">−</button>
      <span aria-live="polite" aria-atomic="true">{count.toString().padStart(2, "0")}</span>
      <button onClick={increment} aria-label="Aumentar quantidade" type="button">+</button>
    </div>
  );
}