
import styles from './styles.module.scss';
import bigCard from '../../css/partials/bigCard.module.scss'
import React from "react";
import clsx from "clsx";

const Title = "Enterprise-level support";
const Desc = "Our experienced team is ready to support your EDA journey with an average response rate of 5 minutes or less. " +
    "Feel free to ask for help by opening an issue on GitHub or asking in our Slack channel.";

export default function HomepageBigCard() {
    return (
        <div className={styles.backCardBlock}>
            <div className={bigCard.bigCard}>
                <div className={bigCard.bigCardWrapper}>
                    <div className={bigCard.image}>
                        <div className={clsx(bigCard.imageWrapper,bigCard.imageBack) }></div>
                    </div>
                    <div className={bigCard.content}>
                        <div className={bigCard.title}>
                            <h4>{Title}</h4>
                            <p>{Desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}