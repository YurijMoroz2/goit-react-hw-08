import clsx from 'clsx';
import css from './Navigation/Navigation.module.css';
import toast from 'react-hot-toast';

export const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const notify = () => toast.success('Ok');
export const notifyError = () => toast.error('Ups,error!!!!!');
export const notifyDelete = () => toast.success('Delete OK');
