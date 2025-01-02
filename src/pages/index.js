import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import NoSSR from '../../docs/basic-components/NoSSR.jsx';

if (typeof window !== 'undefined') {
  // 这里的代码仅在客户端运行
  const { AirButton } = require('air-components/dist/aircomponents/aircomponents.esm.js');
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <NoSSR>
        <air-button size="medium" variant="solid" color="ghost" icon="📥 ">
            <Link
              to="/docs/intro"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Microsoft YaHei, sans-serif', 
                fontSize: '16px',                 // 设置字体大小
                fontWeight: 'bold',               // 设置字体粗细
              }}
            >
              现在开始
            </Link>
            </air-button>
          </NoSSR>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
