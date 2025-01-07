import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';
import airComponentsImage from '../../static/img/aircomponent-header-board.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}
    style={{
      backgroundImage: `url(${airComponentsImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <air-button size="medium" variant="solid" color="ghost" suffix-icon='🚀'>
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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
