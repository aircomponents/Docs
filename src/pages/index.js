import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Showcase from '../components/ShowCase/UserProfile.tsx'
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import headerBoard from '../../static/img/aircomponent-header-board-full.png'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroFullScreen)}
      style={{
        backgroundImage: `url(${headerBoard})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // 视差效果
        height: '100vh', // 占据整个视口
        position: 'relative',
      }}
    >
      {/* 内容 */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', // 垂直居中
        }}
      >
        <Heading
          as="h1"
          className="hero__title"
          style={{
            color: 'white',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
            fontSize: '3rem',
            textAlign: 'center',
          }}
        >
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
            fontSize: '1.25rem',
          }}
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <air-button
            size="medium"
            state="ghost"
            style={{ border: '2px solid white', borderRadius: '8px' }}
            suffix-icon="🚀">
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
              Start Now
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
        <Showcase />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
