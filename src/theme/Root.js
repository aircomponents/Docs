import React from 'react';
import {defineCustomElements} from '@aircomponents/ui/loader';

export default function Root({children}) {
    React.useEffect(() => {
        defineCustomElements();
    }, []);
    
    return children;
}