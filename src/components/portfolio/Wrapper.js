import React, { useState } from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';
import Moddo from './Moddo';

const portfolio = [Hp, Bot, Moddo];

export default function Wrapper() {
  const [countObj, setCount] = useState({
    count: 0,
    next: portfolio.length <= 1,
    previous: true
  });

  const incrementNewCount = countObj.count + 1;
  const decrementNewCount = countObj.count - 1;

  const updateState = updatedCount => {
    setCount({
      count: updatedCount,
      next: updatedCount >= portfolio.length - 1,
      previous: updatedCount === 0
    });
  };

  if(countObj.count === 1) {
    return (
      <div className={styles.top}>
        <div className={styles.center}>
          <h2 className={styles.title}>PORTFOLIO</h2>
        </div>
        <button
          disabled={countObj.previous}
          onClick={() => updateState(decrementNewCount)}
        >
          decrease
        </button>
        <div className={styles.wrapper}>
          <Bot />
        </div>
        <button
          disabled={countObj.next}
          onClick={() => updateState(incrementNewCount)}
        >
          increase
        </button>
      </div>
    );
  } else if(countObj.count === 2) {
    return (
      <div className={styles.top}>
        <div className={styles.center}>
          <h2 className={styles.title}>PORTFOLIO</h2>
        </div>
        <button
          disabled={countObj.previous}
          onClick={() => updateState(decrementNewCount)}
        >
          decrease
        </button>
        <div className={styles.wrapper}>
          <Moddo />
        </div>
        <button
          disabled={countObj.next}
          onClick={() => updateState(incrementNewCount)}
        >
          increase
        </button>
      </div>
    );
  }

  return (
    <div className={styles.top}>
      <div className={styles.center}>
        <h2 className={styles.title}>PORTFOLIO</h2>
      </div>
      <button
        disabled={countObj.previous}
        onClick={() => updateState(decrementNewCount)}
      >
        decrease
      </button>
      <div className={styles.wrapper}>
        <Hp />
      </div>
      <button
        disabled={countObj.next}
        onClick={() => updateState(incrementNewCount)}
      >
        increase
      </button>
    </div>
  );
}
