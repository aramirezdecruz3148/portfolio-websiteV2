import React, { useState } from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';
import Moddo from './Moddo';
import Newzie from './Newzie';

const portfolio = [Newzie, Hp, Bot, Moddo];

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
          <p className={styles.caption}>{countObj.count + 1} of {portfolio.length}</p>
        </div>
        <div className={styles.wrapper}>
          <button
            className={styles.buttonArrow}
            disabled={countObj.previous}
            onClick={() => updateState(decrementNewCount)}>←</button>
          <Hp />
          <button
            className={styles.buttonArrow}
            disabled={countObj.next}
            onClick={() => updateState(incrementNewCount)}>→</button>
        </div>
      </div>
    );
  } else if(countObj.count === 2) {
    return (
      <div className={styles.top}>
        <div className={styles.center}>
          <h2 className={styles.title}>PORTFOLIO</h2>
          <p className={styles.caption}>{countObj.count + 1} of {portfolio.length}</p>
        </div>
        <div className={styles.wrapper}>
          <button
            className={styles.buttonArrow}
            disabled={countObj.previous}
            onClick={() => updateState(decrementNewCount)}>←</button>
          <Bot />
          <button
            className={styles.buttonArrow}
            disabled={countObj.next}
            onClick={() => updateState(incrementNewCount)}>→</button>
        </div>
      </div>
    );
  } else if(countObj.count === 3) {
    return (
      <div className={styles.top}>
        <div className={styles.center}>
          <h2 className={styles.title}>PORTFOLIO</h2>
          <p className={styles.caption}>{countObj.count + 1} of {portfolio.length}</p>
        </div>
        <div className={styles.wrapper}>
          <button
            className={styles.buttonArrow}
            disabled={countObj.previous}
            onClick={() => updateState(decrementNewCount)}>←</button>
          <Moddo />
          <button
            className={styles.buttonArrow}
            disabled={countObj.next}
            onClick={() => updateState(incrementNewCount)}>→</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.top}>
      <div className={styles.center}>
        <h2 className={styles.title}>PORTFOLIO</h2>
        <p className={styles.caption}>{countObj.count + 1} of {portfolio.length}</p>
      </div>
      <div className={styles.wrapper}>
        <button
          className={styles.buttonArrow}
          disabled={countObj.previous}
          onClick={() => updateState(decrementNewCount)}>←</button>
        <Newzie />
        <button
          className={styles.buttonArrow}
          disabled={countObj.next}
          onClick={() => updateState(incrementNewCount)}>→</button>
      </div>
    </div>
  );
}
