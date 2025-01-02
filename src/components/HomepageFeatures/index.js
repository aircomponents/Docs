import clsx from 'clsx';
import styles from './styles.module.css';
import airComponentsBoard from '@site/static/img/air-components-board.png';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 'AirComponents 旨在从零开始为开发者提供高效、直观的组件库。',
  },
  {
    title: '专注于核心',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: '通过精简的设计和现代化的工具链，AirComponents 让你可以专注于开发的关键部分。',
  },
  {
    title: '支持原生 Web 技术',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: '利用 Web Components 技术，AirComponents 提供强大的扩展能力和无框架依赖的生态。',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <card className="feature-card">
      <div slot="header">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div slot="content">
        <div className="text--center">
          <header level="3">{title}</header>
          <p>{description}</p>
        </div>
      </div>
    </card>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* 图片部分 */}
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <img
              src={airComponentsBoard}
              alt="Air Components Board"
              className={clsx(styles.featureImage, 'center-block')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

{/* 特性部分 */}
{/* 
<div className="container">
  <div className="row">
    {FeatureList.map((props, idx) => (
      <div className="col col--4" key={idx}>
        <Feature {...props} />
      </div>
    ))}
  </div>
</div>
*/}
