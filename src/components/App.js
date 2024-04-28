// App.js
import React from 'react';
import Review from './Review';
import './styles.css'; 

const App = () => {
  return (
    <section className="container">
      <p id="review-heading">Now I can render any React component on any DOM node I want using ReactDOM.render</p>
      {/* Review component */}
      <Review />
    </section>
  );
};

export default App;




