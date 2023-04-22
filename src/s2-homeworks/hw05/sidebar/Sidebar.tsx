import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';
import { PATH } from '../Pages';
import closeIcon from './closeOutline.svg';

type PropsType = {
  open: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {

  const classSidebar: string = open ? `${s.sidebar} ${s.open}` : s.sidebar;
  const classNavBox: string = open ? `${s.nav} ${s.nav_active}` : s.nav;

  const setActiveLink = ({ isActive }: { isActive: boolean }): string | undefined => {
    return isActive ? s.active : '';
  };

  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={classSidebar}>
        <button className={s.close} onClick={handleClose}>
          <img src={closeIcon} alt='close sidebar' id={'hw5-menu-close'} />
        </button>

        <nav id={'hw5-menu'} className={classNavBox}>
          <NavLink
            id={'hw5-pre-junior-link'}
            to={PATH.PRE_JUNIOR}
            onClick={handleClose}
						className={setActiveLink}
						end
          >
            Pre-junior
          </NavLink>
          <NavLink
            id={'hw5-junior-link'}
            to={PATH.JUNIOR}
            onClick={handleClose}
						className={setActiveLink}
						end
          >
            Junior
          </NavLink>
          <NavLink
            id={'hw5-junior-plus-link'}
            to={PATH.JUNIOR_PLUS}
            onClick={handleClose}
						className={setActiveLink}
						end
          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
