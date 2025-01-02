import { useEffect, useState } from 'react';

const NoSSR = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
};

export default NoSSR;
