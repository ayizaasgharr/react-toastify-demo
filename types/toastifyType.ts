export type ToastType = "info" | "success" | "warning";

export type toastify = {
  position: string;
  duration: number;
  animationStyle: string;
  closeOnClick: boolean;
  toastType: ToastType;
  backgroundColor: string;
};

export type checkbox = {
  hasBackDrop: boolean;
  disableAutoClose: boolean;
};

export type checkboxContent = {
  key: string;
  description: string;
};

export type ToastProperty = {
  name: string;
  type: string;
  default: any;
  description: string;
};

export type ToastColumn = {
  key: string;
  label: string;
};
