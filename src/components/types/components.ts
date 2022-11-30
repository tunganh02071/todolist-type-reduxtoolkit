import { ReactNode } from "react";
import { DialogTodo } from "./enum";

export interface TodoDialogProp {
  dialogMode: DialogTodo;
  setDialogMode: (newDialogMode: DialogTodo) => void;
}
export interface LayoutProps {
  headerElement: ReactNode;
  bodyElement: ReactNode;
}
