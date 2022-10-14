import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styles from './ErrorModal.module.css'

const Backdrop = ({onClick}) => {
  return (<div className={styles.backdrop} onClick={onClick} />)
}

const ModalOverlay = ({title,msg, onClick}) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{msg}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClick}>OK</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = ({ title, msg, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onConfirm} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay title={title} msg={msg} onClick={onConfirm}/>, document.getElementById("overlay-root"))}   
    </>
  );
};

export default ErrorModal;
