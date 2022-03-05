import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import PartnerContainer from "../../containers/PartnerContainer";
import Button from "../Button";

const PartnersSection: React.FC = () => {
    return (
        <section className={styles.partnersSection}>
            <Container className={styles.container}>
                <PartnerContainer className={styles.partnerContainer}/>

                <div>
                    <h2 className={styles.title}>
                        Who we work with
                    </h2>
                    <p className={styles.description}>
                        Today, millions of people around the world have successfully connected their accounts to apps
                        they love using our API. We provide developers with the tools they need to create easy and
                        accessible experiences for their users.
                    </p>

                    <Button variants={'secondary'}>
                        About Us
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default PartnersSection;
