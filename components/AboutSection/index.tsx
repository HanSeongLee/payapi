import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import TitledScheduleDemoForm from "../TitledScheduleDemoForm";
import DescriptionCard from "../DescriptionCard";
import CompanySummary from "../CompanySummary";

const AboutSection: React.FC = () => {
    return (
        <section className={styles.pricingSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    We empower innovators<br/>
                    by delivering access to the financial system
                </h2>

                <DescriptionCard title={'Our Vision'}
                                description={'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.'}
                />
                <DescriptionCard title={'Our Business'}
                                description={'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.'}
                />

                <img className={styles.thumbnail}
                     src={'/img/about/mobile/image-team-members.jpg'}
                     alt={'Team members'}
                />

                <CompanySummary />

                <DescriptionCard title={'The Culture'}
                                description={'We strongly believe there\'s always an opportunity to learn from each other outside of day-to-day work, whether it\'s company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.'}
                />
                <DescriptionCard title={'The People'}
                                description={' We\'re all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.'}
                />

                <TitledScheduleDemoForm/>
            </Container>
        </section>
    );
};

export default AboutSection;
