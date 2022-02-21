import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button className={styles.button}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
