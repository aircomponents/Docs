import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroFullScreen)}
      style={{
        backgroundImage: `url('/img/aircomponent-header-board-full.png')`, // 替换成你自己的背景图片
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // 视差效果
        height: '100vh', // 占据整个视口
        position: 'relative',
      }}
    >
      {/* 遮罩层 */}
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
          {siteConfig.title}
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
