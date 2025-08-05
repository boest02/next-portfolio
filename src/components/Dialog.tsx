import React from "react";
import styles from "./styles/dialog.module.css";

type DialogProps = {
  children: React.ReactNode;
};

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ children }, ref) => {
    return (
      <dialog ref={ref} className={styles.dialog}>
        <div className={styles.inner}>{children}</div>
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;
