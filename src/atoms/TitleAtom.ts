import { atom } from "recoil";

export const titleState = atom<string>({
  key:"title",
  default:"defaultTitle"
})