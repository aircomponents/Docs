import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // 请确保你的样式文件正确

// 卡片的特性数据
const featureList = [
  {
    cardTitle: 'air-card',
    description: '可以方便地构建卡片布局，支持自定义内容、标题、图片等元素。',
    imageUrl: '@site/static/img/air-card.png', // 替换成你实际的图片路径
  },
  {
    cardTitle: 'air-button',
    description: '多种按钮样式，提交、跳转、互动等操作，样式简洁现代，易于使用。',
    imageUrl: '@site/static/img/air-button.png', // 替换成你实际的图片路径
  },
  {
    cardTitle: 'air-text',
    description: '显示文本内容，支持多种文本样式，快速生成响应式文本布局。',
    imageUrl: '@site/static/img/air-text.png', // 替换成你实际的图片路径
  },
];

function FeatureCard({ cardTitle, description, imageUrl, showButton }) {
  return (
    <air-card className="feature-card" size="medium">
      <span slot="title">{cardTitle}</span>
      <div slot="header">
        <div className="text--center">
          <img src={imageUrl} alt={cardTitle} className={styles.featureImage} />
        </div>
      </div>
      <div slot="content">
        <div className="text--center">
          <air-text 
            type="body"  // 设置为 'body' 正常正文文本类型
            color="primary"  // 设置为 primary 色
            inline={false}  // 默认不作为行内元素
            headingSize={3}  // 可选：调整文本大小
            headingLevel={4}  // 可选：设置为<h4>标签
          >
            {description}
          </air-text>
          {showButton && (
            <div className="text--center">
              <air-button size="medium" variant="solid" color="primary">
                了解更多
              </air-button>
            </div>
          )}
        </div>
      </div>
    </air-card>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((feature, idx) => (
            <div className="col col--4" key={idx}>
              <FeatureCard {...feature} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
