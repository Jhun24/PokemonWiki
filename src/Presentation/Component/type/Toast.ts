import { Dispatch, SetStateAction } from "react";

type ToastProps = {
  type: "error" | "info";
  title: string;
  content: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export type {
  ToastProps,
}