import React, { useEffect } from 'react';
// i had to figure out how to put a framework in a library like REACT. this is what I found
function MyComponent() {
  useEffect(() => {
     {/* add the css link for bootstrap */}
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
     {/* add the javascript link for bootstrap */}
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(script);
     {/* remove any prior instances of a link and script within the js code */}
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

 
}

export default MyComponent;