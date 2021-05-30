import { useState } from "react";

const useGacha = (
  prob: number,
  onceStone: number,
  onceMoney: number,
  spark: number,
  points: number
): [number, number, number, () => void] => {
  // 確率を受け取り、ガチャ回数を返す
  const [totalGachas, setTotalGachas] = useState(0);
  const [totalStone, setTotalStone] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  const calc = () => {
    var totalNum = 0;
    var getPoints = 0;
    setTotalGachas(() => {
      if (prob <= 0) {
        return 0;
      }
      while (getPoints < points) {
        var rand = Math.random() * 100;
        if (rand <= prob) {
          totalNum++;
        }
        var num = 0;
        while (rand > prob) {
          if (num >= spark && spark !== 0) {
            break;
          }
          num++;
          rand = Math.random() * 100;
        }
        totalNum += num;
        getPoints++;
      }
      return totalNum;
    });
    setTotalStone(() => totalNum * onceStone);
    setTotalMoney(() => totalNum * onceMoney);
  };
  // 最新の値が取れていない

  //const calcTotalStone = () => setTotalStone(() => totalGachas * onceStone);
  return [totalGachas, totalStone, totalMoney, calc];
};

export default useGacha;
