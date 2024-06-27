import { toastify } from "@/types/toastifyType";

export const defaultToastify: toastify = {
  position: "center",
  duration: 3000,
  animationStyle: "upInUpOut",
  closeOnClick: true,
  toastType: "info",
  backgroundColor: "white",
};

export const position = ['top', 'bottom', 'center'];

export const type = ['info', 'success', 'warning', 'default'];

export const theme = ['black', 'white'];
