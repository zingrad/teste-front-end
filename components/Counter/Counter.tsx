import React, { useState } from "react";
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
    <div className={styles.counter}>
      <button onClick={decrement}>−</button>
      <span>{count.toString().padStart(2, "0")}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}