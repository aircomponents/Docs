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
        <air-user-profile
          avatar-src="https://avatars.githubusercontent.com/u/146103794?v=4"
          user-name="Jane Smith"
          user-bio="Product Manager, loves tech and coffee."
          editable
        ></air-user-profile>
      </div>
    </div>
  );
}
