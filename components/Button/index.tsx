import React, {ButtonHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: 'outline' | undefined;
};

const Button: React.FC<IProps> = ({ variants, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.outline]: variants === 'outline',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
