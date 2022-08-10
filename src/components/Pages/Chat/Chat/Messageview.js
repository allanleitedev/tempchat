import React, { useRef, useEffect } from 'react';

function View({children}){
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return <div ref={divRef}>{children}</div>;
}

export default View