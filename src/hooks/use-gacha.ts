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
  const probability = prob * 0.01;
  const calc = () => {
    var totalNum = 0;
    var getPoints = 0;
    setTotalGachas(() => {
      if (probability <= 0) {
        return 0;
      }
      while (getPoints < points) {
        var rand = Math.random();
        if (rand <= probability) {
          totalNum++;
        }
        var num = 0;
        while (rand > probability) {
          if (num >= spark && spark !== 0) {
            break;
          }
          rand = Math.random();
          num++;
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
