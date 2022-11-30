/* eslint-disable no-empty-pattern */
import bind from "classnames/bind";
import { memo } from "react";
import { TodoDialogProp } from "../../types";

import styles from "./TodoDialog.module.scss";

const cx = bind.bind(styles);

const TodoDialog = memo(({}: TodoDialogProp) => {
  return <div className={cx("dialog-product")}></div>;
});

export default TodoDialog;
