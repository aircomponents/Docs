import React from 'react';
import { defineCustomElements } from '@airdesign/ui/loader';

export default function Root({ children }) {
    React.useEffect(() => {
        defineCustomElements();
    }, []);

    return children;
}