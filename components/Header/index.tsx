import React from "react";
import styles from './styles.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Menu from "../Menu";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1>
                    <Logo />
                </h1>

                <Menu />
            </Container>
        </header>
    );
};

export default Header;
