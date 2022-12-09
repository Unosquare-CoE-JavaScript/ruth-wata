import React from "react";
import Card from '../Card/Card';
import Button from "../Button/Button";
import classes from './ErrorModal.module.css';

export default function ErrorModal({ title, message, onConfirm }){
    return (
        <div>
          <div className={classes.backdrop} onClick={onConfirm} /> 
            <Card className={classes.modal}>
            <header className={classes.header}>
              <h2>{title}</h2>
            </header>
            <div className={classes.content}>
              <p>{message}</p>
            </div>
            <footer className={classes.actions}>
              <Button onClick={onConfirm}>Okay</Button>
              
             </footer>
          </Card> 
        </div>
      );
    };
