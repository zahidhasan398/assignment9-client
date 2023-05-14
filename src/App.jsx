import React from 'react';
import NabBur from './component/NabBur';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NabBur></NabBur>
      <Outlet></Outlet>
    </div>
  );
};

export default App;