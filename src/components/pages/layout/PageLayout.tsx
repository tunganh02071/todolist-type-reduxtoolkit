/* eslint-disable no-empty-pattern */
import bind from "classnames/bind";
import { memo } from "react";
import { LayoutProps } from "../../types";

import styles from "./PageLayout.module.scss";

const cx = bind.bind(styles);

const Layout = memo(({ headerElement, bodyElement }: LayoutProps) => {
  return (
    <div className="container">
      <div className={cx("page-layout")}>
        <div className={cx("page-layout__header")}>{headerElement}</div>
        <div className={cx("page-layout__body")}>{bodyElement}</div>
      </div>
    </div>
  );
});

export default Layout;
