import { useState } from 'react';

const CustomIcon = ({ src, alt }) => (
    <img src={src} alt={alt} style={{ width: '24px', height: '24px' }} />
);

export default CustomIcon;
