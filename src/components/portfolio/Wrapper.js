import React, { useState } from 'react';
import styles from './Wrapper.css';
import Hp from './HP';
import Bot from './Bot';
import Moddo from './Moddo';
import decrease from '../../assets/decrease.png';
import disabledDecrease from '../../assets/disableDecrease.png';
import increase from '../../assets/increase.png';
import disabledIncrease from '../../assets/disabledIncrease.png';

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
          <p>{countObj.count + 1} of {portfolio.length}</p>
        </div>
        <div className={styles.wrapper}>
          <button
            disabled={countObj.previous}
            onClick={() => updateState(decrementNewCount)}><img className={styles.buttonImg} src={countObj.previous ? disabledDecrease : decrease}/></button>
          <Bot />
          <button
            disabled={countObj.next}
            onClick={() => updateState(incrementNewCount)}><img className={styles.buttonImg} src={countObj.next ? disabledIncrease : increase}/></button>
        </div>
      </div>
    );
  } else if(countObj.count === 2) {
    return (
      <div className={styles.top}>
        <div className={styles.center}>
          <h2 className={styles.title}>PORTFOLIO</h2>
          <p>{countObj.count + 1} of {portfolio.length}</p>
        </div>
        <div className={styles.wrapper}>
          <button
            disabled={countObj.previous}
            onClick={() => updateState(decrementNewCount)}><img className={styles.buttonImg} src={countObj.previous ? disabledDecrease : decrease}/></button>
          <Moddo />
          <button
            disabled={countObj.next}
            onClick={() => updateState(incrementNewCount)}><img className={styles.buttonImg} src={countObj.next ? disabledIncrease : increase}/></button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.top}>
      <div className={styles.center}>
        <h2 className={styles.title}>PORTFOLIO</h2>
        <p>{countObj.count + 1} of {portfolio.length}</p>
      </div>
      <div className={styles.wrapper}>
        <button
          disabled={countObj.previous}
          onClick={() => updateState(decrementNewCount)}><img className={styles.buttonImg} src={countObj.previous ? disabledDecrease : decrease}/></button>
        <Hp />
        <button
          disabled={countObj.next}
          onClick={() => updateState(incrementNewCount)}><img className={styles.buttonImg} src={countObj.next ? disabledIncrease : increase}/></button>
      </div>
    </div>
  );
}
