import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    token: null,
    userId: null,
    user: null,
    
    
  },
});