import { useState, useEffect } from 'react';

const useLoadScript = (url) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${url}"]`);
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url]);

  return scriptLoaded;
};

export default useLoadScript;