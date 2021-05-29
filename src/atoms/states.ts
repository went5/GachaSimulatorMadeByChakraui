import { atomFamily } from "recoil";

export const inputState = atomFamily<number,string>({
  key: "probability",
  default: 0,
});

