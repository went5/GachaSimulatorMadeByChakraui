import { useState } from "react";

const useGacha = (
  prob: number,
  onceStone: number,
  onceMoney: number
): [number, number, number, () => void] => {
  // 確率を受け取り、ガチャ回数を返す
  const [totalGachas, setTotalGachas] = useState(0);
  const [totalStone, setTotalStone] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  // 最新の値が取れていない
  const calc = () => {
    var num = 1;
    setTotalGachas(() => {
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
    setTotalStone(() => num * onceStone);
    setTotalMoney(() => num * onceMoney);
  };
  // 最新の値が取れていない

  //const calcTotalStone = () => setTotalStone(() => totalGachas * onceStone);
  return [totalGachas, totalStone, totalMoney, calc];
};

export default useGacha;
