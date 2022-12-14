import styles from '../../css/partials/iconback.module.scss';
import mainStyles from '@site/src/pages/index.module.css';

import scss from '../../css/partials/orb.module.scss';
import clsx from 'clsx';

import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function HomepageKeypoints() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={clsx(styles.iconsBackground, scss.orb)}>
            <div className={clsx(scss.container,mainStyles.container)}>
                <div className={styles.iconsBackgroundWrapper}>
                    <div className={styles.icon}>
                        <img src="/img/icons/icon-serverless.svg" alt="icon-serverless"/>
                            <p>Serverless</p>
                    </div>
                    <div className={styles.icon}>
                        <img src="/img/icons/icon-open-source.svg" alt="icon-open-source"/>
                            <p>Open Source</p>
                    </div>
                    <div className={styles.icon}>
                        <img src="/img/icons/icon-event-platform.svg" alt="icon-event-platform"/>
                            <p>Event Platform</p>
                    </div>
                </div>
            </div>
            <canvas className={scss.orbCanvas}></canvas>
            <div className={scss.area}>
                <ul className={scss.circles}>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                    <li><img src="/img/hex.svg" alt="hex-image"/></li>
                </ul>
            </div>
        </div>
    );
}