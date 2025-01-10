import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css'; // 样式文件

import pic1 from '../../../static/img/undraw_design_ewba.png';
import pic2 from '../../../static/img/undraw_in-the-zone.png';
import pic3 from '../../../static/img/undraw_walking-together.png';

// 每个部分的数据
const sections = [
  {
    title: <Translate>Framework agnostic</Translate>,
    description: (
      <Translate>
        AirComponents is designed to work seamlessly with any front-end stack. By leveraging Web Components and design tokens, it ensures a consistent look and feel across diverse frameworks like React, Vue, or even vanilla JavaScript.
      </Translate>
    ),
    imageUrl: pic1,
    altText: 'Framework agnostic illustration',
    reverse: false, // 图片在左
  },
  {
    title: <Translate>Easy to use</Translate>,
    description: (
      <Translate>
        With a focus on simplicity and flexibility, AirComponents provides developers with pre-built, reusable components and design patterns, streamlining the development process and reducing time-to-market.
      </Translate>
    ),
    imageUrl: pic2,
    altText: 'Easy to use illustration',
    reverse: true, // 图片在右
  },
  {
    title: <Translate>User friendly</Translate>,
    description: (
      <Translate>
        AirComponents ensures that every component is accessible, intuitive, and adheres to the latest WCAG 2.1 AA standards. This guarantees a seamless experience for developers and end-users alike.
      </Translate>
    ),
    imageUrl: pic3,
    altText: 'User friendly illustration',
    reverse: false, // 图片在左
  },
];

// 单个部分的组件
function Section({ title, description, imageUrl, altText, reverse }) {
  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      {/* 图片区域 */}
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={altText || title} className={styles.image} />
      </div>
      {/* 文本区域 */}
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageSections() {
  return (
    <section className={styles.sections}>
      {sections.map((section, idx) => (
        <Section key={idx} {...section} />
      ))}
    </section>
  );
}
