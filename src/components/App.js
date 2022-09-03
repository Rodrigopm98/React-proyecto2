import React from 'react';
import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';

function App() {
  return (
    <React.Fragment>
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
</React.Fragment>
  );
}

export default App;
