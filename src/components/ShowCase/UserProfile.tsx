import React from "react";
import styles from "./styles.module.css";

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      {/* 左侧文本内容 */}
      <div className={styles.textContainer}>
        <air-text
          type="fluid-heading"
          inline
          classname={styles.description}
          style={{ color: "white" }}
        >
          Seamlessly integrating modern, reusable UI components for
        </air-text>
        <air-text type="fluid-heading" expressive={true} inline>
          front-end stack.
        </air-text>
      </div>
      {/* 右侧用户展示 */}
      <div className={styles.profileContainer}>
        <air-chat class="h-full"></air-chat>
      </div>
    </div>
  );
}
