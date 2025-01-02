import React, { useEffect, useState } from 'react';
import NoSSR from 'react-no-ssr';

const AirButton = (props) => {
  const [isButtonReady, setIsButtonReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 动态加载 air-button 组件脚本
      import('air-components/dist/aircomponents/aircomponents.esm.js')
        .then(() => {
          setIsButtonReady(true);  // 加载完成后更新状态
        })
        .catch((err) => {
          console.error('Failed to load air-button:', err);
        });
    }
  }, []);

  // 使用 NoSSR 确保组件仅在客户端渲染
  return (
    <NoSSR>
      {isButtonReady ? (
        <air-button {...props} />
      ) : (
        <div>Loading...</div> // 如果组件没有加载，显示加载指示
      )}
    </NoSSR>
  );
};

export default AirButton;
