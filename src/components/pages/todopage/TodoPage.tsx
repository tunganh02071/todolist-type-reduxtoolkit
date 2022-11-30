import bind from "classnames/bind";
import { memo, useState } from "react";
import { Button } from "react-bootstrap";
import TodoDialog from "../../elements/TodoDialog/TodoDialog";
import { DialogTodo } from "../../types";
import PageLayout from "../layout/PageLayout";

import styles from "./TodoPage.module.scss";

const cx = bind.bind(styles);

const TodoPage = memo(() => {
  const [dialogMode, setDialogMode] = useState<DialogTodo>(DialogTodo.None);
  return (
    <PageLayout
      headerElement={
        <h1 className={cx("header-element")}>This is list product</h1>
      }
      bodyElement={
        <>
          <Button
            className={cx("btn-primary")}
            variant="primary"
            onClick={() => {
              setDialogMode(DialogTodo.Create);
            }}
          >
            Add
          </Button>
          <TodoDialog dialogMode={dialogMode} setDialogMode={setDialogMode} />
        </>
      }
    />
  );
});

export default TodoPage;
