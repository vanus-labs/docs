import mainStyles from '@site/src/pages/index.module.css';

import iconsBlock from '../../css/partials/iconsBlock.module.scss';
import ft from '../../css/partials/featuredTitle.module.scss';

import clsx from 'clsx';
import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Title = "Meet the Future of Cloud Computing with Vanus";
const SubTitle = "The future of Cloud Computing is Serverless. Vanus is the leading message queue for the serverless era.";

export default function HomepageIconsBlock() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={iconsBlock.iconsBlock}>
            <div className={mainStyles.container}>
                <div className={iconsBlock.iconBlockHeader}>
                    <div className={ft.featuredTitle}>
                        <div className={ft.title}>
                            <h2>{Title}</h2>
                        </div>
                        <div className={ft.subtitle}>
                            <p>{SubTitle}</p>
                        </div>
                    </div>
                </div>
                <div className={iconsBlock.iconsBlockWrapper}>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-standard.svg" alt="icon-standard"/>
                        </div>
                        <h3>Standards-Based</h3>
                        <p>We embrace an open-source ecosystem with CloudEvents compliant events.</p>
                    </div>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-global.svg" alt="icon-global"/>
                        </div>
                        <h3>Global Routing</h3>
                        <p>Platforms are built globally for hybrid and multi-cloud.</p>
                    </div>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-elasticity.svg" alt="icon-global"/>
                        </div>
                        <h3>Elasticity</h3>
                        <p>Automatic elastic scaling of the entire link.</p>
                    </div>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-plentiful.svg" alt="icon-plentiful"/>
                        </div>
                        <h3>Plentiful Event Sources</h3>
                        <p>Easily integrate various databases, cloud services, and user workloads.</p>
                    </div>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-workflow.svg" alt="icon-workflow"/>
                        </div>
                        <h3>Workflow</h3>
                        <p>With built-in Serverless workflow, users can easily build EDA applications.</p>
                    </div>
                    <div className={iconsBlock.iconBlock}>
                        <div className={iconsBlock.image}>
                            <img src="/img/icons/icon-observasity.svg" alt="icon-observasity"/>
                        </div>
                        <h3>Observasity</h3>
                        <p>The entire link is observable and traceable. We support event searching, replaying, and
                            retrying configurations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}