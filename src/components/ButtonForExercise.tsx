import * as React from "react";
import { Component } from "react";
import styles from "./ButtonExer.module.css";
interface Props {
  children: string;
  onClick: () => void;
  color?: string;
}

const ButtonEx = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button
        type="button"
        className={styles.listGroup}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonEx;
