import classes from './Button.module.scss';

export default function Button({ children, onClick, type = "button", ...props }) {
  return (
    <button className={classes.button} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}