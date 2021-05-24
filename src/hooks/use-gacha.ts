import { useState, useCallback } from "react";

const useGacha = (): [
  number,
  () => void,
  number,
  () => void,
  (prop: number) => void,
  (onceStone: number) => void
] => {
  //probとonceStoneを使えれば・・・
  // 確率を受け取り、ガチャ回数を返す
  const [gachasNum, setGachas] = useState(0);
  const [totalStone, setTotalStone] = useState(0);
  const [prob, setProb] = useState(0);
  const [onceStone, setOnceStone] = useState(0);

  const SetProb = (prob: number) => setProb(() => prob);
  const SetOnceStone = (onceStone: number) => setOnceStone(() => onceStone);

  // 最新の値が取れていない
  const calc = () => {
    setGachas(() => {
      var num = 1;
      var rand = Math.random() * 100;
      if (prob <= 0) {
        return 0;
      }
      while (rand > prob) {
        num++;
        rand = Math.random() * 100;
      }

      return num;
    });
  };
  // 最新の値が取れていない

  const calcTotalStone = () => setTotalStone(() => gachasNum * onceStone);
  return [gachasNum, calc, totalStone, calcTotalStone, SetProb, SetOnceStone];
};

export default useGacha;
