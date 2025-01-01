import '@aircomponents/components';

<button>1</button>;

<div style="display: flex; flex-direction: column; gap: 1rem;">
    {/* 默认按钮 */}
    <air-button size="medium" variant="solid" color="primary">
        Primary Button
    </air-button>
    <air-button size="medium" variant="outline" color="primary">
        Outline Primary
    </air-button>
    <air-button size="medium" variant="text" color="primary">
        Text Primary
    </air-button>

    {/* 其他颜色 */}
    <air-button size="medium" variant="solid" color="success">
        Success Button
    </air-button>
    <air-button size="medium" variant="solid" color="info">
        Info Button
    </air-button>
    <air-button size="medium" variant="solid" color="warning">
        Warning Button
    </air-button>
    <air-button size="medium" variant="solid" color="danger">
        Danger Button
    </air-button>
    <air-button size="medium" variant="solid" color="ghost">
        Ghost Button
    </air-button>

    {/* 大小按钮 */}
    <air-button size="small" variant="solid" color="primary">
        Small Button
    </air-button>
    <air-button size="large" variant="solid" color="primary">
        Large Button
    </air-button>

    {/* 带图标的按钮 */}
    <air-button size="medium" variant="solid" color="primary" icon="🔍">
        Search Button
    </air-button>
    <air-button
        size="medium"
        variant="solid"
        color="primary"
        suffixIcon="📥"
    >
        Download Button
    </air-button>

    {/* 带加载状态的按钮 */}
    <air-button
        size="medium"
        variant="solid"
        color="primary"
        loading={true}
    >
        Loading Button
    </air-button>

    {/* 带禁用状态的按钮 */}
    <air-button
        size="medium"
        variant="solid"
        color="primary"
        disabled={true}
    >
        Disabled Button
    </air-button>

    {/* 带选中状态的按钮 */}
    <air-button
        size="medium"
        variant="solid"
        color="primary"
        selected={true}
    >
        Selected Button
    </air-button>
</div>
