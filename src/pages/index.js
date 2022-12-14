import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageKeypoints from '@site/src/components/HomepageKeypoints';
import HomepageIconsBlock from '@site/src/components/HomepageIconsBlock';
import HomepageBigCard from "../components/HomepageBigCard";

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Vanus | ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <HomepageKeypoints/>
            <HomepageIconsBlock/>
            <HomepageBigCard/>
        </Layout>
    );
}
