/* eslint-disable no-empty-pattern */
import { memo } from "react";
import bind from "classnames/bind";
import { DialogTodo, TodoDialogProp } from "../../types";

import styles from "./TodoDialog.module.scss";
import { Button, Form, Modal } from "react-bootstrap";

const cx = bind.bind(styles);

const TodoDialog = memo(({ dialogMode, setDialogMode }: TodoDialogProp) => {
  const handleClose = () => setDialogMode(DialogTodo.None);
  const show = dialogMode !== DialogTodo.None;
  return (
    <div className={cx("dialog-product")}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="productForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
});

export default TodoDialog;
