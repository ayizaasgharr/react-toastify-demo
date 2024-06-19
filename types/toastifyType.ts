import { Key } from "react";

export type toastify = {
    position: string;
    duration: number;
    animationStyle: string;
    closeOnClick: boolean;
  }
  
  export type checkbox ={
    hasBackDrop:boolean,
    disableAutoClose:boolean

  }

  export type checkboxContent ={
    key:string;
    description:string;
  }