import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import s from '../../../s1-main/App.module.css';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
		if (!open)
			setOpen(true);
		else
			setOpen(false);
  };

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = 'unset');
  }, [open]);
  // отключает прокрутку при открытом меню

  const toggleClass = open ? `${s.layout_wrapper} ${s.sidebar_open}` : s.layout_wrapper;

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <div className={toggleClass}>
        <Header handleOpen={handleOpen} />
        <main className={s.pages_box}>{children}</main>
      </div>
    </>
  );
};

