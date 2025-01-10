import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, { translate } from '@docusaurus/Translate';
import airComponentsImage from '../../static/img/aircomponent-header-board.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `url(${airComponentsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // 为添加遮罩层准备
      }}
    >

      {/* 添加遮罩层 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // 半透明黑色遮罩
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Heading as="h1" className="hero__title" style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ color: 'white', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <air-button size="medium" variant="solid" color="ghost" suffix-icon="🚀">
            <Link
              to="/docs/intro"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Microsoft YaHei, sans-serif',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              <Translate>Star Now</Translate>
            </Link>
          </air-button>
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
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}