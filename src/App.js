import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { PizzaCard } from './components/PizzaCard';

function App() {
  return (
    <PizzaCard
      name={1}
      image="/images/chicago-pizza.jpg"
      desc="The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce."
      price={9}
    />
  );
}

export default App;
