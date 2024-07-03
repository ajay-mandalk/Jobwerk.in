import React, { useEffect } from 'react';

const Typeform = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live="01J1WRMEFSN908F7NAMH5EYAAR"></div>;
};

export default Typeform;
