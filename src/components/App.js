// App.js

import React from 'react';
import Review from './Review';


const App = () => {
  return (
    <section className="container">
      <p id="review-heading">Our Reviews</p>
      {/* Review component */}
      <Review />
    </section>
  );
};

export default App;
