import styles from './styles.module.css';
import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mainStyles from '@site/src/pages/index.module.css';


export default function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={mainStyles.container}>
            <div className={styles.homeIntro}>
                <div className={styles.homeIntroWrapper}>
                    <div className={styles.content}>
                        <img src="/img/logos/logo-vanus.svg" alt="logo-vanus"></img>
                        <h2>{siteConfig.title}</h2>
                        <p>Vanus provides an innovative platform for collecting, storing, distributing, and processing events at scale.</p>
                    </div>
                    <div className={styles.image}>
                        <img src="/img/logos/vanus-static.png" alt="vanus-static"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}