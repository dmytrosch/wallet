import React, {useEffect} from 'react';
import style from './Modal.module.css';
import iconClose from '../../../assets/icons/close.svg';

export default function Modal({ children, onClose }) {
  const handleKeyboardCloseWindow = e => {
    if(e.code !== 'Escape'){
      return
    }
    onClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardCloseWindow);

    return () => document.removeEventListener('keydown', handleKeyboardCloseWindow);
  });

  return (
    <div className={style.modalBackdrop} >
      <div className={style.modalWindow}>
        <div className={style.iconContainer}>
          <button type="button" onClick={onClose} className={style.iconButton} >
            <img src={iconClose} alt="" className={style.icon}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
