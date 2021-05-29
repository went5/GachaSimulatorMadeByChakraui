import { atom,atomFamily } from "recoil";

export const inputState = atomFamily<number,string>({
  key: "probability",
  default: 0,
});

export const pointState = atom<number>({
  key: "points",
  default: 1,
});