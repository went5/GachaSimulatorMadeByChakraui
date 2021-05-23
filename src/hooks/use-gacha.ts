import { useState, useCallback } from "react";

const useGacha = (): [number, (probability: number) => void] => {
  // 確率を受け取り、ガチャ回数を返す
  const [gachasNum, setGachas] = useState(0);
  const calc = (probability: number) =>
    setGachas(() => {
      var num = 1;
      var rand = Math.random()*100;
      if(probability<=0){
        return 0;
      }
      while (rand>probability) {
        num++;
        rand = Math.random()*100;
      }
      return num;
    });
  return [gachasNum, calc];
};

export default useGacha;
